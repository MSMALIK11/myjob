import React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const SideBar = ({active}) => {
    const navLinkGroups = [
        {
          links: [
            // {
            //   name: 'Home',
            //   url: 'http://example.com',
            //   expandAriaLabel: 'Expand Home section',
            //   title: '',
            // //   links: [
            // //     {
            // //       name: 'Activity',
            // //       url: 'http://msn.com',
            // //       key: 'key1',
            // //       target: '_blank',
            // //       title: '',
            // //     },
            // //     {
            // //       name: 'MSN',
            // //       url: 'http://msn.com',
            // //       disabled: true,
            // //       key: 'key2',
            // //       target: '_blank',
            // //       title: '',
            // //     },
            // //   ],
            //   isExpanded: true,
            // },
          
            {
              name: !active?'Dicsover':"",
              url: '',
              icon: "Home",
              key: 'key1',
              target: '_blank',
              title: '',
            
            },
            {
              name: 'Masking',
              url: '',
              icon: "passwordField",
              key: 'key2',
              target: '_blank',
              title: '',
            },
            {
              name: 'Setting',
              url: '',
              icon: "Settings",
              key: 'key3',
              target: '_blank',
              title: '',
            },
          ],
        },
      ];
      const navStyles= {
        root: {
          width:"100%",
          height: 350,
          boxSizing: 'border-box',
          border: '1px solid #eee',
          overflowY: 'auto',
        },
        // these link styles override the default truncation behavior
        link: {
          whiteSpace: 'normal',
          lineHeight: 'inherit',
        },
      };


      
     
  return (
    <div className={` ${active?"mobilenav":"sideBarWraper"}`}>


<Nav selectedKey="key1" ariaLabel="Nav example with wrapped link text" styles={navStyles} groups={navLinkGroups} />


    </div>
  )
}

export default SideBar