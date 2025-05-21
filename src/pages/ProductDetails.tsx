import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  ChevronRight, 
  ChevronLeft,
  Cpu,
  Battery,
  Wifi,
  Shield,
  Scan,
  Smartphone,
  Camera,
  Keyboard,
  Network,
  Database,
  Barcode,
  Radio,
  Fingerprint,
  Printer,
  Settings,
  Wrench,
  Zap,
  Code,
  Package
} from 'lucide-react';
import Header from '../components/Header';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Icon mapping for features
  const featureIcons: { [key: string]: React.ReactNode } = {
    "5G IoT Chip Platform": <Cpu className="h-5 w-5 text-blue-500" />,
    "Qualcomm Octa-Core 2.0GHz": <Cpu className="h-5 w-5 text-blue-500" />,
    "Wi-Fi 6-Ready": <Wifi className="h-5 w-5 text-blue-500" />,
    "10,200mAh Removable Battery": <Battery className="h-5 w-5 text-blue-500" />,
    "6-Inch FHD Display": <Smartphone className="h-5 w-5 text-blue-500" />,
    "Host IP67 & 1.5m / 5ft. Drop": <Shield className="h-5 w-5 text-blue-500" />,
    "High-Performance Octa-Core 2.3GHz": <Cpu className="h-5 w-5 text-blue-500" />,
    "Android 13/11": <Settings className="h-5 w-5 text-blue-500" />,
    "8000mAh Powerful Battery": <Battery className="h-5 w-5 text-blue-500" />,
    "IP67 & 1.5m / 5ft. Drop": <Shield className="h-5 w-5 text-blue-500" />,
    "4-Channel Fixed RFID Reader": <Radio className="h-5 w-5 text-blue-500" />,
    "Android 9 OS": <Settings className="h-5 w-5 text-blue-500" />,
    "Impinj E710 Integration": <Cpu className="h-5 w-5 text-blue-500" />,
    "Impinj Gen2X Support": <Cpu className="h-5 w-5 text-blue-500" />,
    "Multiple Interface Support": <Network className="h-5 w-5 text-blue-500" />,
    "High Stability": <Shield className="h-5 w-5 text-blue-500" />,
    "Support USB, Bluetooth Communication with PC": <Network className="h-5 w-5 text-blue-500" />,
    "SDK: Support Windows/Android/iOS": <Settings className="h-5 w-5 text-blue-500" />,
    "Bluetooth Low Energy (BLE) 4.0": <Network className="h-5 w-5 text-blue-500" />,
    "Self-Developed Module Based on Impinj E510/E310": <Cpu className="h-5 w-5 text-blue-500" />,
    "Supports Impinj Gen2X for Stable and Powerful UHF Performance": <Cpu className="h-5 w-5 text-blue-500" />,
    "Fixed Installation": <Wrench className="h-5 w-5 text-blue-500" />,
    "High Performance": <Zap className="h-5 w-5 text-blue-500" />,
    "Multiple Antenna Ports": <Radio className="h-5 w-5 text-blue-500" />,
    "Industrial Design": <Wrench className="h-5 w-5 text-blue-500" />,
    "SDK Available": <Settings className="h-5 w-5 text-blue-500" />,
    "300 DPI": <Printer className="h-5 w-5 text-blue-500" />,
    "RFID Encoding": <Radio className="h-5 w-5 text-blue-500" />,
    "Fast Printing": <Printer className="h-5 w-5 text-blue-500" />,
    "Network Connection": <Network className="h-5 w-5 text-blue-500" />
  };

  // Icon mapping for functions
  const functionIcons: { [key: string]: React.ReactNode } = {
    "Self-Developed UHF Module Based on Impinj E710": <Radio className="h-5 w-5 text-green-500" />,
    "Impinj Gen2X for Enhanced UHF Performance": <Radio className="h-5 w-5 text-green-500" />,
    "1300+ Tags/s Read Rate": <Database className="h-5 w-5 text-green-500" />,
    "30m+ / 100ft.+ Read Range": <Radio className="h-5 w-5 text-green-500" />,
    "Detachable UHF Back-Clip": <Radio className="h-5 w-5 text-green-500" />,
    "Barcode Scanning, NFC, and More": <Barcode className="h-5 w-5 text-green-500" />,
    "Powerful Barcode Scanning": <Barcode className="h-5 w-5 text-green-500" />,
    "Camera, NFC, and More": <Camera className="h-5 w-5 text-green-500" />,
    "Warehouse Management": <Database className="h-5 w-5 text-green-500" />,
    "Archives Management": <Database className="h-5 w-5 text-green-500" />,
    "Library Management": <Database className="h-5 w-5 text-green-500" />,
    "Retail Monitoring": <Scan className="h-5 w-5 text-green-500" />,
    "Production Line Management": <Database className="h-5 w-5 text-green-500" />,
    "Medical Instrument Management": <Database className="h-5 w-5 text-green-500" />,
    "Retail Collection": <Database className="h-5 w-5 text-green-500" />,
    "Logistics Management": <Database className="h-5 w-5 text-green-500" />,
    "Identity Verification": <Fingerprint className="h-5 w-5 text-green-500" />,
    "Smart Parking": <Database className="h-5 w-5 text-green-500" />,
    "Access Control": <Shield className="h-5 w-5 text-green-500" />,
    "Anti-Counterfeiting": <Shield className="h-5 w-5 text-green-500" />,
    "Production Process Control": <Database className="h-5 w-5 text-green-500" />,
    "Fixed RFID Reading": <Radio className="h-5 w-5 text-green-500" />,
    "Asset Tracking": <Database className="h-5 w-5 text-green-500" />,
    "Inventory Management": <Database className="h-5 w-5 text-green-500" />,
    "Hands-free Scanning": <Barcode className="h-5 w-5 text-green-500" />,
    "Label Printing": <Printer className="h-5 w-5 text-green-500" />,
    "RFID Encoding": <Radio className="h-5 w-5 text-green-500" />,
    "Barcode Printing": <Printer className="h-5 w-5 text-green-500" />,
    "Batch Printing": <Printer className="h-5 w-5 text-green-500" />
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleGetQuote = () => {
    navigate(`/quote/${product.id}`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Banner Image with Overlay Text */}
      <div className="w-full h-[500px] relative">
        <img 
          src={product.coverImage || product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center justify-end">
            <div className="max-w-xl text-white space-y-4">
              <h2 className="text-4xl font-bold">{product.name}</h2>
              {product.id === 1 ? (
                <>
                  <h3 className="text-2xl text-gray-200">Chainway's Most Powerful Handheld RFID Reader, Setting New Standards for RFID Performance and Efficiency</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Chainway MC50 UHF is a 5G handheld reader integrates with Impinj E710 and supports Impinj Gen2X, it offers unparalleled UHF performance and a convenient UHF back-clip, allowing easy detachment and conversion into a lightweight mobile computer. Paired with fast 5G, Wi-Fi 6-ready connectivity, and many other top-tier features, this reader is your complete solution for unmatched performance.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl text-gray-200">{product.description}</h3>
                  <p className="text-gray-200 leading-relaxed">
                    {product.description}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Image */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {/* Main Image Gallery */}
              <div className="relative aspect-square">
                <img 
                  src={product.images[currentImageIndex]} 
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain rounded-lg bg-gray-50"
                />
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                >
                  <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 aspect-square w-24 rounded-lg overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-contain bg-gray-50"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Features and Functions */}
          <div className="lg:col-span-2">
            {/* Product Description */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Product Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {product.detailedDescription || product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {featureIcons[feature] || <Settings className="h-5 w-5 text-blue-500" />}
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Functions */}
            <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Functions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.functions.map((func, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {functionIcons[func] || <Settings className="h-5 w-5 text-green-500" />}
                    </div>
                    <span className="text-gray-600">{func}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specifications - Full Width */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Settings className="h-6 w-6 mr-2 text-blue-600" />
                Technical Specifications
              </h2>
              <div className="space-y-8">
                {/* Physical Characteristics */}
                {product.specifications.physical && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Wrench className="h-5 w-5 mr-2 text-blue-600" />
                      Physical Characteristics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.physical).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Communication */}
                {product.specifications.communication && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Network className="h-5 w-5 mr-2 text-blue-600" />
                      Communication
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.communication).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.toUpperCase()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Development Environment */}
                {product.specifications.development && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Code className="h-5 w-5 mr-2 text-blue-600" />
                      Development Environment
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.development).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.toUpperCase()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Performance */}
                {product.specifications.performance && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-blue-600" />
                      Performance
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.performance).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.toUpperCase()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Environment */}
                {product.specifications.environment && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-blue-600" />
                      Environment
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.environment).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Barcode */}
                {product.specifications.barcode && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Barcode className="h-5 w-5 mr-2 text-blue-600" />
                      Barcode Scanning
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.barcode).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* UHF RFID */}
                {product.specifications.uhfRfid && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Radio className="h-5 w-5 mr-2 text-blue-600" />
                      UHF RFID
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.uhfRfid).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Camera */}
                {product.specifications.camera && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Camera className="h-5 w-5 mr-2 text-blue-600" />
                      Camera
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.camera).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.toUpperCase()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* NFC */}
                {product.specifications.nfc && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Radio className="h-5 w-5 mr-2 text-blue-600" />
                      NFC
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.nfc).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.toUpperCase()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Accessories */}
                {product.specifications.accessories && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Package className="h-5 w-5 mr-2 text-blue-600" />
                      Optional Accessories
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications.accessories).map(([key, value]) => (
                        value && (
                          <div key={key} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium text-gray-700">{key.toUpperCase()}: </span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Get Quote Button */}
            <button
              onClick={handleGetQuote}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors mt-6 font-semibold text-lg flex items-center justify-center"
            >
              <FileText className="h-5 w-5 mr-2" />
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;