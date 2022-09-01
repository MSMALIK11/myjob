import React from 'react';
import { CommandBar } from '@fluentui/react';

const CommandBarNav = () => {


const items=[
    {
        key:'newJob',
        text:"New Job",
        iconProps:{iconName:'CircleRing'}

    },
    {
        key:'Edit Job',
        text:"Edit Job",
        iconProps:{iconName:'CircleRing'}

    },
    {
        key:'DuplicateJob',
        text:"Duplicate Job",
        iconProps:{iconName:'CircleRing'}

    },
    {
        key:'DeleteJob',
        text:"New Job",
        iconProps:{iconName:'CircleRing'}

    },
]

  return (
    <div>

        <CommandBar
        items={items}
        
        />
    </div>
  )
}

export default CommandBarNav