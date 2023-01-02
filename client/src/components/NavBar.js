import './NavBar.css';

export default function Navbar(){

    return (
        <nav className='nav'>
            <a href='/' className='site-title'>
                <img src='../../images/logos/logo-stacked.png' alt='collective candle co logo' id='header-logo'/>
            </a>

            <div className='menu-container'>
                <ul className='site-links'>
                    <CustomLink href='/'>Home</CustomLink>
                    <CustomLink href='/shop'>Shop</CustomLink>
                    <CustomLink href='/contact'>Contact Us</CustomLink>
                    {/* <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/shop'>Shop</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact Us</a>
                    </li> */}
                </ul>
                
                <img src='../../images/logos/cart-logo.png' alt='shopping cart logo' id='cart-logo'/>
            </div>
        </nav>
    )
}

const CustomLink = ( {href, children, ...props} ) => {

    const path = window.location.pathname;

    return(
        <li>
            <a href={href} {...props} className={path === href ? "active" : ''}>{children}</a>
        </li>
    )
}