import React from 'react';
import { Breadcrumb } from '@fluentui/react/lib/Breadcrumb';

import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const itemsWithHeading = [
  { text: 'Dicsovery', key: 'Files'},
  { text: 'New Job', key: 'd1', },
  // Generally, only the last item should ever be a heading.
  // It would typically be h1 or h2, but we're using h4 here to better fit the structure of the page.
  // { text: 'Folder 2', key: 'd2', isCurrentItem: true, as: 'h4' },
];
const BreadCrumb = () => {
  const [items,setItems]=useState(itemsWithHeading)

const location=useLocation();




  

      const newItems=()=>{
        if(location.pathname){
          const pathname=location.pathname.split('').slice(1).join("")
          console.log('location',pathname)
const newData=[...items,{text:pathname,key:'d1'}]


setItems(newData)
        }
      }

      useEffect(()=>{

        newItems()

      },[location])

  return (
    <div className='Breadcrumb'>
           <Breadcrumb
        items={items}
       
      />
    </div>
  )
}

export default BreadCrumb