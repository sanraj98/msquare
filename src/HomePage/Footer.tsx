import React from 'react'

export const Footer = () => {
  return (
    <footer className="mt-3 d-flex align-items-center justify-content-evenly" id="about">
    
        <div className="text-light">

            <h5>contact us</h5>
            <div>
                <i className="bi bi-telephone-fill d-inline">
                    <p className="ms-2 d-inline">9994027092</p>
                </i>
            </div>
            <div>
                <i className="bi bi-envelope-fill">
                    <a href="#" className="ms-2 d-inline">msquareind@gmail.com</a>
                </i>
            </div>
            <div>
                <i className="bi bi-geo-alt-fill">
                    <address className="ms-2 d-inline">
                      
                    </address>
                </i>
            </div>
        </div>
        <div className="text-light">
            <h5>our team</h5>
            <div>
                <i className="bi bi-people-fill">
                    <p className="ms-2 d-inline">msquare</p>
                </i>
            </div>
            <div>
                <i className="bi bi-people-fill">
                    <p className="ms-2 d-inline">msquare</p>
                </i>
            </div>
        </div>
  
</footer>
  )
}