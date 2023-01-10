import { useState, useEffect } from 'react';
import './Filter.css';

export default function Filter({setActive, active, setFiltered, filtered, setInventory, inventory}){

    useEffect(() => {
        if(active === '*'){
            setFiltered(inventory);
            return; 
        }
        // if the productCategory includes the active category set by the buttons below, add it to the filtered array which we map thru in the Shop component
        const filtered = inventory.filter((product) => product.productCategory.includes(active))

        setFiltered(filtered);

    }, [active]);

    return (
        <div className='Filter'>

            {/* category filter buttons */}
            <div className='sort-by type'>
                <span>Sort by type:</span>

                <div className='button-container'>
                    <input type="button" value='All' 
                        className={active === '*' ? 'active' : ""} 
                        onClick={()=> setActive('*') } />
                    <input type="button" value='Candles' 
                        className={active === 'candle' ? 'active' : ""} 
                        onClick={()=> setActive('candle')} />
                    <input type="button" value='Tealights' 
                        className={active === 'tealights' ? 'active' : ""} 
                        onClick={()=> setActive('tealights')} />
                    <input type="button" value='Wax Melts' 
                        className={active === 'wax melt' ? 'active' : ""} 
                        onClick={()=> setActive('wax melt')} />
                    <input type="button" value='Seasonal Items' 
                        className={active === 'seasonal' ? 'active' : ""} 
                        onClick={()=> setActive('seasonal')} />
                    <input type="button" value='Accessories' 
                        className={active === 'accessory' ? 'active' : ""} 
                        onClick={()=> setActive('accessory')} />
                </div>      
            </div>

            {/* price filter buttons*/}
            <div className='sort-by price'>
                <span>Sort by price:</span>

                <div className='button-container'>
                    <input type="button" value='Highest to Lowest' />
                    <input type="button" value='Lowest to Highest' />
                    <input type="button" value='Reset' />
                </div>
            </div>
        </div>
    )
}



    // useEffect = () => {
    //     onChange();
    // }

    // const onChange = (e) => {
    //     const value = e.target.value
    //     let sortedInventory;
    //     switch(value) {
    //         case "Highest to Lowest":
    //             sortedInventory = inventory.slice().sort((a, b) => b.productPrice - a.productPrice);
    //             setInventory(sortedInventory);
    //             console.log(sortedInventory); // works
    //             break; // works
    //         case "Lowest to Highest":
    //             sortedInventory = inventory.slice().sort((a, b) => a.productPrice - b.productPrice);
    //             setInventory(sortedInventory);
    //             console.log(sortedInventory); // works
    //             break;
    //         default: console.log('no change');
    //     }
    // }
    
    // const checkPrices = () => {

    // }

    // const sortPriceAsc = () => {
    //     const sortedPrices = inventory
    //         .slice()
    //         .sort((a, b) => a.productPrice - b.productPrice)
      
    //     console.log(sortedPrices);
    //     console.log('Asc Success^'); // works
    // };

    // const sortPriceDesc = () => {
    //     const sortedPrices = inventory
    //         .slice()
    //         .sort((a, b) => b.productPrice - a.productPrice)
      
    //     console.log(sortedPrices);
    //     console.log('Desc Success^'); // works
    // };