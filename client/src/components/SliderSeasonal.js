import SimpleImageSlider from 'react-simple-image-slider';
    // documentation: https://www.npmjs.com/package/react-simple-image-slider

const images = [
    { url: '../../images/product-images/green-holiday-candle.jpg' },
    { url: '../../images/product-images/red-holiday-candle.jpg' },
    { url: '../../images/product-images/glass-candle-cider-cinnamon.jpeg' },
    { url: '../../images/product-images/glass-candle-vanilla.jpeg' }
  ];

export default function SliderSeasonal(){
        return(
        <div className='Slider'>
            <SimpleImageSlider
                width={400}
                height={400}
                images={images}
                showBullets={true}
                showNavs={true}
                navMargin={20}
                slideDuration={1.5}
            />
        </div>
    )
}

