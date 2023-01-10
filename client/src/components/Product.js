import './Product.css';

export default function Product(props) {

    return (
        // template for each individual product passed from Filter and Shop components 
        <div className={'product ' + props.category} id={'product-' + props.id}>
            <img src={props.img} alt='product'/>
            <p className='product-name'>{props.title}</p>
            <p className='product-price'>{'$' + props.price + '.00'}</p>
            <p className='product-description'>{props.description}</p>
            <button>Add to Cart</button>
        </div>
    )
}
