import React, { useState } from 'react';
import { Product } from '../../types/product';

interface ProductFormProps {
  onSubmit: (product: Partial<Product>) => void;
  initialData?: Partial<Product>;
}

type SpecificationSection = keyof Product['specifications'];

const defaultSpecifications: Product['specifications'] = {
  physical: {
    dimensions: '',
    weight: '',
    material: '',
    expansion: '',
    power: '',
    standbyCurrent: '',
    interfaces: '',
    gpio: '',
    baudRate: '',
    coolingMode: '',
    workCurrent: '',
    displayInterface: '',
    powerSupply: '',
    display: '',
    touchPanel: '',
    audio: '',
    keypad: '',
    sensors: '',
    indicatorLED: ''
  },
  communication: {
    ethernet: '',
    wlan: '',
    wwan: '',
    wwanEuropeAsia: '',
    wwanAmerica: '',
    bluetooth: '',
    voLTE: '',
    gnss: '',
    usb: ''
  },
  development: {
    os: '',
    sdk: '',
    language: '',
    tool: ''
  },
  performance: {
    cpu: '',
    ramRom: '',
    expansion: '',
    resolution: '',
    printSpeed: '',
    mediaWidth: ''
  },
  environment: {
    operatingTemp: '',
    storageTemp: '',
    humidity: '',
    dropSpec: '',
    tumbleSpec: '',
    sealing: ''
  },
  barcode: {
    scanner: '',
    oneDSymbologies: '',
    twoDSymbologies: '',
    note: ''
  },
  uhfRfid: {
    engine: '',
    frequency: '',
    impinjGen2X: '',
    protocol: '',
    antenna: '',
    outputPower: '',
    outputPowerPrecision: '',
    outputPowerFlatness: '',
    receiveSensitivity: '',
    rssi: '',
    ambientTempMonitor: '',
    readRate: '',
    antennaDetector: '',
    antennaPort: '',
    power: '',
    communicationMode: '',
    maxReadRange: '',
    note: ''
  },
  camera: {
    front: '',
    rear: ''
  },
  nfc: {
    frequency: '',
    protocol: '',
    chips: '',
    range: '',
    note: ''
  },
  accessories: {
    items: '',
    note: ''
  }
};

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<Partial<Product>>(initialData || {
    name: '',
    category: '',
    image: '',
    images: [''],
    description: '',
    features: [''],
    functions: [''],
    specifications: defaultSpecifications
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [section, field] = name.split('.') as [SpecificationSection, string];
      setFormData(prev => {
        const currentSpecs = prev.specifications || defaultSpecifications;
        const currentSection = currentSpecs[section] || {};
        
        return {
          ...prev,
          specifications: {
            ...currentSpecs,
            [section]: {
              ...currentSection,
              [field]: value
            }
          }
        };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData(prev => {
      const newArray = [...(prev[field as keyof Product] as string[] || [])];
      newArray[index] = value;
      return { ...prev, [field]: newArray };
    });
  };

  const addArrayItem = (field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field as keyof Product] as string[] || []), '']
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => {
      const newArray = [...(prev[field as keyof Product] as string[] || [])];
      newArray.splice(index, 1);
      return { ...prev, [field]: newArray };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Main Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
            <input
              type="text"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Features */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Features</h2>
        {formData.features?.map((feature, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={feature}
              onChange={(e) => handleArrayChange('features', index, e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('features', index)}
              className="px-3 py-2 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('features')}
          className="mt-2 text-blue-600 hover:text-blue-800"
        >
          Add Feature
        </button>
      </div>

      {/* Functions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Functions</h2>
        {formData.functions?.map((func, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={func}
              onChange={(e) => handleArrayChange('functions', index, e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => removeArrayItem('functions', index)}
              className="px-3 py-2 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('functions')}
          className="mt-2 text-blue-600 hover:text-blue-800"
        >
          Add Function
        </button>
      </div>

      {/* Specifications */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Specifications</h2>
        
        {/* Physical */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Physical</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Dimensions</label>
              <input
                type="text"
                name="physical.dimensions"
                value={formData.specifications?.physical?.dimensions || ''}
                onChange={handleChange}
                placeholder="e.g., 165.0 x 83.8 x 138.0mm"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Weight</label>
              <input
                type="text"
                name="physical.weight"
                value={formData.specifications?.physical?.weight || ''}
                onChange={handleChange}
                placeholder="e.g., 679g / 23.95oz"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Material</label>
              <input
                type="text"
                name="physical.material"
                value={formData.specifications?.physical?.material || ''}
                onChange={handleChange}
                placeholder="e.g., ABS Plastic"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Power</label>
              <input
                type="text"
                name="physical.power"
                value={formData.specifications?.physical?.power || ''}
                onChange={handleChange}
                placeholder="e.g., 5000mAh removable battery"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Interfaces</label>
              <input
                type="text"
                name="physical.interfaces"
                value={formData.specifications?.physical?.interfaces || ''}
                onChange={handleChange}
                placeholder="e.g., USB Type-C, USB 3.1, OTG"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Display</label>
              <input
                type="text"
                name="physical.display"
                value={formData.specifications?.physical?.display || ''}
                onChange={handleChange}
                placeholder="e.g., 6-inch high definition display"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Communication */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Communication</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">WLAN</label>
              <input
                type="text"
                name="communication.wlan"
                value={formData.specifications?.communication?.wlan || ''}
                onChange={handleChange}
                placeholder="e.g., 802.11 a/b/g/n/ac"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">WWAN</label>
              <input
                type="text"
                name="communication.wwan"
                value={formData.specifications?.communication?.wwan || ''}
                onChange={handleChange}
                placeholder="e.g., 4G: B1/B2/B3/B5/B7/B8"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bluetooth</label>
              <input
                type="text"
                name="communication.bluetooth"
                value={formData.specifications?.communication?.bluetooth || ''}
                onChange={handleChange}
                placeholder="e.g., Bluetooth 5.1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">GNSS</label>
              <input
                type="text"
                name="communication.gnss"
                value={formData.specifications?.communication?.gnss || ''}
                onChange={handleChange}
                placeholder="e.g., GPS/AGPS, GLONASS, BeiDou"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">USB</label>
              <input
                type="text"
                name="communication.usb"
                value={formData.specifications?.communication?.usb || ''}
                onChange={handleChange}
                placeholder="e.g., USB Type-C"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ethernet</label>
              <input
                type="text"
                name="communication.ethernet"
                value={formData.specifications?.communication?.ethernet || ''}
                onChange={handleChange}
                placeholder="e.g., 10/100 Base-T"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Development */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">OS</label>
              <input
                type="text"
                name="development.os"
                value={formData.specifications?.development?.os || ''}
                onChange={handleChange}
                placeholder="e.g., Android 12"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">SDK</label>
              <input
                type="text"
                name="development.sdk"
                value={formData.specifications?.development?.sdk || ''}
                onChange={handleChange}
                placeholder="e.g., Chainway SDK"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Environment */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Environment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Operating Temperature</label>
              <input
                type="text"
                name="environment.operatingTemp"
                value={formData.specifications?.environment?.operatingTemp || ''}
                onChange={handleChange}
                placeholder="e.g., -20°C to +50°C"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Storage Temperature</label>
              <input
                type="text"
                name="environment.storageTemp"
                value={formData.specifications?.environment?.storageTemp || ''}
                onChange={handleChange}
                placeholder="e.g., -40°C to +70°C"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Humidity</label>
              <input
                type="text"
                name="environment.humidity"
                value={formData.specifications?.environment?.humidity || ''}
                onChange={handleChange}
                placeholder="e.g., 5% - 95% RH"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sealing</label>
              <input
                type="text"
                name="environment.sealing"
                value={formData.specifications?.environment?.sealing || ''}
                onChange={handleChange}
                placeholder="e.g., IP67"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Save Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm; 