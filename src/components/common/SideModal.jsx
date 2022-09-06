import React from 'react';

const SideModal = ({opened,setOpened,data}) => {
  return (
    <div className={`sideModel-wraper ${opened?"open":''}`}>

    <div className="sideModel">
        <div className="modelHeader">
            <h3>New Discovery job</h3>
           
        <span className='onCloseIcon' onClick={()=>setOpened(false)}>&times;</span>

        </div>

        <div className="model-body">
        <p>{data?.name}</p>
        </div>

    </div>
      
        </div>
  )
}

export default SideModal