import React from 'react';
import "./_connect.css";

function Connect() {
  return (
    <section className='connect'>
        <div className="container">
            <div className="connect-content">
                <div className="connect-info">
                    <h1>Остались вопросы? Позвоните <br /> нам, и мы вас <span className='connect-info-span'>проконсультируем</span></h1>
                    <p>Мебели прослужат вам долгую и отличную службу. Узоры, наносимые на мебели, <br /> подойдут как для гостиных и спален в вашем доме, так и для офисов.</p>
                    <button type='button' className='btn-connect'>Свяжитесь с нами</button>
                </div>
                    <div className="google-map" href="https://maps.app.goo.gl/TZYHXTAN7x5vXgin7">
                            <div className="map-content">

                            </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.0013152019264!2d69.18500897576!3d41.30883500086442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae899921bb4a3d%3A0x87ffd21fbce40156!2sJapan%20Digital%20University!5e0!3m2!1sru!2s!4v1699458745599!5m2!1sru!2s" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                <div className="connect-contact">
                    <div className="connect-content-item">
                        <h6>Обои</h6>
                        <p>Следите за новостями на нашем сайте и тогда вы <br /> сможете даже приобрести шедевр в единственном <br /> экземпляре.</p>
                    </div>
                    <div className="connect-content-item">
                        <h6>Время работы</h6>
                        <p><i class="fa-regular fa-clock"></i> Мы работаем без выходных с <br /> 10:00 до 19:00</p>
                    </div>
                    <div className="connect-content-item">
                        <h6>Наши контакты</h6>
                        <div className="contact-info-content">
                            <div className="contact-info-phone">
                                <ul>
                                    <li>
                                        <a href="https://maps.app.goo.gl/TZYHXTAN7x5vXgin7"><i class="fa-solid fa-location-dot"></i> р.Нурафшон, ул.Фаргона 12Б</a>
                                    </li>
                                    <li>
                                        <a href=""><i class="fa-solid fa-phone"></i> +998 90 000 00 00</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact-info-phone">
                                <ul>
                                    <li>
                                        <a href=""><i class="fa-regular fa-envelope"></i> info@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Connect