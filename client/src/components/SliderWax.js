import SimpleImageSlider from 'react-simple-image-slider';
    // documentation: https://www.npmjs.com/package/react-simple-image-slider

const images = [
    { url: '../../images/product-images/waxmelt-caramellatte.jpeg' },
    { url: '../../images/product-images/waxmelt-cashmere.jpeg' },
    { url: '../../images/product-images/waxmelt-vanillabean.jpeg' },
    { url: '../../images/product-images/waxmelt-vanillabourbon.jpeg' }
  ];

export default function SliderWax(){
        return(
        <div className='Slider'>
            <SimpleImageSlider
                width={400}
                height={400}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                navMargin={20}
                slideDuration={1.5}
            />
        </div>
    )
}

