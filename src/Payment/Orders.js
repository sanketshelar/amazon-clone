import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../Store/StateProvider';
import './Orders.css';
import Order from './Order';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ user, basket }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders__container'>
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
