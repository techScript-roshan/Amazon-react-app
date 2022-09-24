import './Checkout.css';
import React from 'react'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    // i have try to hide checkout__main when basket.lenth == 0 // but i am unable to do this.

    // if (basket?.length == 0){
    //     checkout__main.style.display = "none";
    // }


    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {/* <div className="checkout__main">
                        <div className="checkout__image">
                        </div>
                        <div className="checkout__emptyCart">
                            Your cart is empty
                        </div>
                    </div> */}

                    <div className="checkout__basketItem">

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
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout