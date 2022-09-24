import './Home.css'
import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <div className="home__container">
            {/* Home header background images  */}
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        </div>

                    {/* First row item */}
        <div className="home__row">
            <Product id="8762456" title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' price='1267.00' image= 'https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg' rating={5}/>
            
            <Product id="3566912" title='How to Win Friends and Influence People Paperback – 12 October 2020' price='932.00' image='https://images-na.ssl-images-amazon.com/images/I/51TYGq2X7rL._SX322_BO1,204,203,200_.jpg' rating={5}/>
        </div>
        
                    {/* Second row item */}
        <div className="home__row">
            <Product id="8982341" title='Oner Boys Ethnic wear Kurta Pyjama Dress Set (Arrow-202)'price='499.58' image='https://m.media-amazon.com/images/I/71q42SJhQgL._UY606_.jpg' rating={4}/>

            <Product id="454673" title='Hopscotch Girls Polyester Sleeveless Sequin Applique Gowns in Blue Color' price='1057.00' image='https://m.media-amazon.com/images/I/61f9vRXulRL._UX679_.jpg' rating={5}/>

            <Product id="4598264" title="HSmily Creation Women's Taffeta Silk Embroidered Long Anarkali Gown for Women(Mix Gown)" price='549.45' image= 'https://m.media-amazon.com/images/I/41DZmkXvAEL.jpg' rating={4}/>
        </div>

                    {/* Third row item */}
        <div className="home__row">
            <Product
             id="455555" title='LG 164 cm (65 inches) 4K Ultra HD Smart OLED TV 65C1PTZ (Dark Steel Silver) (2021 Model) (OLED65C1PTZ)' price='226299.00' image='https://m.media-amazon.com/images/I/71tU03UNI1L._SX679_.jpg' rating={5}/>
             
        </div>

    </div>
  )
}

export default Home;