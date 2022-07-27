import './Slider.css';
import React, { useState, useEffect } from 'react';

function Slider() {

    const TOTAL_SLIDE_ITEMS = 12;

    let NUMBER_OF_ITEMS_PER_SCREEN = parseInt(getComputedStyle(document.body).getPropertyValue('--no-of-slides-per-screen'));

    const [sliderIndex, setSliderIndex] = useState(0);

    const [progressItems, setProgressItems] = useState([]);

    const [numberOfSlides, setNumberOfSlides] = useState(TOTAL_SLIDE_ITEMS / NUMBER_OF_ITEMS_PER_SCREEN);

    useEffect(() => {

        document.querySelector(':root').style.setProperty('--slide-index', sliderIndex);

    }, [sliderIndex]);

    function slideLeft() {

        if (sliderIndex == 0) {
            setSliderIndex(numberOfSlides - 1)
            return;
        }
        setSliderIndex(sliderIndex - 1)
    }

    function slideRight() {

        if (sliderIndex == numberOfSlides - 1) {
            setSliderIndex(0)
            return;
        }
        setSliderIndex(sliderIndex + 1)
    }
    return (
        <div className='react-slider'>
            <div className='header'>
                <div className='header-items'>
                    <h3>Continue Watching Soju!</h3>
                    <div className='progress-bar-container'>

                        {[...Array(numberOfSlides)].map((elementInArray, index) => (
                            <div className={`progress ${sliderIndex == index ? 'active' : ''}`} key={index}></div>
                        )
                        )}
                    </div>
                </div>
            </div>
            <div className='slider'>
                <div className='handle previous' onClick={slideLeft}>
                    <div className='handle-icon'><img src="handle.png" /></div>
                </div>
                <div className='slides'>
                    <img src="https://via.placeholder.com/210/00FF00?text=1" />
                    <img src="https://via.placeholder.com/220/00FF00?text=2" />
                    <img src="https://via.placeholder.com/230/00FF00?text=3" />
                    <img src="https://via.placeholder.com/240/00FF00?text=4" />
                    <img src="https://via.placeholder.com/250/00FF00?text=5" />
                    <img src="https://via.placeholder.com/260/00FF00?text=6" />
                    <img src="https://via.placeholder.com/270/00FF00?text=7" />
                    <img src="https://via.placeholder.com/280/00FF00?text=8" />
                    <img src="https://via.placeholder.com/250/00FF00?text=9" />
                    <img src="https://via.placeholder.com/260/00FF00?text=10" />
                    <img src="https://via.placeholder.com/270/00FF00?text=11" />
                    <img src="https://via.placeholder.com/280/00FF00?text=12" />
                </div>
                <div className='handle next' onClick={slideRight}>
                    <div className='handle-icon'><img src="handle.png" /></div>
                </div>
            </div>
        </div>
    );
}

export default Slider;