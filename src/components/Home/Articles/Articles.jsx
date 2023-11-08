import React from 'react'
import iconOne from "../../Assets/img/article-images/Icons.svg";
import iconTwo from "../../Assets/img/article-images/Icons(1).svg";
import iconThree from "../../Assets/img/article-images/Icons(2).svg";
import iconFour from "../../Assets/img/article-images/Icons(3).svg";
import "./_articles.css";

function Articles() {
  return (
    <section className='articles'>
        <div className="container">
            <div className="articles-content">
                <h4>Наши примущество!</h4>
                <div className="articles-cards">
                    <div className="articles-card-item">
                        <div className="articles-icon icon-one">
                            <img src={iconOne} alt="Articles" />
                        </div>
                        <p>Качество</p>
                        <p>Ковры прослужат вам долгую и отличную службу. Узоры, наносимые на ковры, подойдут.</p>
                    </div>
                    <div className="articles-card-item">
                        <div className="articles-icon icon-two">
                            <img src={iconTwo} alt="Articles" />
                        </div>
                        <p>Качество</p>
                        <p>Ввам долгую и отличную службу. Узоры, наносимые на ковры, подойдут.</p>
                    </div>
                    <div className="articles-card-item">
                        <div className="articles-icon icon-three">
                            <img src={iconThree} alt="Articles" />
                        </div>
                        <p>Размер</p>
                        <p>Долгую и отличную службу. Узоры, наносимые на ковры, подойдут.</p>
                    </div>
                    <div className="articles-card-item">
                        <div className="articles-icon icon-four">
                            <img src={iconFour} alt="Articles" />
                        </div>
                        <p>Доставка</p>
                        <p>Узоры, наносимые на ковры, подойдут.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Articles