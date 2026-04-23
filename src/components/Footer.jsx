import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
        
        <section>
            <img src="/img/youtube.svg" alt="" />
            <img src="/img/spotify.svg" alt="" />
            <img src="/img/tik-tok.svg" alt="" />
            <img src="/img/instagram.svg" alt="" />
            <img src="/img/x.svg" alt="" />
        </section>

        <section>
            <details>
                <summary>Company <img src="/img/arrowDown.svg" alt="" /> </summary>
                <ul>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Carreers</a>
                    </li>
                    <li>
                        <a href="">Promotions</a>
                    </li>
                    <li>
                        <a href="">Gift Card</a>
                    </li>
                    <li>
                        <a href="">Delivery</a>
                    </li>
                </ul>
            </details>
            <details>
                <summary>Information <img src="/img/arrowDown.svg" alt="" /> </summary>
                <ul>
                    <li>
                        <a href="">About us</a>
                    </li>
                    <li>
                        <a href="">Franchises</a>
                    </li>
                    <li>
                        <a href="">Sustantability</a>
                    </li>
                    <li>
                        <a href="">Frequently Asked Questions</a>
                    </li>
                </ul>
            </details>
             <details>
                <summary>Security <img src="/img/arrowDown.svg" alt="" /> </summary>
                <ul>
                    <li>
                        <a href="">Nutritional Information</a>
                    </li>
                    <li>
                        <a href="">Privac & Cookies</a>
                    </li>
                    <li>
                        <a href="">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="">Legal</a>
                    </li>
                </ul>
            </details>
             <details>
                <summary>About Us <img src="/img/arrowDown.svg" alt="" /> </summary>
                <ul>
                    <li>
                        <a href="">Nutritional Information</a>
                    </li>
                    <li>
                        <a href="">Privac & Cookies</a>
                    </li>
                    <li>
                        <a href="">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="">Legal</a>
                    </li>
                </ul>
            </details>
        </section>

        <section>

            <p> Copyright  2026 Candies Center <br /> <span>All Rights Reserved</span></p>
            <div>
                <img src="/img/apple_pay.svg" alt="" />
                <img src="/img/mastercard_pay.svg" alt="" />
                <img src="/img/american_express_pay.svg" alt="" />
                <img src="/img/paypal_pay.svg" alt="" />
                <img src="/img/visa_pay.svg" alt="" />
            </div>

        </section>

    </footer>
  )
}

export default Footer