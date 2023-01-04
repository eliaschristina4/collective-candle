import React, { useState, useEffect } from 'react';
import './Shop.css'
import Product from './Product';
import Filter from './Filter'; 

export default function Shop () {
    // category filter
    const [inventory, setInventory] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [active, setActive] = useState('*');

    useEffect(() => {
        fetchInventory();
    }, []);
    
    function fetchInventory(){ // fetching from MySQL db
        fetch('/db')
            .then((response) => response.json())
            .then((data) => {
                setInventory(data);
                setFiltered(data);
                // setFilteredPrice(data);
                
                console.log(data);
            })
            .catch(err => console.log(err));

        
    }

        if (!inventory){
            return <h1>Our inventory is loading...</h1>    
        }
        return (  
            <div className='Shop'>
                <h1>Shop Our Products</h1>
                
                <Filter 
                    inventory={inventory} 
                    setInventory={setInventory}
                    setFiltered={setFiltered} 
                    active={active} 
                    setActive={setActive} 
                    />

                 {/* map thru the filtered inventory and plug into Product component for display */}
                <div className='inventory-container'> 
                    {filtered.map(product => (
                        <Product
                            key={product.productID}
                            id={product.productID}
                            category={product.productCategory} 
                            img={product.imgSrc} 
                            title={product.productName} 
                            price={product.productPrice} 
                            description={product.productDescription} 
                            />
                        )
                    )}
                    
                </div>
            </div> 
        );  
}

// export default class Shop extends Component {  

//     constructor(props){
//         super();
//         this.state = {
//             inventory: [], // this is what our data will eventually be loaded into
   
//         }
//     }
//     componentDidMount(){ // calls loadInventory when component is mounted
//         this.loadInventory()
//     }
//     loadInventory(){ // fetching from MySQL db
//         fetch('/db')
//             .then((response) => response.json())
//             .then((data) => {
//                 this.setState({
//                     // setting the state as the return data from the db
//                     inventory: data 
//                 });
//                 console.log(data);
//             })
//             .catch(err => console.log(err));   
//     }

//     render(){
//         if (!this.state.inventory){
//             return <h1>Our inventory is loading...</h1>    
//         }
//         return (  
//             <div className='Shop'>
//                 <h1>Shop Our Products</h1>
                
//                 <Filter />

//                  {/* mapping thru the inventory and plugging into product component */}
//                 <div className='inventory-container'> 
//                 {this.state.inventory.map(product => (
//                     <Product  
//                         id={this.state.inventory[0].productID}
//                         img={this.state.inventory[0].imgSrc} 
//                         title={this.state.inventory[0].productName} 
//                         price={this.state.inventory[0].productPrice} 
//                         description={this.state.inventory[0].productDescription} 
//                         /> 
//                 ))}
//                 </div>
//             </div> 
//         );  
//     }
// }