declare module 'pg' {
  export interface PoolConfig {
    user?: string;
    host?: string;
    database?: string;
    password?: string;
    port?: number;
    ssl?: boolean | object;
    max?: number;
    idleTimeoutMillis?: number;
    connectionTimeoutMillis?: number;
  }

  export interface QueryResult<T = any> {
    rows: T[];
    rowCount: number;
    command: string;
    fields: FieldInfo[];
  }

  export interface FieldInfo {
    name: string;
    tableID: number;
    columnID: number;
    dataTypeID: number;
    dataTypeSize: number;
    dataTypeModifier: number;
    format: string;
  }

  export interface QueryResultRow {
    [column: string]: any;
  }

  export class Pool {
    constructor(config?: PoolConfig);
    connect(): Promise<PoolClient>;
    query<T = QueryResultRow>(text: string, params?: any[]): Promise<QueryResult<T>>;
    end(): Promise<void>;
    on(event: string, listener: (...args: any[]) => void): this;
  }

  export interface PoolClient {
    query<T = QueryResultRow>(text: string, params?: any[]): Promise<QueryResult<T>>;
    release(): void;
  }
} 