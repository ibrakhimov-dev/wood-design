import React, { useEffect, useState } from 'react';
import woodLogo from "../Assets/img/wood-logo.svg"; 
import "./_navbar.css";

function Navbar() {
    const [click_btn_menu, setClickBtn] = useState(null);
    const [menu_phone, setMenuPhone] = useState(null);
    
    useEffect(() => {
        setClickBtn(document.querySelector(".click-btn-menu"))
        setMenuPhone(document.querySelector(".menu-phone"))
    }, [menu_phone, click_btn_menu])

    function responsiveMenu () {
        let isAgree = menu_phone.classList.contains("active");
        if (isAgree) {
            menu_phone.style.display = "none";
            menu_phone.classList.remove("active");
            click_btn_menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
            click_btn_menu.style.backgroundColor = "#C35815";
        } else {
            menu_phone.style.display = "block";
            menu_phone.classList.add("active");
            click_btn_menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
            click_btn_menu.style.backgroundColor = "transparent";
        }
    }


  return (
    <nav className='navbar'>
        <div className="container">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <div className="logo">
                        <img src={woodLogo} alt="Wood Design" />
                    </div>
                    <div className="logo-name">
                        <p>Wooddesign</p>
                        <p>всюду мягко и удобно</p>
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="menu">
                        <ul>
                            <li><a href="#Каталог"><i className="fa-solid fa-bars"></i> Каталог продуктов</a></li>
                            <li><a href="#Услуги">Услуги</a></li>
                            <li><a href="#Контакты">Контакты</a></li>
                        </ul>   
                    </div>
                    <div className="navbar-contact">
                        <div className="menu-contact">
                            <div className="menu-contact-icon">
                                <i className="fa-solid fa-phone"></i>
                                <div className="menu-contact-info-responsive">
                                    <p>Приём звонков 24/7</p>
                                    <p>+998 90 000 00 00</p>
                                </div>
                            </div>
                            <div className="menu-contact-info">
                                <p>Приём звонков 24/7</p>
                                <p>+998 90 000 00 00</p>
                            </div>
                        </div>
                        <div className="menu-contact">
                            <div className="menu-contact-icon">
                                <i className="fa-solid fa-location-dot"></i>
                                <div className="menu-contact-info-responsive">
                                    <p>Приходите в гости</p>
                                    <p>р.Нурафшон, ул.Фаргона 12Б</p>
                                </div>
                            </div>
                            <div className="menu-contact-info">
                                <p>Приходите в гости</p>
                                <p>р.Нурафшон, ул.Фаргона 12Б</p>
                            </div>
                        </div>
                    </div>
                    <div className="responsive-menu">
                        <button onClick={responsiveMenu} className='click-btn-menu'><i className="fa-solid fa-bars"></i></button>
                        <ul className='menu-phone'>
                            <li><a href="#Каталог"> Каталог продуктов</a></li>
                            <li><a href="#Услуги">Услуги</a></li>
                            <li><a href="#Контакты">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar