import './Subtotal.css'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    const[{ basket }, dispatch] = useStateValue();
    
    const navigate = useNavigate();

    const proceedToCheckout = () => {
        if(basket?.length > 0){
            navigate('/payment')
        }else{
            alert('Add item to Your basket for proceed..')
        }
    }
    
    
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal ({basket?.length} items) : <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale= {2}
                value = {getBasketTotal(basket)} // Part of homework
                displayType = {'text'}
                thousandSeparator = {true}
                prefix = {'₹'}
            />

            <button onClick={proceedToCheckout} >Proceed to Checkout </button>

        </div>
    )
}


export default Subtotal