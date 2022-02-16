export default {
  items: [
    { component: 'container', fluid: true, class: 'pa-0', items: [
      {
        component: 'row', align: 'center', items: [
          {
            component: 'col', cols: 12, sm: 6,
            items: [
              {
                component: 'div', class: 'text-center', items: [
                  {
                    component: 'div', class: 'my-2', items: [
                      { component: 'btn', class: 'my-2', size: 'xs', color: 'secondary', dark: true, itemtext: 'Extra small Button' }
                    ]
                  },
                  {
                    component: 'div', class: 'my-2', items: [
                      {
                        component: 'btn', class: 'my-2', size: 'sm', color: 'primary', dark: true, itemtext: 'Small Button'
                      }
                    ]
                  },
                  {
                    component: 'div', class: 'my-2', items: [
                      {
                        component: 'btn', class: 'my-2', color: 'warning', dark: true, itemtext: 'Normal Button'
                      }
                    ]
                  },
                  {
                    component: 'div', class: 'my-2', items: [
                      {
                        component: 'btn', class: 'my-2', size: 'lg', color: 'error', dark: true, itemtext: 'Large Button'
                      }
                    ]
                  },
                  {
                    component: 'div', class: 'my-2', items: [
                      {
                        component: 'btn', class: 'my-2', size: 'xl', color: 'success', dark: true, itemtext: 'Extra Large Button'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            component: 'col', cols: 12, sm: 6,
            items: [
              {
                component: 'div', class: 'text-center', items: [
                  {
                    component: 'div', class: 'my-2', items: [
                      {
                        component: 'btn', class: 'my-2', size: 'xs', color: 'secondary', dark: true, fab: true, items: [
                          { component: 'icon', name: 'mdi-television' }
                        ]
                      }
                    ]
                  },
                  {
                    component: 'div', class: 'my-2', items: [
                      {
                        component: 'btn', class: 'my-2', size: 'sm', color: 'primary', dark: true, fab: true, items: [
                          { component: 'icon', name: 'mdi-pencil' }
                        ]
                      }
                    ]
                  },
                  {
                    component: 'div', class: 'my-2', items: [
                      {
                        component: 'btn', class: 'my-2', color: 'warning', dark: true, fab: true, items: [
                          { component: 'icon', name: 'mdi-account-circle' }
                        ]
                      }
                    ]
                  },
                  {
                    component: 'div', class: 'my-2', items: [
                      {
                        component: 'btn', class: 'my-2', size: 'lg', color: 'error', dark: true, fab: true, items: [
                          { component: 'icon', name: 'mdi-alarm' }
                        ]
                      }
                    ]
                  },
                  {
                    component: 'div', class: 'my-2', items: [
                      {
                        component: 'btn', class: 'my-2', size: 'xl', color: 'success', dark: true, fab: true, items: [
                          { component: 'icon', name: 'mdi-domain' }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]}
  ]
}