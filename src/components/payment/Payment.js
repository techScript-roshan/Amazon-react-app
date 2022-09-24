import './Payment.css'
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../../CheckoutProduct';
import { Link, Navigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../../reducer';
import { async } from '@firebase/util';
import axios from 'axios';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    // const navigate = Navigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setprocessing] = useState("")

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe which allow us to charge a customer
        const getClientSecret = async () => {
           const response = await axios({
               method: 'post',
               // Stripe expects the total in a currencies subunits
               url: `/payments/create?total=${getBasketTotal(basket) * 100}`
           });
           setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)

    const handleSubmit = async (e) => {
        // to all the fancy stripe stuff
        e.preventDefault();
        setprocessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card : elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setprocessing(false);

            Navigate.replace('/orders');
        })


    }
    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types of their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout({<Link to='/checkout'>{basket?.length} items</Link>})
                </h1>

                {/* payment section - delivery address  */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Patel Nagar, Hatiya Gaachi</p>
                        <p>Saharsa, India - 852201</p>
                    </div>
                </div>

                {/* payment section - Reviews Items  */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>

                {/* payment section - Payment method  */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Strive magic wil go  */}

                        <form onClick={handleSubmit} onChange={handleChange}>
                            <CardElement />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>
                                            {/* Part of the homework */}
                                            Order Total : <strong>{value}</strong>
                                        </h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Part of homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                />
                                <button disabled = {processing || disabled || succeeded }>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors  */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment