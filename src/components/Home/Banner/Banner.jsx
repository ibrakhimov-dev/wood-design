import React from 'react'
import bannerOne from "../../Assets/img/banner-images/banner-1.png"
import bannerTwo from "../../Assets/img/banner-images/banner-2.png"
import bannerFour from "../../Assets/img/banner-images/banner-4.png"
import bannerFive from "../../Assets/img/banner-images/banner-5.png"
import bannerSix from "../../Assets/img/banner-images/banner-6.png"
import "./_banner.css";

function Banner() {
  return (
    <section className='banner'>
        <div className="banner-content">
            <div className="carousel-item">
                <div className="item-one">
                    <img src={bannerSix} alt="Sofa" />
                </div>
                <div className="item-two">
                    <img src={bannerTwo} alt="Sofa" />
                </div>
            </div>
            <div className="carousel-item">
                <div className="item-five">
                    <p>Оранживый кресло</p>
                    <p>от 430 000 uzs</p>
                    <img src={bannerOne} alt="Sofa" />
                </div>
            </div>
            <div className="carousel-item">
                <div className="item-three">
                    <p>Оранживый кресло</p>
                    <p>от 430 000 uzs</p>
                    <img src={bannerTwo} alt="Sofa" />
                </div>
                <div className="item-four">
                    <p>Оранживый кресло</p>
                    <img src={bannerFive} alt="Sofa" />
                </div>
            </div>
            <div className="carousel-item">
                <div className="item-six">
                    <p>Оранживый кресло</p>
                    <img src={bannerFour} alt="Sofa" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner