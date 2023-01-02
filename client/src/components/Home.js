import './Home.css';
import SliderSeasonal from './SliderSeasonal.js';
import SliderWax from './SliderWax.js';

export default function Home(){

    return (
        <div className='Home'>

            <div className='top'>
                <div className='top-left'>
                    <h1>Welcome to Collective Candle Co.</h1>
                    <p>We are a local candle company dedicated to creating environmentally responsible candles for everyone to enjoy. Check back periodically for new products and collections, especially around the holiday. Happy shopping!</p>             
                </div>
                <div className='top-right'>
                    <SliderWax />
                </div>
            </div>

            <div className='middle'>
                    <img src='../../images/environmental-photos/bed-candles.jpeg' alt='candles on a bed'/>
                </div>

            <div className='bottom'>
                <div className='bottom-left'>
                    <SliderSeasonal />
                </div>

                <div className='bottom-right'>
                    <h2>Holiday Collection</h2> 
                    <p>There is limited inventory, so stock up while you can!</p>
                    <button>Shop Now</button>  
                </div> 
            </div>

        </div>
    )
}