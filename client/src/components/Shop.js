import React, { useState, useEffect } from 'react';
import './Shop.css'
import Product from './Product';
import Filter from './Filter'; 

export default function Shop () {
    // category filter
    const [inventory, setInventory] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [active, setActive] = useState('*')

    useEffect(() => {
        fetchInventory();
    }, []);
    
    function fetchInventory(){ // fetching from MySQL db
        fetch('/db')
            .then((response) => response.json())
            .then((data) => {
                setInventory(data);
                setFiltered(data);
                // this.setState({
                //     // setting the state as the return data from the db
                //     inventory: data,
                //     filtered: data,
                //     active: data,
                // });
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
                
                <Filter inventory={inventory} setFiltered={setFiltered} active={active} setActive={setActive} />

                 {/* map thru the filtered inventory and plug into Product component for display */}
                <div className='inventory-container'> 
                {/* {this.state.inventory.map(product => ( */}
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

                    {/* <Product  
                        id={this.state.inventory[0].productID}
                        img={this.state.inventory[0].imgSrc} 
                        title={this.state.inventory[0].productName} 
                        price={this.state.inventory[0].productPrice} 
                    description={this.state.inventory[0].productDescription} /> */}
                    
                </div>
            </div> 
        );  
}