import './Footer.css';
import CustomLink from './CustomLink';

export default function Footer(){
    return(
    <nav className='Footer'>
        
        {/* footer nav links -- could've used regular anchor tags*/}
        <div className='footer-layer-1'>
            <ul className='site-links'>
                <CustomLink href='/'>Home</CustomLink>
                <CustomLink href='/shop'>Shop</CustomLink>
                <CustomLink href='/contact'>Contact Us</CustomLink>
                {/* <li> <a href='/'>Home</a> </li>
                <li> <a href='/shop'>Shop</a> </li>
                <li> <a href='/contact'>Contact Us</a> </li> */}
            </ul>

            {/* social media links & imgs */}
            <ul className='socials'>
                <li>
                    <a href='https://www.facebook.com/'>
                        <img src='../../images/social-logos/facebook.png' alt='facebook icon' className='social-icon' />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/'>
                        <img src='../../images/social-logos/instagram.png' alt='facebook icon' className='social-icon' />
                    </a>
                </li>
                <li>
                    <a href='https://www.twitter.com/'>
                        <img src='../../images/social-logos/twitter.png' alt='twitter icon' className='social-icon' />
                    </a>
                </li>
            </ul>
        </div>
        
        {/* footer logo */}
        <div className='footer-layer-2'>
                <a href='/' className='site-title'>
                    <img src='../../images/logos/logo-playfair-display.png' alt='collective candle co logo' id='footer-logo' />
                </a>
                <span id="copyright">&copy; 2023 All Rights Reserved</span>
        </div>
    </nav>
    )
}