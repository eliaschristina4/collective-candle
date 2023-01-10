import './NavBar.css';
import CustomLink from './CustomLink';

export default function Navbar(){

    return (
        <nav className='nav'>
            {/* logo */}
            <a href='/' className='site-title'>
                <img src='../../images/logos/logo-stacked.png' alt='collective candle co logo' id='header-logo'/>
            </a>

            {/* nav links */}
            <div className='menu-container'>
                <ul className='site-links'>
                    <CustomLink href='/'>Home</CustomLink>
                    <CustomLink href='/shop'>Shop</CustomLink>
                    <CustomLink href='/contact'>Contact Us</CustomLink>
                </ul>
                
                {/* dummy shopping cart logo */}
                <img src='../../images/logos/cart-logo.png' alt='shopping cart logo' id='cart-logo'/>
            </div>
        </nav>
    )
}

// const CustomLink = ( {href, children, ...props} ) => {
//     const path = window.location.pathname;
//     return(
//         <li>
//             <a href={href} {...props} className={path === href ? "active" : ''}>{children}</a>
//         </li>
//     )
// }