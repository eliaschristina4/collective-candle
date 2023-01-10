export default function CustomLink ( {href, children, ...props} ) {

    const path = window.location.pathname;

    return(
        // changes class to active when href === current path -- > mostly for styling purposes for navbar
        <li> 
            <a href={href} {...props} className={path === href ? "active" : ''}>{children}</a>
        </li>
    )
}