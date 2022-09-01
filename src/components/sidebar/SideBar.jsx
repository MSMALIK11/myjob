import React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SideBar = ({active}) => {
 
  const location=useLocation();

  const key=location.pathname.split('').splice(1).join('')
  console.log('key ',key )

  const navigate=useNavigate();
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
              key: '/',
              target: '_blank',
              title: 'job',
              onClick: () => navigate('/')
            
            },
            {
              name: 'Masking',
              url: '',
              icon: "passwordField",
              key: 'masking',
              target: '_blank',
              title: '',
              onClick: () => navigate('/masking')
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


<Nav selectedKey={key?key:'/'}


 styles={navStyles} groups={navLinkGroups} />


    </div>
  )
}

export default SideBar