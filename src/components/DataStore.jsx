import React from 'react'
import SearchField from './common/SearchField'
import CardHover from './common/CardHover';
import ButtonPrimary from './common/ButtonPrimary';
import ButtonDefault from './common/ButtonDefault'
const DataStore = () => {
 
  return (
    <div className='mt-16 pd'>
        <div className="data-store-search">
        <SearchField width={"45vw"}  />
        </div>
      
      <CardHover/>

      <div className="button-box mt-20">
        <ButtonPrimary />
        <ButtonDefault />
      </div>


      
    </div>
  )
}

export default DataStore