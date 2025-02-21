import React from 'react';
import './OrdersHistory.css';

function OrdersHistory() {
  const orders = [
    {
      orderId: 1001,
      customerName: 'John Doe',
      productName: 'Wireless Mouse',
      quantity: 2,
      price: 25.0,
      orderDate: '2025-02-15',
      status: 'Shipped',
      paymentMethod: 'Credit Card',
      deliveryDate: '2025-02-18',
    },
    {
      orderId: 1002,
      customerName: 'Sarah Smith',
      productName: 'Laptop Stand',
      quantity: 1,
      price: 45.0,
      orderDate: '2025-02-16',
      status: 'Delivered',
      paymentMethod: 'PayPal',
      deliveryDate: '2025-02-19',
    },
  ];
  return (
    <div className="orders-history-container">
      <h2 className="orders-history-title">Order History</h2>
      <table className="orders-history-table">
        <thead>
          <tr className="orders-history-header">
            <th className="orders-history-header-cell">Order ID</th>
            <th className="orders-history-header-cell">Customer</th>
            <th className="orders-history-header-cell">Product</th>
            <th className="orders-history-header-cell">Quantity</th>
            <th className="orders-history-header-cell">Price</th>
            <th className="orders-history-header-cell">Order Date</th>
            <th className="orders-history-header-cell">Status</th>
            <th className="orders-history-header-cell">Payment</th>
            <th className="orders-history-header-cell">Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId} className="orders-history-row">
              <td className="orders-history-cell">{order.orderId}</td>
              <td className="orders-history-cell">{order.customerName}</td>
              <td className="orders-history-cell">{order.productName}</td>
              <td className="orders-history-cell">{order.quantity}</td>
              <td className="orders-history-cell">${order.price.toFixed(2)}</td>
              <td className="orders-history-cell">{order.orderDate}</td>
              <td className="orders-history-cell">{order.status}</td>
              <td className="orders-history-cell">{order.paymentMethod}</td>
              <td className="orders-history-cell">
                {order.deliveryDate || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersHistory;
