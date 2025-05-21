import React from 'react';
import { DollarSign, ShoppingCart, FileText, ArrowUpRight, ArrowDownRight, Package } from 'lucide-react';
import StatCard from '../components/StatCard';
import RecentActivityCard from '../components/RecentActivityCard';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex space-x-3">
          <select className="bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>This month</option>
            <option>This year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Sales" 
          value="$24,780.00" 
          change="+12.5%" 
          isPositive={true}
          icon={<DollarSign className="h-6 w-6" />}
          color="bg-blue-50 text-blue-700"
        />
        <StatCard 
          title="Sales Orders" 
          value="83" 
          change="+5.8%" 
          isPositive={true}
          icon={<ShoppingCart className="h-6 w-6" />}
          color="bg-green-50 text-green-700"
        />
        <StatCard 
          title="Invoices" 
          value="67" 
          change="-2.3%" 
          isPositive={false}
          icon={<FileText className="h-6 w-6" />}
          color="bg-amber-50 text-amber-700"
        />
        <StatCard 
          title="Items" 
          value="142" 
          change="+8.1%" 
          isPositive={true}
          icon={<Package className="h-6 w-6" />}
          color="bg-purple-50 text-purple-700"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Sales Overview</h3>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-center justify-center text-gray-500">
              <p>Sales chart will be displayed here</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            <button className="text-sm text-teal-600 hover:text-teal-800">View all</button>
          </div>
          <div className="divide-y divide-gray-200">
            <RecentActivityCard 
              type="invoice"
              title="Invoice #INV-001"
              description="Created for Client ABC"
              amount="$1,250.00"
              time="2 hours ago"
            />
            <RecentActivityCard 
              type="sales-order"
              title="Sales Order #SO-023"
              description="Created for Client XYZ"
              amount="$890.00"
              time="5 hours ago"
            />
            <RecentActivityCard 
              type="item"
              title="New Item Added"
              description="Product X - 25 units"
              amount="$45.00/unit"
              time="Yesterday"
            />
            <RecentActivityCard 
              type="invoice"
              title="Invoice #INV-002"
              description="Created for Client DEF"
              amount="$2,780.00"
              time="2 days ago"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Recent Invoices</h3>
            <button className="text-sm text-teal-600 hover:text-teal-800">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice #</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">INV-001</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Client ABC</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,250.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">INV-002</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Client DEF</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$2,780.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">INV-003</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Client GHI</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$950.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Overdue</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Recent Sales Orders</h3>
            <button className="text-sm text-teal-600 hover:text-teal-800">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order #</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SO-023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Client XYZ</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$890.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Confirmed</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SO-022</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Client MNO</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,450.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SO-021</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Client PQR</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$2,320.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">Processing</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;