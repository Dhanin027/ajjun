import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Save, X, Plus, Trash, CheckCircle, AlertCircle } from 'lucide-react';

const CreateSalesOrder: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, name: '', description: '', quantity: 1, price: 0, tax: 0, amount: 0 }
  ]);

  const addItem = () => {
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    setItems([...items, { id: newId, name: '', description: '', quantity: 1, price: 0, tax: 0, amount: 0 }]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Create Sales Order</h1>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Link 
            to="/sales" 
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-150"
          >
            <X className="h-4 w-4 mr-1.5" />
            Cancel
          </Link>
          <button 
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-150"
          >
            <Save className="h-4 w-4 mr-1.5" />
            Save Sales Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Sales Order Details</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
                    Customer <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="customer"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                  >
                    <option>Select a customer</option>
                    <option>ABC Corporation</option>
                    <option>XYZ Enterprises</option>
                    <option>Global Solutions Inc.</option>
                    <option>Tech Innovations LLC</option>
                    <option>Summit Partners</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="sales_order_number" className="block text-sm font-medium text-gray-700">
                    Sales Order # <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="sales_order_number"
                    defaultValue="SO-024"
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="order_date" className="block text-sm font-medium text-gray-700">
                    Order Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="order_date"
                    defaultValue="2025-04-02"
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="expected_delivery_date" className="block text-sm font-medium text-gray-700">
                    Expected Delivery Date
                  </label>
                  <input
                    type="date"
                    id="expected_delivery_date"
                    defaultValue="2025-04-15"
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="reference" className="block text-sm font-medium text-gray-700">
                    Reference # (Optional)
                  </label>
                  <input
                    type="text"
                    id="reference"
                    placeholder="PO or reference number"
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="sales_person" className="block text-sm font-medium text-gray-700">
                    Sales Person
                  </label>
                  <input
                    type="text"
                    id="sales_person"
                    placeholder="Enter sales person name"
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="shipping_address" className="block text-sm font-medium text-gray-700">
                  Shipping Address
                </label>
                <textarea
                  id="shipping_address"
                  rows={3}
                  className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter shipping address"
                ></textarea>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
                <h4 className="text-base font-medium text-gray-900 mb-4">Items</h4>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Item
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Qty
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tax
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th scope="col" className="relative px-3 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <input
                              type="text"
                              placeholder="Select or enter an item"
                              className="focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <input
                              type="text"
                              placeholder="Description"
                              className="focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <input
                              type="number"
                              min="1"
                              defaultValue="1"
                              className="focus:ring-teal-500 focus:border-teal-500 block w-20 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="relative rounded-md shadow-sm">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">$</span>
                              </div>
                              <input
                                type="text"
                                className="focus:ring-teal-500 focus:border-teal-500 block w-24 pl-7 sm:text-sm border-gray-300 rounded-md"
                                placeholder="0.00"
                              />
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <select className="focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                              <option>None (0%)</option>
                              <option>VAT (20%)</option>
                              <option>Sales Tax (7%)</option>
                            </select>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                            $0.00
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={addItem}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-150"
                  >
                    <Plus className="h-4 w-4 mr-1.5" />
                    Add Line
                  </button>
                </div>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
                <div className="flex justify-end">
                  <div className="w-full md:w-72">
                    <div className="flex justify-between py-2 text-sm">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium text-gray-900">$0.00</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm">
                      <span className="text-gray-600">Tax:</span>
                      <span className="font-medium text-gray-900">$0.00</span>
                    </div>
                    <div className="flex justify-between pt-4 pb-2 text-base">
                      <span className="font-medium text-gray-900">Total:</span>
                      <span className="font-bold text-gray-900">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter notes about this sales order"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow sticky top-6">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Sales Order Actions</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-col space-y-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 w-full transition-colors duration-150"
                >
                  <Save className="h-4 w-4 mr-1.5" />
                  Save Sales Order
                </button>
                
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 w-full transition-colors duration-150"
                >
                  <CheckCircle className="h-4 w-4 mr-1.5" />
                  Save and Send
                </button>
                
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 w-full transition-colors duration-150"
                >
                  <AlertCircle className="h-4 w-4 mr-1.5" />
                  Save as Draft
                </button>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Order Status</h4>
                <select
                  id="status"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                >
                  <option>Draft</option>
                  <option>Confirmed</option>
                  <option>Processing</option>
                  <option>Delivered</option>
                </select>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="convert_to_invoice"
                      name="convert_to_invoice"
                      type="checkbox"
                      className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="convert_to_invoice" className="font-medium text-gray-700">
                      Convert to invoice after saving
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="attach_files"
                      name="attach_files"
                      type="checkbox"
                      className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="attach_files" className="font-medium text-gray-700">
                      Attach files to sales order
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="pt-5 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Shipping Method</h4>
                <select
                  id="shipping_method"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
                >
                  <option>Standard Shipping</option>
                  <option>Express Delivery</option>
                  <option>Pickup</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSalesOrder;