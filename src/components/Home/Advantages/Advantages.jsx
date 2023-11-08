import React from 'react';
import "./_advantages.css";
import photoOne from "../../Assets/img/advantages-photo-1.png";
import photoTwo from "../../Assets/img/advantages-photo-2.png";
import photoThree from "../../Assets/img/advantages-photo-3.png";

function Advantages() {
  return (
    <section className='advantages'>
        <div className="container">
            <div className="advantages-content">
                <h4>Наши статьи</h4>
                <div className="advantages-carousel">
                    <div className="advantages-item">
                       <div className="advantages-item-info">
                            <p>Полезности</p>
                            <p>Выбираем мебеля для вас и гостиницы</p>
                            <p>If everything seems under control, youre just not going enough. everything seems under.</p>
                       </div>
                       <div className="advantages-item-photo">
                            <img src={photoTwo} alt="Advantages" />
                       </div>
                    </div>
                    <div className="advantages-item">
                       <div className="advantages-item-info">
                            <p>Полезности</p>
                            <p>Психология выбора мебеля для кухни</p>
                            <p>If everything seems under control, youre just not going enough. everything seems under.</p>
                       </div>
                       <div className="advantages-item-photo">
                            <img src={photoOne} alt="Advantages" />
                       </div>
                    </div>
                    <div className="advantages-item">
                       <div className="advantages-item-info">
                            <p>Полезности</p>
                            <p>Вам трудно выбрать кресло на ваш дом</p>
                            <p>If everything seems under control, youre just not going enough. everything seems under.</p>
                       </div>
                       <div className="advantages-item-photo">
                            <img src={photoThree} alt="Advantages" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Advantages