import { Pool, QueryResult, PoolClient, QueryResultRow } from 'pg';
import pool from '../config/database';

export class DatabaseError extends Error {
  constructor(message: string, public originalError?: Error) {
    super(message);
    this.name = 'DatabaseError';
  }
}

interface TableRow extends QueryResultRow {
  column_name: string;
}

export const query = async <T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> => {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res as QueryResult<T>;
  } catch (error) {
    console.error('Error executing query', { text, error });
    throw new DatabaseError('Error executing query', error as Error);
  }
};

export const getClient = async (): Promise<PoolClient> => {
  return await pool.connect();
};

export const transaction = async <T>(
  callback: (client: PoolClient) => Promise<T>
): Promise<T> => {
  const client = await getClient();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

// Helper function to check if a table exists
export const tableExists = async (tableName: string): Promise<boolean> => {
  const result = await query<{ exists: boolean }>(
    `SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = $1
    )`,
    [tableName]
  );
  return result.rows[0].exists;
};

// Helper function to get table columns
export const getTableColumns = async (tableName: string): Promise<string[]> => {
  const result = await query<TableRow>(
    `SELECT column_name 
     FROM information_schema.columns 
     WHERE table_schema = 'public' 
     AND table_name = $1`,
    [tableName]
  );
  return result.rows.map((row: TableRow) => row.column_name);
}; 