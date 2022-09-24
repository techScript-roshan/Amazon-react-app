import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./components/footer/Footer";
import Payment from "./components/payment/Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Banner from "./components/banner/Banner";


const promise = loadStripe('pk_test_51L6uDvSHSkfsjMAI53gfcFmP31y1gKKVrpqBXTIGJMch7wPgdGUEAnMjAoFF0MTlRmwdKbva3boyPszCLd8NGTyL00PsPtVJZU');


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app components loads..

    auth.onAuthStateChanged(authUser => {
      // console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in 

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">

        <Routes>

          <Route path="/login" element={
            <> <Login /> </>}>
          </Route>

          <Route path="/" element={
            // If you want to add more components you can add here
            <> <Header /> <Home /> <Footer /> </>}>
          </Route>

          <Route path="/checkout" element={
            <> <Header /> <Checkout /> <Footer /> </>}>
          </Route>

          <Route path="/payment" element={
            <> <Header />
              <Elements
                stripe={promise}>
                <Payment />
              </Elements> </>}>
          </Route>

        </Routes>

      </div>
    </Router>

  );
}

export default App;
