import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ItemsList from './pages/items/ItemsList';
import AddItem from './pages/items/AddItem';
import SalesOrderList from './pages/sales/SalesOrderList';
import CreateSalesOrder from './pages/sales/CreateSalesOrder';
import InvoiceList from './pages/invoices/InvoiceList';
import CreateInvoice from './pages/invoices/CreateInvoice';
import ClientsList from './pages/clients/ClientsList';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="items">
            <Route index element={<ItemsList />} />
            <Route path="new" element={<AddItem />} />
          </Route>
          <Route path="sales">
            <Route index element={<SalesOrderList />} />
            <Route path="new" element={<CreateSalesOrder />} />
          </Route>
          <Route path="invoices">
            <Route index element={<InvoiceList />} />
            <Route path="new" element={<CreateInvoice />} />
          </Route>
          <Route path="clients" element={<ClientsList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;