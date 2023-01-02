import './Filter.css';

export default function Filter(){

    return (
        <div className='Filter'>
            <div className='sort-by type'>
                <span>Sort by type:</span>
                <input type="button" value='Candles' />
                <input type="button" value='Tealights' />
                <input type="button" value='Wax Melts' />
                <input type="button" value='Seasonal Items' />
                <input type="button" value='Accessories' />
            </div>
            <div className='sort-by price'>
                <span>Sort by price:</span>
                <input type="button" value='< $10' />
                <input type="button" value='$10-20' />
                <input type="button" value='$20+' />
            </div>
        </div>
    )
}