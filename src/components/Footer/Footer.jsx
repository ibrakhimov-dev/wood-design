import React from 'react'
import "./_footer.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-menu">
            <ul>
              <li><a href="">Политика безопасности</a></li>
              <li><a href="">Условия соглашения</a></li>
              <li><a href="">Публичная оферта</a></li>
              <li><a href="">© 2023 ООО. All rights reserved</a></li>
            </ul>
          </div>
          <div className="author">
              <a href="">Developer by: <span className='author-span'>Ibrakhimov Dev</span></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer