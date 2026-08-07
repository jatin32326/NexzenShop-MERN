import React from 'react'

const Badge = (props) => {
  return (
   <span className={`inline-block rounded-full py-1 px-3 text-[12px] capitalize ${props.status==="pending" && "bg-red-600 text-white"} 
   ${props.status==="confirm" && "bg-green-600 text-white"} 
   ${props.status==="delivered" && "bg-blue-700 text-white"}`}>
   {props.status}

   </span>
  )
}

export default Badge
