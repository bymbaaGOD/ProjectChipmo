export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  coverImage?: string;
  images: string[];
  description: string;
  detailedDescription?: string;
  features: string[];
  functions: string[];
  specifications: {
    physical: {
      dimensions?: string;
      weight?: string;
      material?: string;
      expansion?: string;
      power?: string;
      standbyCurrent?: string;
      interfaces?: string;
      gpio?: string;
      baudRate?: string;
      coolingMode?: string;
      workCurrent?: string;
      displayInterface?: string;
      powerSupply?: string;
      display?: string;
      touchPanel?: string;
      audio?: string;
      keypad?: string;
      sensors?: string;
      indicatorLED?: string;
    };
    communication?: {
      ethernet?: string;
      wlan?: string;
      wwan?: string;
      wwanEuropeAsia?: string;
      wwanAmerica?: string;
      bluetooth?: string;
      voLTE?: string;
      gnss?: string;
      usb?: string;
    };
    development?: {
      os?: string;
      sdk?: string;
      language?: string;
      tool?: string;
    };
    performance: {
      cpu?: string;
      ramRom?: string;
      expansion?: string;
      resolution?: string;
      printSpeed?: string;
      mediaWidth?: string;
    };
    environment: {
      operatingTemp?: string;
      storageTemp?: string;
      humidity?: string;
      dropSpec?: string;
      tumbleSpec?: string;
      sealing?: string;
    };
    barcode?: {
      scanner?: string;
      oneDSymbologies?: string;
      twoDSymbologies?: string;
      note?: string;
    };
    uhfRfid?: {
      engine?: string;
      frequency?: string;
      impinjGen2X?: string;
      protocol?: string;
      antenna?: string;
      outputPower?: string;
      outputPowerPrecision?: string;
      outputPowerFlatness?: string;
      receiveSensitivity?: string;
      rssi?: string;
      ambientTempMonitor?: string;
      readRate?: string;
      antennaDetector?: string;
      antennaPort?: string;
      power?: string;
      communicationMode?: string;
      maxReadRange?: string;
      note?: string;
    };
    camera?: {
      front?: string;
      rear?: string;
    };
    nfc?: {
      frequency?: string;
      protocol?: string;
      chips?: string;
      range?: string;
      note?: string;
    };
    accessories?: {
      items: string;
      note?: string;
    };
  };
  created_at: string;
}
