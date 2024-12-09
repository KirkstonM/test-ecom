const config = [
  
{
  name: "auth",
  path: "/",
  components: [
    {
      name: "MAIN_BANNER",
      enable: false,
    },
    {
      name: "AUTHENTICATION_FORM",
      enable: true,
      data: {
        styles : {
          display : "flex",
          alignItems : "center",
          justifyContent : "center",
          flexDirection: "column",
          border: "2px solid yellow"
        }
      }
    }
  ],
},
    {
      name: "home",
      path: "/web/home",
      components: [
        {
          name: "TEST",
          enable: false,
          data: {
            title: "Welcome to the Home Page",
          },
        },
        {
          name: "PRODUCT_CARD",
          enable: true,
          data: {
            title: "Welcome to the Home Page",
          },
        },
      ],
    },
    // {
    //   name: "about",
    //   path: "/web/about",
    //   components: [
    //     {
    //       name: "TEST",
    //       enable: true,  // This component will render
    //       data: {
    //         title: "Welcome to the Home Page",
    //         style : {
    //           background : "blue"
    //         }
    //       },
    //     },{
    //       name: "TEST",
    //       enable: true,  // This component will render
    //       data: {
    //         title: "Welcome to the Home Page",
    //       },
    //     },
    //   ],
    // },
  ];
  
  export default config;
  