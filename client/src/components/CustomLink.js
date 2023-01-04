export default function CustomLink ( {href, children, ...props} ) {

    const path = window.location.pathname;

    return(
        <li>
            <a href={href} {...props} className={path === href ? "active" : ''}>{children}</a>
        </li>
    )
}