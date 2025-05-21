import React from 'react';
import { FileText, ShoppingCart, Package } from 'lucide-react';

interface RecentActivityCardProps {
  type: 'invoice' | 'sales-order' | 'item';
  title: string;
  description: string;
  amount: string;
  time: string;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  type,
  title,
  description,
  amount,
  time
}) => {
  const getIcon = () => {
    switch (type) {
      case 'invoice':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'sales-order':
        return <ShoppingCart className="h-5 w-5 text-green-500" />;
      case 'item':
        return <Package className="h-5 w-5 text-amber-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="p-2 bg-gray-100 rounded-full">
            {getIcon()}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {title}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {description}
          </p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-sm font-medium text-gray-900">
              {amount}
            </p>
            <p className="text-xs text-gray-500">
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityCard;