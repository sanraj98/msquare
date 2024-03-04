import React from 'react'
import { Videocontainer } from '../HomePage/Videocontainer'
import { Homecard } from '../HomePage/Homecard'
import stockImg from '../resource/stock-img.svg'
import { Loginmodel } from './Loginmodel'


export const Homepage:React.FC = () => {
  return (
    <>
       <Videocontainer />
       <h2 className='text-light text-center mt-4'>Special Features</h2>
       <div className='container mt-4'>
            <div className="row gap-3">
                <div className="col-lg col-md-8">
                    <Homecard />
                </div>
                <div className="col-lg col-md-8">
                    <Homecard />
                </div>
                <div className="col-lg col-md-8">
                    <Homecard />
                </div>
            </div>
        </div>
        <div className='container mt-2'>
            <div className="d-flex">
                <p className='text-light align-self-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eum, cumque quae non, necessitatibus commodi fugiat molestias unde temporibus optio nostrum officiis provident quis alias aut voluptatibus est minima sit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quisquam illo! Eveniet consequatur iusto earum magni dolores tenetur aliquid similique voluptates cum, temporibus fugit quisquam esse odio totam facere mollitia.
                </p>
            <img src={stockImg} width={"500px"} height={"500px"} alt="stckimg" />
            </div>
  </div>
        
    </>
  )
}