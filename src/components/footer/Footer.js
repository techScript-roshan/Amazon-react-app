import './Footer.css'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__items">
                {/* Footer Section 1 */}
                <div className="footer__firstColumn">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG9.png" alt="" />
                    <p>Amazon Clone known is an Indian online business and cloud computing company. It was founded on May 28, 2022 by Roshan Kumar.</p>
                </div>
                {/* Footer Section 2 */}
                <div className="footer__secondColumn">
                    <h5 className='footer__listTitle'>Let us help you</h5>
                    <ul className="footer__list">
                        <li>Your Orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
                {/* Footer Section 3 */}
                <div className="footer__thirdColumn">
                    <h5 className='footer__listTitle'>Make Money with us</h5>
                    <ul className="footer__list">
                        <li>Sell on Amazon</li>
                        <li>Sell on Amazon Business</li>
                        <li>Sell Your Apps on Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                        <li>Host an Amazon Hub</li>
                    </ul>
                </div>
                {/* Footer Section 4 */}
                <div className="footer__fourthColumn">
                    <h5 className='footer__listTitle'>Get to know us</h5>
                    <ul className='footer__list'>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Amazon Devices</li>
                    </ul>
                </div>
            </div>
            {/* Social Media Icons   */}
            <div className="footer__socialIcon">
                <FacebookOutlinedIcon className='footer__socialIcon_facebook' />
                <InstagramIcon className='footer__socialIcon_instagram' />
                <WhatsAppIcon className='footer__socialIcon_whatsapp' />
                <YouTubeIcon className='footer__socialIcon_youtube' />

            </div>
            {/* Footer Copyright tag */}
            <div className="footer__tag">
                <p>&#169; 2022 Copyright: Amazon Clone By ~ Roshan Kumar</p>
            </div>
        </div>
    )
}

export default Footer