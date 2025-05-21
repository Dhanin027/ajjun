import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Save, X, Upload, Eye } from 'lucide-react';

const AddItem: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Add New Item</h1>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Link 
            to="/items" 
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-150"
          >
            <X className="h-4 w-4 mr-1.5" />
            Cancel
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-150"
          >
            <Save className="h-4 w-4 mr-1.5" />
            Save Item
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('general')}
              className={`w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'general'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'pricing'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'inventory'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Inventory
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'additional'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Additional Info
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Item Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter item name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sku" className="block text-sm font-medium text-gray-700">
                      SKU <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="sku"
                      className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter SKU (Stock Keeping Unit)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      id="category"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                    >
                      <option>Select a category</option>
                      <option>Electronics</option>
                      <option>Furniture</option>
                      <option>Office Supplies</option>
                      <option>Services</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter item description"
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Item Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                    Unit
                  </label>
                  <select
                    id="unit"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                  >
                    <option>Select a unit</option>
                    <option>Each</option>
                    <option>Box</option>
                    <option>Pack</option>
                    <option>Kg</option>
                    <option>Liter</option>
                    <option>Hour</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700">
                    Manufacturer
                  </label>
                  <input
                    type="text"
                    id="manufacturer"
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter manufacturer"
                  />
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'pricing' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="selling_price" className="block text-sm font-medium text-gray-700">
                    Selling Price <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      id="selling_price"
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">USD</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="cost_price" className="block text-sm font-medium text-gray-700">
                    Cost Price
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      id="cost_price"
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">USD</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="tax" className="block text-sm font-medium text-gray-700">
                    Tax
                  </label>
                  <select
                    id="tax"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                  >
                    <option>None (0%)</option>
                    <option>Sales Tax (7%)</option>
                    <option>VAT (20%)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
                    Discount
                  </label>
                  <div className="mt-1 grid grid-cols-2 gap-3">
                    <input
                      type="number"
                      id="discount"
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="0"
                    />
                    <select
                      id="discount_type"
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                    >
                      <option>Percentage (%)</option>
                      <option>Amount ($)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Price Tiers</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Set different prices for different customer tiers or bulk quantities.
                </p>
                
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Add Price Tier
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'inventory' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="track_inventory"
                        name="track_inventory"
                        type="checkbox"
                        className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="track_inventory" className="font-medium text-gray-700">
                        Track Inventory for this Item
                      </label>
                      <p className="text-gray-500">
                        Enable to maintain stock levels and receive low stock alerts.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="inventory_account" className="block text-sm font-medium text-gray-700">
                    Inventory Account
                  </label>
                  <select
                    id="inventory_account"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                  >
                    <option>Inventory Asset</option>
                    <option>Merchandise Inventory</option>
                    <option>Raw Materials</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="opening_stock" className="block text-sm font-medium text-gray-700">
                    Opening Stock
                  </label>
                  <input
                    type="number"
                    id="opening_stock"
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label htmlFor="reorder_point" className="block text-sm font-medium text-gray-700">
                    Reorder Point
                  </label>
                  <input
                    type="number"
                    id="reorder_point"
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="10"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    You'll be notified when stock reaches this level.
                  </p>
                </div>
                
                <div>
                  <label htmlFor="preferred_vendor" className="block text-sm font-medium text-gray-700">
                    Preferred Vendor
                  </label>
                  <select
                    id="preferred_vendor"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                  >
                    <option>Select a vendor</option>
                    <option>Acme Suppliers</option>
                    <option>Global Distribution Inc</option>
                    <option>SupplyWorks LLC</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'additional' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="product_id" className="block text-sm font-medium text-gray-700">
                    Product ID / Barcode
                  </label>
                  <input
                    type="text"
                    id="product_id"
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter product ID or barcode"
                  />
                </div>
                
                <div>
                  <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">
                    Dimensions (L × W × H)
                  </label>
                  <div className="mt-1 grid grid-cols-3 gap-3">
                    <input
                      type="text"
                      id="length"
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Length"
                    />
                    <input
                      type="text"
                      id="width"
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Width"
                    />
                    <input
                      type="text"
                      id="height"
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Height"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                    Weight
                  </label>
                  <div className="mt-1 grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      id="weight"
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Weight"
                    />
                    <select
                      id="weight_unit"
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                    >
                      <option>kg</option>
                      <option>lb</option>
                      <option>g</option>
                      <option>oz</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="attributes" className="block text-sm font-medium text-gray-700">
                    Custom Attributes
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      id="attribute_key"
                      className="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                      placeholder="Key"
                    />
                    <input
                      type="text"
                      id="attribute_value"
                      className="focus:ring-teal-500 focus:border-teal-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="Value"
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Add Attribute
                  </button>
                </div>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="active"
                      name="active"
                      type="checkbox"
                      checked
                      className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="active" className="font-medium text-gray-700">
                      Item is Active
                    </label>
                    <p className="text-gray-500">
                      Inactive items won't appear in sales documents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddItem;