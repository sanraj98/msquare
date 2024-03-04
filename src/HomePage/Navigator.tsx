import React from 'react'
import '../css/asset.css';

export const Navigator:React.FC<{}> = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-darkgreen sticky-top p-4"data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Msquare</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Link</a>
        </li>
        
      
      </ul>
     
        <button className="btn btn-outline-light" type="button">Login</button>
      
    </div>
  </div>
</nav>
  )
}
