import React, { Component } from 'react';
import './Shop.css'
import Product from './Product';
import Filter from './Filter';

export default class Shop extends Component {  

    constructor(props){
        super();
        this.state = {
            inventory: null // this is what our data will eventually be loaded into
        }
    }
    componentDidMount(){ // read up on how this works
        this.loadInventory()
    }
    loadInventory(){ // fetching from MySQL db
        fetch('/db')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    inventory: data // setting the state as the return data from the db
                });
                console.log(data);
            })
            .catch(err => console.log(err));

        
    }

    render(){
        if (!this.state.inventory){
            return <h1>Our inventory is loading...</h1>    
        }
        return (  
            <div className='Shop'>
                <h1>Shop Our Products</h1>
                
                <Filter />

                {/* <div>
                    {this.state.isLoading && 
                    <p>Loading... Please wait!</p>
                    }
                    {!this.state.isLoading &&
                    <p>My data has arrived!</p>
                    }
                </div> */}

                <div className='inventory-container'> 

                    <Product  
                        id={this.state.inventory[0].productID}
                        img={this.state.inventory[0].imgSrc} 
                        title={this.state.inventory[0].productName} 
                        price={this.state.inventory[0].productPrice} 
                        description={this.state.inventory[0].productDescription} />
                    <Product 
                        id={this.state.inventory[1].productID}
                        category={this.state.inventory[1].productCategory}
                        img={this.state.inventory[1].imgSrc} 
                        title={this.state.inventory[1].productName} 
                        price={this.state.inventory[1].productPrice} 
                        description={this.state.inventory[1].productDescription} />
                    <Product 
                        id={this.state.inventory[2].productID}
                        category={this.state.inventory[2].productCategory}
                        img={this.state.inventory[2].imgSrc} 
                        title={this.state.inventory[2].productName} 
                        price={this.state.inventory[2].productPrice} 
                        description={this.state.inventory[2].productDescription} />
                    <Product 
                        id={this.state.inventory[3].productID}
                        category={this.state.inventory[3].productCategory}
                        img={this.state.inventory[3].imgSrc} 
                        title={this.state.inventory[3].productName} 
                        price={this.state.inventory[3].productPrice} 
                        description={this.state.inventory[3].productDescription} />
                    <Product 
                        id={this.state.inventory[4].productID}
                        category={this.state.inventory[4].productCategory}
                        img={this.state.inventory[4].imgSrc} 
                        title={this.state.inventory[4].productName} 
                        price={this.state.inventory[4].productPrice} 
                        description={this.state.inventory[4].productDescription} />
                    <Product 
                        id={this.state.inventory[5].productID}
                        category={this.state.inventory[5].productCategory}
                        img={this.state.inventory[5].imgSrc} 
                        title={this.state.inventory[5].productName} 
                        price={this.state.inventory[5].productPrice} 
                        description={this.state.inventory[5].productDescription} />
                    <Product 
                        id={this.state.inventory[6].productID}
                        category={this.state.inventory[6].productCategory}
                        img={this.state.inventory[6].imgSrc} 
                        title={this.state.inventory[6].productName} 
                        price={this.state.inventory[6].productPrice} 
                        description={this.state.inventory[6].productDescription} />
                    <Product 
                        id={this.state.inventory[7].productID}
                        category={this.state.inventory[7].productCategory}
                        img={this.state.inventory[7].imgSrc} 
                        title={this.state.inventory[7].productName} 
                        price={this.state.inventory[7].productPrice} 
                        description={this.state.inventory[7].productDescription} />
                    <Product 
                        id={this.state.inventory[8].productID}
                        category={this.state.inventory[8].productCategory}
                        img={this.state.inventory[8].imgSrc} 
                        title={this.state.inventory[8].productName} 
                        price={this.state.inventory[8].productPrice} 
                        description={this.state.inventory[8].productDescription} />
                    <Product 
                        id={this.state.inventory[9].productID}
                        category={this.state.inventory[9].productCategory}
                        img={this.state.inventory[9].imgSrc} 
                        title={this.state.inventory[9].productName} 
                        price={this.state.inventory[9].productPrice} 
                        description={this.state.inventory[9].productDescription} />
                    <Product 
                        id={this.state.inventory[10].productID}
                        category={this.state.inventory[10].productCategory}
                        img={this.state.inventory[10].imgSrc} 
                        title={this.state.inventory[10].productName} 
                        price={this.state.inventory[10].productPrice} 
                        description={this.state.inventory[10].productDescription} />
                    <Product 
                        id={this.state.inventory[11].productID}
                        category={this.state.inventory[11].productCategory}
                        img={this.state.inventory[11].imgSrc} 
                        title={this.state.inventory[11].productName} 
                        price={this.state.inventory[11].productPrice} 
                        description={this.state.inventory[11].productDescription} />
                    <Product 
                        id={this.state.inventory[12].productID}
                        category={this.state.inventory[12].productCategory}
                        img={this.state.inventory[12].imgSrc} 
                        title={this.state.inventory[12].productName} 
                        price={this.state.inventory[12].productPrice} 
                        description={this.state.inventory[12].productDescription} />
                    <Product 
                        id={this.state.inventory[13].productID}
                        category={this.state.inventory[13].productCategory}
                        img={this.state.inventory[13].imgSrc} 
                        title={this.state.inventory[13].productName} 
                        price={this.state.inventory[13].productPrice} 
                        description={this.state.inventory[13].productDescription} />
                    <Product 
                        id={this.state.inventory[14].productID}
                        category={this.state.inventory[14].productCategory}
                        img={this.state.inventory[14].imgSrc} 
                        title={this.state.inventory[14].productName} 
                        price={this.state.inventory[14].productPrice} 
                        description={this.state.inventory[14].productDescription} />
                    <Product 
                        id={this.state.inventory[15].productID}
                        category={this.state.inventory[15].productCategory}
                        img={this.state.inventory[15].imgSrc} 
                        title={this.state.inventory[15].productName} 
                        price={this.state.inventory[15].productPrice} 
                        description={this.state.inventory[15].productDescription} />
                    <Product 
                        id={this.state.inventory[16].productID}
                        category={this.state.inventory[16].productCategory}
                        img={this.state.inventory[16].imgSrc} 
                        title={this.state.inventory[16].productName} 
                        price={this.state.inventory[16].productPrice} 
                        description={this.state.inventory[16].productDescription} />
                    <Product 
                        id={this.state.inventory[17].productID}
                        category={this.state.inventory[17].productCategory}
                        img={this.state.inventory[17].imgSrc} 
                        title={this.state.inventory[17].productName} 
                        price={this.state.inventory[17].productPrice} 
                        description={this.state.inventory[17].productDescription} />
                    <Product 
                        id={this.state.inventory[18].productID}
                        category={this.state.inventory[18].productCategory}
                        img={this.state.inventory[18].imgSrc} 
                        title={this.state.inventory[18].productName} 
                        price={this.state.inventory[18].productPrice} 
                        description={this.state.inventory[18].productDescription} />
                    <Product 
                        id={this.state.inventory[19].productID}
                        category={this.state.inventory[19].productCategory}
                        img={this.state.inventory[19].imgSrc} 
                        title={this.state.inventory[19].productName} 
                        price={this.state.inventory[19].productPrice} 
                        description={this.state.inventory[19].productDescription} />
                    <Product 
                        id={this.state.inventory[20].productID}
                        category={this.state.inventory[20].productCategory}
                        img={this.state.inventory[20].imgSrc} 
                        title={this.state.inventory[20].productName} 
                        price={this.state.inventory[20].productPrice} 
                        description={this.state.inventory[20].productDescription} />
                    
                </div>
            </div> 
        );  
    }
}

//     let products;

// const fetchProducts = () => {
//         fetch('/db')
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//             })
//             .catch(err => console.log(err));
// }

// fetchProducts();

    // const [products, setProducts] = useState();

    // useEffect(() => setProducts(
    //     fetch('/db')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch(err => console.log(err))
    // ), []);

    // useEffect(() => {
    //     fetch('/db')
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    //         .catch(err => console.log(err));
    // }, [])




    //////


    // const [ inventory, setInventory ] = useState(null);

    // useEffect( () => {
    //     async function fetchInventory() {
    //         const response = await fetch('/db');

    //         const rows = await response.json();

    //         setInventory(rows);

    //         if (!rows) {
    //             console.log('not yet')
    //         } else {
    //             console.log( 'Our inventory is:' + rows);
    //         }
    //             // .then((response) => response.json())
    //             // .then((data) => {
    //             //     setProducts(data);
    //             // })
    //             // .catch(err => console.log(err))
    //     }

    //     fetchInventory();


    // }, [])