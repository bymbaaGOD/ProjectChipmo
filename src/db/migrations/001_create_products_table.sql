-- Create products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    cover_image VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create product_features table for the features array
CREATE TABLE product_features (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    feature TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create product_functions table for the functions array
CREATE TABLE product_functions (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    function TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create product_images table for the images array
CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create product_specifications table
CREATE TABLE product_specifications (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    -- Physical specifications
    dimensions VARCHAR(100),
    weight VARCHAR(100),
    material VARCHAR(100),
    expansion VARCHAR(100),
    power VARCHAR(100),
    standby_current VARCHAR(100),
    interfaces VARCHAR(255),
    gpio VARCHAR(100),
    baud_rate VARCHAR(100),
    cooling_mode VARCHAR(100),
    work_current VARCHAR(100),
    display_interface VARCHAR(100),
    power_supply VARCHAR(100),
    display VARCHAR(100),
    touch_panel VARCHAR(100),
    audio VARCHAR(100),
    keypad VARCHAR(100),
    sensors VARCHAR(100),
    indicator_led VARCHAR(100),
    -- Communication specifications
    ethernet VARCHAR(100),
    wlan VARCHAR(100),
    wwan VARCHAR(100),
    wwan_europe_asia VARCHAR(100),
    wwan_america VARCHAR(100),
    bluetooth VARCHAR(100),
    volte VARCHAR(100),
    gnss VARCHAR(100),
    usb VARCHAR(100),
    -- Development specifications
    os VARCHAR(100),
    sdk VARCHAR(100),
    language VARCHAR(100),
    tool VARCHAR(100),
    -- Performance specifications
    cpu VARCHAR(100),
    ram_rom VARCHAR(100),
    performance_expansion VARCHAR(100),
    resolution VARCHAR(100),
    print_speed VARCHAR(100),
    media_width VARCHAR(100),
    -- Environment specifications
    operating_temp VARCHAR(100),
    storage_temp VARCHAR(100),
    humidity VARCHAR(100),
    drop_spec VARCHAR(100),
    tumble_spec VARCHAR(100),
    sealing VARCHAR(100),
    -- Barcode specifications
    scanner VARCHAR(100),
    one_d_symbologies VARCHAR(255),
    two_d_symbologies VARCHAR(255),
    barcode_note TEXT,
    -- UHF RFID specifications
    engine VARCHAR(100),
    frequency VARCHAR(100),
    impinj_gen2x VARCHAR(100),
    protocol VARCHAR(100),
    antenna VARCHAR(100),
    output_power VARCHAR(100),
    output_power_precision VARCHAR(100),
    output_power_flatness VARCHAR(100),
    receive_sensitivity VARCHAR(100),
    rssi VARCHAR(100),
    ambient_temp_monitor VARCHAR(100),
    read_rate VARCHAR(100),
    antenna_detector VARCHAR(100),
    antenna_port VARCHAR(100),
    rfid_power VARCHAR(100),
    communication_mode VARCHAR(100),
    max_read_range VARCHAR(100),
    rfid_note TEXT,
    -- Camera specifications
    front_camera VARCHAR(100),
    rear_camera VARCHAR(100),
    -- NFC specifications
    nfc_frequency VARCHAR(100),
    nfc_protocol VARCHAR(100),
    nfc_chips VARCHAR(100),
    nfc_range VARCHAR(100),
    nfc_note TEXT,
    -- Accessories
    accessories_items TEXT,
    accessories_note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at
    BEFORE UPDATE ON products
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_product_specifications_updated_at
    BEFORE UPDATE ON product_specifications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 