import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[]=[
    {
    icon:"walk-outline",
    name:"Action-Sheet",
    redirectTo:"/action-sheet"
    },
    {
      icon:"walk-outline",
      name:"Alert",
      redirectTo:"/alert"
      },
      {
        icon:"walk-outline",
        name:"Accordion",
        redirectTo:"/accordion"
        },
        {
          icon:"walk-outline",
          name:"Badge",
          redirectTo:"/badge"
          },
          {
            icon:"walk-outline",
            name:"Breadcrumb",
            redirectTo:"/breadcrumb"
            },
            {
              icon:"walk-outline",
              name:"Button",
              redirectTo:"/button"
              },
              {
                icon:"walk-outline",
                name:"Card",
                redirectTo:"/card"
                },
                {
                  icon:"walk-outline",
                  name:"Checkbox",
                  redirectTo:"/checkbox"
                  },
                  {
                    icon:"walk-outline",
                    name:"Chip",
                    redirectTo:"/chip"
                    },

                    {
                      icon:"walk-outline",
                      name:"Date & Time Pickers",
                      redirectTo:"/datetime"
                      },

                      {
                        icon:"walk-outline",
                        name:"Item",
                        redirectTo:"/item"
                        },

                        {
                          icon:"walk-outline",
                          name:"Navigation",
                          redirectTo:"/navigation"
                          },

                          {
                            icon:"walk-outline",
                            name:"Reorder",
                            redirectTo:"/reorder"
                            },

                            {
                              icon:"walk-outline",
                              name:"Toast",
                              redirectTo:"/toast"
                              },
                              {
                                icon:"walk-outline",
                                name:"Modal",
                                redirectTo:"/modal"
                                },
                                {
                                  icon:"walk-outline",
                                  name:"Popover",
                                  redirectTo:"/popover"
                                  },
                                  {
                                    icon:"walk-outline",
                                    name:"Progress Indicators",
                                    redirectTo:"/progressindicators"
                                    },
                                    {
                                      icon:"walk-outline",
                                      name:"Radio",
                                      redirectTo:"/radio"
                                      },
                                      {
                                        icon:"walk-outline",
                                        name:"Range",
                                        redirectTo:"/range"
                                        },
                                        {
                                          icon:"walk-outline",
                                          name:"Refresher",
                                          redirectTo:"/refresher"
                                          },
                                          {
                                            icon:"walk-outline",
                                            name:"Tabs",
                                            redirectTo:"/tabs"
                                            },
                                            {
                                              icon:"walk-outline",
                                              name:"Toggle",
                                              redirectTo:"/toggle"
                                              },
                                              {
                                                icon:"walk-outline",
                                                name:"Toolbar",
                                                redirectTo:"/toolbar"
                                                },
                                                {
                                                  icon:"walk-outline",
                                                  name:"Typography",
                                                  redirectTo:"/tipografia"
                                                  },                                                   
                                                  {
                                                    icon:"walk-outline",
                                                    name:"Content",
                                                    redirectTo:"/content"
                                                    },     
                                                    {
                                                      icon:"walk-outline",
                                                      name:"Floating-action-button",
                                                      redirectTo:"/floating-action-button"
                                                      },    
                                                      {
                                                        icon:"walk-outline",
                                                        name:"Grid",
                                                        redirectTo:"/grid"
                                                        },     
                                                        {
                                                          icon:"walk-outline",
                                                          name:"Icons",
                                                          redirectTo:"/icons"
                                                          },     
                                                          {
                                                            icon:"walk-outline",
                                                            name:"Input",
                                                            redirectTo:"/input"
                                                            },     
                                                            {
                                                              icon:"walk-outline",
                                                              name:"List",
                                                              redirectTo:"/list"
                                                              },  
                                                              {
                                                                icon:"walk-outline",
                                                                name:"Media",
                                                                redirectTo:"/media"
                                                                },  
                                                                {
                                                                  icon:"walk-outline",
                                                                  name:"Menu",
                                                                  redirectTo:"/menu"
                                                                  }, 
                                                                  {
                                                                    icon:"walk-outline",
                                                                    name:"Infinite-scroll",
                                                                    redirectTo:"/infinite-scroll"
                                                                    },  
                                                                      {
                                                                        icon:"walk-outline",
                                                                        name:"Searchbar",
                                                                        redirectTo:"/searchbar"
                                                                        }, 
                                                                        {
                                                                          icon:"walk-outline",
                                                                          name:"Select",
                                                                          redirectTo:"/select"
                                                                          }, 
                                                                     
    ];

  constructor() { }

  ngOnInit() {
  }

}
