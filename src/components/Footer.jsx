import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='content'>
                <div>
                    <div className='heading1'>Contact</div>
                    <div className='border1'></div>
                    <div><span className='fa-solid fa-location-dot me-2 mt-4'></span>Aditya Trade Center 6th Floor, Flat No 604-c<br />Ameerpet,Hyderabad-500016,Telangana State</div>
                    <div><span className='fa-solid fa-phone me-2  mt-2'></span>+91 9000299706</div>
                    <div><span className='fa-solid fa-envelope me-2  mt-2'></span>info@maharajuhealthcare.com</div>
                    <div><span className='fa-solid fa-globe me-2  mt-2'></span>www.maharajutechnologies.com</div>
                </div>
                <div>
                    <div className='heading1'>Social</div>
                    <div className='border1'></div>
                    <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://x.com/?lang=en"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className='f-content pt-3'>© 2024 Maharaju Technologies Pvt Ltd, All Right Reserved.</div>
        </div>
    )
}

export default Footer