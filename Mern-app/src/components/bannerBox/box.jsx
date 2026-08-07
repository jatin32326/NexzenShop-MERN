import { Link } from "react-router-dom"
import React from "react"

const Bannerbox = (props)=>{
  return(
    <div className=" bannerBox overflow-hidden rounded-lg group">
        <Link to = '/'>
        <img src={props.img} className="w-full transition-all group-hover:scale-105" alt="banner"/>
        </Link>
    </div>
    
  )
}

export default Bannerbox