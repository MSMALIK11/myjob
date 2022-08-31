import React from 'react';
import ButtonDefault from './common/ButtonDefault';
import ButtonPrimary from './common/ButtonPrimary';
import TextBox from './common/TextBox';



const AddJob = () => {
  return (
    <div className='addJobBox'>
        <TextBox placeText={"Enter Job Title"} label={"Title"} />
        <TextBox placeText={"Enter Description"}  label={"Description"} />
        <div className="button-box mt-16">
<ButtonPrimary  />
<ButtonDefault />
        </div>

    </div>

  )
}

export default AddJob