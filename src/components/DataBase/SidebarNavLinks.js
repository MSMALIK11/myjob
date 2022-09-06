import { useNavigate } from "react-router-dom";




  const SidebarLinks=({active})=>{

    const navigate=useNavigate();
    const navLinks = [
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
              name: !active ? "Dicsover" : "",
              url: "",
              icon: "Home",
              key: "/",
              target: "_blank",
              title: "job",
              onClick: () => navigate("/"),
            },
            {
              name: "Masking",
              url: "",
              icon: "passwordField",
              key: "masking",
              target: "_blank",
              title: "",
              onClick: () => navigate("/masking"),
            },
            {
              name: "Setting",
              url: "",
              icon: "Settings",
              key: "key3",
              target: "_blank",
              title: "",
            },
          ],
        },
      ];


    return {navLinks}
  }

  export  default SidebarLinks