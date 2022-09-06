
import React from 'react';

import CommandBarNav from './CommandBarNav';
import DataLists from './DataLists';

import Heading from './common/Heading';

const Discovery = () => {
 
  return (
    <div
    className='discovery'
    > 
      <Heading title="Discovery" as="h4"   />
     
      <CommandBarNav/>
      <DataLists/>
  

    
    </div>
  )
}

export default Discovery