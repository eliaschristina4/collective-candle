import { useEffect } from 'react';
import './Filter.css';

export default function Filter({setActive, active, setFiltered, filtered, inventory}){

    useEffect(() => {

        if(active === '*'){
            setFiltered(inventory);
            return;
        }
        const filtered = inventory.filter((product) => product.productCategory.includes(active))

        setFiltered(filtered);
    }, [active])

    return (
        <div className='Filter'>
            <div className='sort-by type'>
                <span>Sort by type:</span>
                <input type="button" value='All' className={active === '*' ? 'active' : ""} onClick={()=> setActive('*') } />
                <input type="button" value='Candles' className={active === 'candle' ? 'active' : ""} onClick={()=> setActive('candle')} />
                <input type="button" value='Tealights' className={active === 'tealights' ? 'active' : ""} onClick={()=> setActive('tealights')} />
                <input type="button" value='Wax Melts' className={active === 'wax melt' ? 'active' : ""} onClick={()=> setActive('wax melt')} />
                <input type="button" value='Seasonal Items' className={active === 'seasonal' ? 'active' : ""} onClick={()=> setActive('seasonal')} />
                <input type="button" value='Accessories' className={active === 'accessory' ? 'active' : ""} onClick={()=> setActive('accessory')} />
            </div>
            <div className='sort-by price'>
                <span>Sort by price:</span>
                <input type="button" value='All' />
                <input type="button" value='< $10' />
                <input type="button" value='$10-20' />
                <input type="button" value='$20+' />
            </div>
        </div>
    )
}