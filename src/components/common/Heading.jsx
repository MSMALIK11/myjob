import React from 'react'

const Heading = ({as, title,color,bold}) => {

    if(title==="")  return;

  return (
    <>
   
{
getCurrentHeading(as,title,color,bold)
}
   

    </>
   
  )
}


const getCurrentHeading=(as,title,color,bold)=>{
    switch(as){
        case "h1":
        return <h1 style={{color:color && color,fontWeight:bold && bold}}>{title}</h1>
        case "h2":
        return <h2 style={{color:color && color,fontWeight:bold && bold}}>{title}</h2>
        case "h3":
        return <h3 style={{color:color && color,fontWeight:bold && bold}}>{title}</h3>
        case "h4":
        return <h4 style={{color:color && color,fontWeight:bold && bold}}>{title}</h4>
        case "h5":
        return <h5 style={{color:color && color,fontWeight:bold && bold}}>{title}</h5>

       default:
                return <p style={{color:color,fontWeight:bold && bold}}>{title}</p>
    }
}


export default Heading