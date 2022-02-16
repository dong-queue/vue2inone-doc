export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      {
        component: 'btn', class: 'ma-2', loading: 'loading1', disabled: 'loading1', itemtext: 'Accept Terms',
        color: 'secondary',
        evnts: [
          { event: 'click', method: 'changeLoader', value: '1' }
        ]
      },
      {
        component: 'btn', class: 'ma-2 white--text', loading: 'loading3', disabled: 'loading3',
        color: 'blue-grey',
        evnts: [
          { event: 'click', method: 'changeLoader', value: '3' }
        ],
        items: [
          { component: 'text', class: 'pa-0 ma-0 white--text', itemtext: 'Upload' },
          { component: 'icon', name: 'mdi-cloud-upload', color: 'white', right: true, dark: true }
        ]
      },
      {
        component: 'btn', class: 'ma-2', loading: 'loading2', disabled: 'loading2', itemtext: 'Custom Loader',
        color: 'success',
        evnts: [
          { event: 'click', method: 'changeLoader', value: '2' }
        ],
        slots: [
          { name: 'loader', items: [{ component: 'text', class: 'ma-0 pa-0', itemtext: 'Loading...' }] }
        ]
      },
      {
        component: 'btn', class: 'ma-2', loading: 'loading4', disabled: 'loading4', itemtext: 'Icon Loader',
        color: 'info',
        evnts: [
          { event: 'click', method: 'changeLoader', value: '4' }
        ],
        slots: [
          { name: 'loader', items: [{ component: 'icon', class: 'custom-loader ma-0 pa-0', light: true, name: 'mdi-cached' }] }
        ]
      },
      {
        component: 'btn', class: 'ma-2 white--text', loading: 'loading5', disabled: 'loading5', fab: true,
        color: 'blue-grey',
        evnts: [
          { event: 'click', method: 'changeLoader', value: '5' }
        ],
        items: [
          { component: 'icon', name: 'mdi-cloud-upload', color: 'white', dark: true }
        ]
      }
    ]}
  ]
}