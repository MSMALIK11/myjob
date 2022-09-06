import React from 'react'

const SidebarWraper = ({children,active}) => {
  return (
    <div className={` ${active?"mobilenav":"sideBarWraper"}`}>
        {children}

    </div>
  )
}

export default SidebarWraper