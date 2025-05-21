import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "MC50 5G UHF RFID Reader (Android 12)",
    category: "RFID Readers",
    image: "/images/product1.jpg",
    coverImage: "/images/product1cover.jpg",
    images: [
      "/images/product1-1.jpg",
      "/images/product1-2.jpg",
      "/images/product1-3.jpg",
      "/images/product1-4.jpg",
      "/images/product1-5.jpg"
    ],
    description: "Chainway's Most Powerful Handheld RFID Reader, Setting New Standards for RFID Performance and Efficiency",
    features: [
      "5G IoT Chip Platform",
      "Qualcomm Octa-Core 2.0GHz",
      "Wi-Fi 6-Ready",
      "10,200mAh Removable Battery",
      "6-Inch FHD Display",
      "Host IP67 & 1.5m / 5ft. Drop"
    ],
    functions: [
      "Self-Developed UHF Module Based on Impinj E710",
      "Impinj Gen2X for Enhanced UHF Performance",
      "1300+ Tags/s Read Rate",
      "30m+ / 100ft.+ Read Range",
      "Detachable UHF Back-Clip",
      "Barcode Scanning, NFC, and More"
    ],
    specifications: {
      physical: {
        dimensions: "165.0 x 83.8x 138.0mm / 6.49 x 3.30 x 5.43 in.",
        weight: "679g / 23.95oz. (device with battery)",
        display: "6-inch high definition display (18:9), 1440 x 720",
        touchPanel: "Corning Gorilla Glass, multi-touch panel, gloves and wet hands supported",
        power: "5000mAh removable main battery\n5200mAh removable pistol battery with / without Meter(Optional)\nsupport QC3.0 and RTC",
        interfaces: "USB Type-C, USB 3.1, OTG",
        audio: "2 microphones, 1 for noise cancellation; 1 speaker; 1 receiver",
        keypad: "Power key, 2 scan keys, volume (+/-) keys",
        sensors: "G_sensor, proximity sensor, light sensor, geomagnetic sensor, gyroscope"
      },
      communication: {
        wlan: "Support 802.11 a/b/g/n/ac/ax-ready, 2.4G/5G dual-band, IPV4, IPV6, 5G PA; 2x2 MU-MIMO;\nFast roaming: PMKID caching, 802.11r, OKC\nOperating Channels: 2.4G (channel 1~13), 5G (channel 36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 149, 153, 157, 161, 165), Depends on local regulations\nSecurity and Encryption: WEP, WPA/WPA2-PSK(TKIP and AES), WAPI-PSK—EAP-TTLS, EAP-TLS, PEAP-MSCHAPv2, PEAP-LTS,PEAP-GTC, WPA3-Enterprise, WPA3-Enhanced Open, WPA3 Easy Connect, WPA3-Personal, etc.",
        wwan: "2G: 850/900/1800/1900MHz\n3G: 850/900/1900/2100MHz\n4G: B1/B2/B3/B5/B7/B8/B20/B28A/B28B/B34/B38/B39/B40/ B41\n5G: N1/N3/N8/N28/N41/N78/N79",
        bluetooth: "Bluetooth 5.1",
        voLTE: "Support Vo-LTE HD video voice call",
        gnss: "GPS/AGPS, GLONASS, BeiDou, Galileo, internal antenna"
      },
      development: {
        os: "Android 12",
        sdk: "Chainway Software Development Kit",
        language: "Java",
        tool: "Eclipse / Android Studio"
      },
      performance: {
        cpu: "Octa-core, 2.0GHz",
        ramRom: "4GB + 64GB / 6GB + 128GB (Optional) / 8GB + 128GB (Optional)",
        expansion: "Supports up to 256GB TF card"
      },
      environment: {
        operatingTemp: "-4°F to 122°F / -20°C to +50°C",
        storageTemp: "-40°F to 158°F / -40°C to +70°C",
        humidity: "5% RH - 95% RH non condensing",
        dropSpec: "Multiple 1.5m / 4.92ft. drops (at least 20 times) to the concrete across the operating temperature range",
        tumbleSpec: "1000 x 0.5m / 1.64ft. falls at room temperature",
        sealing: "Host IP67 per IEC sealing specifications"
      },
      barcode: {
        scanner: "Zebra: SE4710/SE5500/SE4750; CM60",
        oneDSymbologies: "UPC/EAN, Code128, Code39, Code93, Code11, Interleaved 2 of 5, Discrete 2 of 5, Chinese 2 of 5, Codabar, MSI, RSS, etc.",
        twoDSymbologies: "PDF417, MicroPDF417, Composite, RSS, TLC-39, Datamatrix, QR code, Micro QR code, Aztec, MaxiCode; Postal Codes: US PostNet, US Planet, UK Postal, Australian Postal, Japan Postal, Dutch Postal (KIX),etc.",
        note: "*This function is optional"
      },
      uhfRfid: {
        engine: "CM710-1 module based on Impinj E710",
        frequency: "865-868 MHz / 920-925 MHz / 902-928 MHz",
        protocol: "EPC C1 GEN2 / ISO18000-6C",
        antenna: "Circular Polarized Antenna (4 dBi)",
        power: "1W (30dBm, +5dBm to +30dBm adjustable)\n2W Optional (33dBm, for Latin America, etc.)",
        readRate: "1300+ tags/sec (Circular Polarized)",
        communicationMode: "Pin Connector",
        maxReadRange: "26m (Impinj MR6 tag, size 70 x 15mm)\n28m (Impinj M750 tag, size 70 x 15mm)\n30m (Alien H3 Anti-Metal tag, size 130 x 42mm)",
        note: "*This function is optional\n*Ranges and rates depend on tags and environment"
      },
      camera: {
        front: "5MP",
        rear: "16MP Autofocus with flash"
      },
      nfc: {
        frequency: "13.56 MHz",
        protocol: "ISO14443A/B, ISO15693, NFC-IP1, NFC-IP2, etc.",
        chips: "M1 card (S50, S70), CPU card, NFC tags, etc.",
        range: "2-4 cm"
      },
      accessories: {
        items: "USB Cable, Adapter, Charging Cradle, Rugged Rubber Boot, etc.",
        note: "*See details in accessory guide"
      }
    },
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    name: "C72 Mobile Computer (Android 11/13)",
    category: "Mobile Computers",
    image: "/images/product2.jpg",
    coverImage: "/images/product2cover.jpg",
    images: [
      "/images/product2-1.jpg",
      "/images/product2-2.jpg",
      "/images/product2-3.jpg",
      "/images/product2-4.jpg",
      "/images/product2-5.jpg"
    ],
    description: "Ultimate Barcode Scanning, Powerful Battery, Easy to Hold",
    detailedDescription: "Chainway C72 is an industrial-grade Android mobile computer. With an in-build Zebra scan engine, the device ensures powerful barcode scanning performance that can accurately & quickly read various Symbologies of 1D/2D barcode labels even if the barcode is dirty, damaged, or wrinkled. In addition, C72 features Android 11/13 OS, Octa-core processor, 8000mAh powerful battery, 13 MP camera, and optional NFC reading. The device is perfectly suitable for various applications in power inspection, asset management, retail, warehousing, logistics, finance & manufacturing industries, etc.",
    features: [
      "High-Performance Octa-Core 2.3GHz",
      "Android 13/11",
      "8000mAh Powerful Battery",
      "IP67 & 1.5m / 5ft. Drop"
    ],
    functions: [
      "Powerful Barcode Scanning",
      "Camera, NFC, and More"
    ],
    specifications: {
      physical: {
        dimensions: "165.0 x 83.8x 138.0mm / 6.49 x 3.30 x 5.43 in.",
        weight: "679g / 23.95oz. (device with battery)",
        display: "6-inch high definition display (18:9), 1440 x 720",
        touchPanel: "Corning Gorilla Glass, multi-touch panel, gloves and wet hands supported",
        power: "8000mAh removable battery",
        interfaces: "USB Type-C, USB 3.1, OTG",
        audio: "2 microphones, 1 for noise cancellation; 1 speaker; 1 receiver",
        keypad: "Power key, 2 scan keys, volume (+/-) keys",
        sensors: "G_sensor, proximity sensor, light sensor, geomagnetic sensor, gyroscope"
      },
      communication: {
        wlan: "Support 802.11 a/b/g/n/ac/ax-ready, 2.4G/5G dual-band, IPV4, IPV6, 5G PA; 2x2 MU-MIMO",
        wwan: "4G: B1/B2/B3/B5/B7/B8/B20/B28A/B28B/B34/B38/B39/B40/ B41",
        bluetooth: "Bluetooth 5.1",
        gnss: "GPS/AGPS, GLONASS, BeiDou, Galileo, internal antenna"
      },
      development: {
        os: "Android 11/13",
        sdk: "Chainway Software Development Kit",
        language: "Java",
        tool: "Eclipse / Android Studio"
      },
      performance: {
        cpu: "Octa-core, 2.0GHz",
        ramRom: "4GB + 64GB / 6GB + 128GB (Optional) / 8GB + 128GB (Optional)",
        expansion: "Supports up to 256GB TF card"
      },
      environment: {
        operatingTemp: "-4°F to 122°F / -20°C to +50°C",
        storageTemp: "-40°F to 158°F / -40°C to +70°C",
        humidity: "5% RH - 95% RH non condensing",
        dropSpec: "Multiple 1.5m / 4.92ft. drops (at least 20 times) to the concrete across the operating temperature range",
        tumbleSpec: "1000 x 0.5m / 1.64ft. falls at room temperature",
        sealing: "Host IP67 per IEC sealing specifications"
      },
      barcode: {
        scanner: "Zebra: SE4710/SE5500/SE4750; CM60",
        oneDSymbologies: "UPC/EAN, Code128, Code39, Code93, Code11, Interleaved 2 of 5, Discrete 2 of 5, Chinese 2 of 5, Codabar, MSI, RSS, etc.",
        twoDSymbologies: "PDF417, MicroPDF417, Composite, RSS, TLC-39, Datamatrix, QR code, Micro QR code, Aztec, MaxiCode; Postal Codes: US PostNet, US Planet, UK Postal, Australian Postal, Japan Postal, Dutch Postal (KIX),etc.",
        note: "*This function is optional"
      },
      camera: {
        front: "5MP",
        rear: "13MP Autofocus with flash"
      },
      nfc: {
        frequency: "13.56 MHz",
        protocol: "ISO14443A/B, ISO15693, NFC-IP1, NFC-IP2, etc.",
        chips: "M1 card (S50, S70), CPU card, NFC tags, etc.",
        range: "2-4 cm",
        note: "*This function is optional"
      },
      accessories: {
        items: "USB Cable, Adapter, Charging Cradle, Rugged Rubber Boot, etc.",
        note: "*See details in accessory guide"
      }
    },
    created_at: "2024-01-02T00:00:00Z"
  },
  {
    id: 3,
    name: "URA4 Fixed RFID Reader (Android 9)",
    category: "RFID Readers",
    image: "/images/product3.jpg",
    coverImage: "/images/product3cover.jpg",
    images: [
      "/images/product3-1.jpg",
      "/images/product3-2.jpg",
      "/images/product3-3.jpg",
      "/images/product3-4.jpg"
    ],
    description: "Excellent RFID Capability with Suitable Android OS & Various Interface",
    detailedDescription: "Chainway URA4 is a 4-channel fixed RFID reader, based on Android 9 Integrated with Impinj E710 chip. With the added support of Impinj Gen2X, it delivers superior UHF performance. The reader supports RS232, RJ45 and HDMI, and can be compatible with various types of antennas. With high stability and outstanding performance, URA4 can be ideally applied to warehouse management, archives and library management, bank, clothing and footwear retail, jewelry monitoring, watch industry, laundry, production line management, medical instrument cabinet and vending machines.",
    features: [
      "4-Channel Fixed RFID Reader",
      "Android 9 OS",
      "Impinj E710 Integration",
      "Impinj Gen2X Support",
      "Multiple Interface Support",
      "High Stability"
    ],
    functions: [
      "Warehouse Management",
      "Archives Management",
      "Library Management",
      "Retail Monitoring",
      "Production Line Management",
      "Medical Instrument Management"
    ],
    specifications: {
      physical: {
        dimensions: "214 (L) x 148 (W) x 30 (H) mm",
        weight: "1000g / 35.27 oz. (without antenna)",
        material: "Aluminium alloy",
        expansion: "1 slot for Nano SIM card, 1 slot for TF card",
        power: "DC 10V – 24V",
        standbyCurrent: "< 30mA",
        interfaces: "1*RS-232, 1*RJ45, 3*USB2.0 Type A, 1*Type C, USB Host",
        gpio: "4 Input Optical-couplings, 4 Output Optical-ouplings, isolation",
        baudRate: "115200 bps",
        coolingMode: "Air cooling",
        workCurrent: "1300mA +/-5% @ DC 12V Input",
        displayInterface: "HDMI Type A, support 720P",
        powerSupply: "DC (12V), POE (802.3af 13W), POE+ (802.3at 25.5W)"
      },
      communication: {
        ethernet: "10/100 Base-T Ethernet (RJ45)",
        wlan: "Support 802.11 a/b/g/n/ac/d/e/h/i/k/r/v, 2.4G/5G dual-band, IPV4, IPV6;\nFast roaming: PMKID caching, 802.11r, OKC;\nOperating Channels: 2.4G(channel 1~13), 5G(channel 36,40,44,48,52,56,60,64,100,104,108,112,116,120,124,128,132,136,140,149,153,157,161,165), Depends on local regulations;\nSecurity and Encryption: WEP, WPA/WPA2-PSK(TKIP and AES), WAPI-PSK—EAP-TTLS, EAP-TLS, PEAP-MSCHAPv2, PEAP-LTS, PEAP-GTC, etc.",
        wwanEuropeAsia: "2G: B1/B5/B8\n3G: CDMA EVDO: BC0\nTD-SCDMA: B34/B39\nWCDMA: B1/B5/B8\n4G: TDD-LTE: B34/B38/B39/B40/B41\nFDD-LTE: B1/B3/B5/B7/B8/B20",
        wwanAmerica: "3G: B2/B4/B5\n4G: B2/B4/B5/B7/B12/B13/B17/B28a/B28b",
        bluetooth: "Bluetooth 4.2/4.1+HS/4.0/3.0+HS/2.1+EDR"
      },
      development: {
        os: "Android 9.0",
        sdk: "Chainway Software Development Kit",
        language: "Java",
        tool: "Eclipse/Android Studio"
      },
      performance: {
        cpu: "Qualcomm 1.8 GHz Octa-core",
        ramRom: "3 GB + 32 GB\n2 GB + 16 GB (optional)"
      },
      environment: {
        operatingTemp: "-25 °C to 65 °C",
        storageTemp: "-40 °C to 85 °C",
        humidity: "10% - 95%"
      },
      uhfRfid: {
        engine: "CM710-4 module based on Impinj E710",
        frequency: "865-868 MHz / 920-925 MHz / 902-928 MHz",
        impinjGen2X: "Supported",
        protocol: "EPC global UHF Class 1 Gen 2 / ISO 18000-6C",
        antenna: "Supporting a variety of antennas, such as 6dBic, 9dBic",
        outputPower: "1W (30dBm, support +5~+30dBm adjustable, POE/DC power)\n2W Optional (33dBm, support +10~+33dBm adjustable, POE+/DC power, for Latin America, etc.)",
        outputPowerPrecision: "+/- 1dB",
        outputPowerFlatness: "+/- 0.2dB",
        receiveSensitivity: "< -84dBm",
        rssi: "Supported",
        ambientTempMonitor: "Supported",
        readRate: "900+ tags/sec",
        antennaDetector: "Supported",
        antennaPort: "4 channel 50Ω TNC port"
      },
      accessories: {
        items: "Power Adapter, Mounting Bracket, Antenna (Optional)",
        note: "*See details in accessory guide"
      }
    },
    created_at: "2024-01-03T00:00:00Z"
  },
  {
    id: 4,
    name: "R3 Desktop RFID Reader",
    category: "RFID Readers",
    image: "/images/product4.jpg",
    coverImage: "/images/product4cover.jpg",
    images: [
      "/images/product4-1.jpg",
      "/images/product4-2.jpg",
      "/images/product4-3.jpg",
      "/images/product4-4.jpg",
      "/images/product4-5.jpg"
    ],
    description: "Professional Short Range RFID Reading, Tailored for Desktop Applications",
    detailedDescription: "Chainway R3 is a newly-developed desktop UHF reader, supporting Impinj Gen2X. It is compatible with Windows/ Android/IOS applications, and enables short read distance within 50cm. Combined with high-efficiency collision processing algorithm, it delivers fast reading and writing of tags and maintains high identification rate as well. And it allows data transmission via Bluetooth, Type C USB. R3 can be deployed in retail collection, logistics, identity verification, smart parking, access control, anti-counterfeiting system, production process control, etc.",
    features: [
      "Support USB, Bluetooth Communication with PC",
      "SDK: Support Windows/Android/iOS",
      "Bluetooth Low Energy (BLE) 4.0",
      "Self-Developed Module Based on Impinj E510/E310",
      "Supports Impinj Gen2X for Stable and Powerful UHF Performance"
    ],
    functions: [
      "Retail Collection",
      "Logistics Management",
      "Identity Verification",
      "Smart Parking",
      "Access Control",
      "Anti-Counterfeiting",
      "Production Process Control"
    ],
    specifications: {
      physical: {
        dimensions: "318 mm × 318 mm × 20 mm",
        weight: "1133 g / 39.96 oz.",
        indicatorLED: "Power, BT connection status, Working (flash when scanning tags)",
        interfaces: "USB Type-C",
        power: "USB Type-C"
      },
      communication: {
        bluetooth: "Bluetooth Low Energy (BLE) 4.0",
        usb: "USB Type C for data transfer"
      },
      development: {
        sdk: "USB, Android /Windows\nBluetooth, Android / IOS"
      },
      performance: {
        cpu: "ARM Cortex-M4"
      },
      environment: {
        operatingTemp: "-20 °C to +50 °C",
        storageTemp: "-40 °C to +70 °C",
        humidity: "5%RH - 95%RH non condensing",
        sealing: "IP65"
      },
      uhfRfid: {
        engine: "CM310-4 module based on Impinj E310\nCM510-4 module based on Impinj E510",
        frequency: "865-868 / 920-925 / 902-928 MHz (custom-design for frequency band)",
        impinjGen2X: "Supported",
        protocol: "EPC C1 GEN2 / ISO18000-6C",
        outputPower: "1dBm-30dBm, 1dBm (Stepper)",
        maxReadRange: "0-50 cm"
      },
      accessories: {
        items: "USB Cable, Power Adapter, User Manual",
        note: "*See details in accessory guide"
      }
    },
    created_at: "2024-01-04T00:00:00Z"
  },
  {
    id: 5,
    name: "C72 UHF RFID Reader",
    category: "RFID Readers",
    image: "/images/product5.jpg",
    images: ["/images/product5.jpg"],
    description: "Fixed UHF RFID Reader with high performance",
    features: [
      "Fixed Installation",
      "High Performance",
      "Multiple Antenna Ports",
      "Industrial Design",
      "SDK Available"
    ],
    functions: [
      "Fixed RFID Reading",
      "Asset Tracking",
      "Inventory Management",
      "Access Control",
      "Hands-free Scanning"
    ],
    specifications: {
      physical: {
        dimensions: "165.0 x 83.8x 138.0mm",
        weight: "679g",
        interfaces: "USB Type-C, USB 3.1"
      },
      communication: {
        wlan: "802.11 a/b/g/n/ac",
        bluetooth: "Bluetooth 5.1"
      },
      development: {
        os: "Android 12",
        sdk: "Chainway SDK"
      },
      performance: {
        cpu: "Octa-core"
      },
      environment: {
        operatingTemp: "-20°C to +50°C",
        sealing: "IP67"
      }
    },
    created_at: "2024-01-05T00:00:00Z"
  },
  {
    id: 6,
    name: "C72 UHF RFID Reader",
    category: "RFID Readers",
    image: "/images/product6.jpg",
    images: ["/images/product6.jpg"],
    description: "Fixed UHF RFID Reader with high performance",
    features: [
      "Fixed Installation",
      "High Performance",
      "Multiple Antenna Ports",
      "Industrial Design",
      "SDK Available"
    ],
    functions: [
      "Fixed RFID Reading",
      "Asset Tracking",
      "Inventory Management",
      "Access Control",
      "Hands-free Scanning"
    ],
    specifications: {
      physical: {
        dimensions: "165.0 x 83.8x 138.0mm",
        weight: "679g",
        interfaces: "USB Type-C, USB 3.1"
      },
      communication: {
        wlan: "802.11 a/b/g/n/ac",
        bluetooth: "Bluetooth 5.1"
      },
      development: {
        os: "Android 12",
        sdk: "Chainway SDK"
      },
      performance: {
        cpu: "Octa-core"
      },
      environment: {
        operatingTemp: "-20°C to +50°C",
        sealing: "IP67"
      }
    },
    created_at: "2024-01-06T00:00:00Z"
  },
  {
    id: 7,
    name: "P80 Label Printer",
    category: "Printers",
    image: "/placeholder.jpg",
    images: ["/placeholder.jpg"],
    description: "Industrial thermal printer for barcode and RFID labels",
    features: ["300 DPI", "RFID Encoding", "Fast Printing", "Network Connection"],
    functions: [
      "Label Printing",
      "RFID Encoding",
      "Barcode Printing",
      "Batch Printing"
    ],
    specifications: {
      physical: {
        dimensions: "165.0 x 83.8x 138.0mm",
        weight: "679g",
        interfaces: "USB/Network"
      },
      performance: {
        resolution: "300 DPI",
        printSpeed: "4 inches/sec",
        mediaWidth: "4 inches"
      },
      environment: {
        operatingTemp: "-20°C to +50°C",
        sealing: "IP54"
      }
    },
    created_at: "2024-01-07T00:00:00Z"
  }
];

export const categories = ["All", "RFID Readers", "Mobile Computers", "Barcode Scanners", "Printers"];
