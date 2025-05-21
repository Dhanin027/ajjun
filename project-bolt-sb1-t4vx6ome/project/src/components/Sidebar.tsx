import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  FileText, 
  Users, 
  BarChart2, 
  Settings, 
  X,
  User
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Items', path: '/items', icon: <Package className="h-5 w-5" /> },
    { name: 'Sales Orders', path: '/sales', icon: <ShoppingCart className="h-5 w-5" /> },
    { name: 'Invoices', path: '/invoices', icon: <FileText className="h-5 w-5" /> },
    { name: 'Clients', path: '/clients', icon: <Users className="h-5 w-5" /> },
    { name: 'Reports', path: '/reports', icon: <BarChart2 className="h-5 w-5" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 transform md:relative md:translate-x-0 transition duration-300 ease-in-out bg-[#0F172A] text-white w-64 md:flex flex-col flex-shrink-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
          <Link to="/" className="flex items-center">
            <FileText className="h-8 w-8 text-teal-500" />
            <span className="ml-2 text-xl font-semibold">Zoho Books</span>
          </Link>
          <button 
            className="md:hidden text-white hover:text-gray-300 focus:outline-none"
            onClick={closeSidebar}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition duration-150 ease-in-out ${
                isActive(link.path)
                  ? 'bg-teal-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;