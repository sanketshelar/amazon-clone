import React, { useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Authentication/Login';
import { auth } from './firebase';
import { useStateValue } from './Store/StateProvider';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Payment/Orders';

const promise = loadStripe(
  'pk_test_51JMClNSGZNLR40pvbrjs5z6ufZK1gc4ohf6QBSFDOqOezE8eXXdcfOocHCNgTAvhJ4QyJj3U7xgf4rU1sC0nVWK900UPaQvEJC'
);

function App() {
  const [{ basket }, dispach] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('authenticated user', authUser);

      if (authUser) {
        //logged in
        dispach({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //logged out
        dispach({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
