export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 12, md: 6, offsetMd: 3, items: [
        { component: 'card', items: [
          {
            component: 'toolbar', extended: true,
            appBarNavIcon: true,
            slots: [{
              name: 'extension',
              items: [
                { component: 'fab-transition', items: [
                  {
                    component: 'btn', show: [{ target: 'hidden', value: 'false' }], color: 'pink', fab: true, dark: true,
                    small: true, absolute: true, bottom: true, left: true, items: [
                      { component: 'icon', name: 'mdi-plus' }
                    ]
                  }
                ]}
              ]
            }]
          },
          {
            component: 'cardText', style: 'height: 300px', class: 'grey lighten-5 text-center', items: [
            {
              component: 'btn', color: 'primary', itemtext: 'btnText',
                evnts: [{ event: 'click', method: 'changeHidden' }]
            }
          ]},
          { component: 'cardText', style: 'height: 100px; position: relative', items: [
            { component: 'fab-transition', items: [
              {
                component: 'btn', show: [{ target: 'hidden', value: 'false' }], color: 'pink', dark: true, absolute: true, top: true, right: true, fab: true,
                items: [
                  { component: 'icon', name: 'mdi-plus' }
                ]
              }
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}