export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'date-picker', model: 'dates', multiple: true }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'combobox', model: 'dates', multiple: true, chips: true, smallChips: true, label: 'Multiple picker in menu', 
          prependIcon: 'mdi-calendar', readonly: true, evnts: [{event: 'click', method: 'showMenu'}] 
        },
        { component: 'menu', ref: 'menu', model: 'menu', closeOnContentClick: false, 'returnValue.sync': 'dates', activator: 'element',
          transition: 'scale-transition', left: true, offsetY: true, minWidth: 'auto', items: [
            { component: 'date-picker', model: 'dates', multiple: true, noTitle: true, scrollable: true, items: [
              { component: 'spacer' },
              { component: 'btn', text: true, color: 'primary', evnts: [{ event: 'click', method: 'closeMenu' }], itemtext: 'Cancel' },
              { component: 'btn', text: true, color: 'primary', evnts: [{ event: 'click', method: 'save', value: 'dates' }], itemtext: 'OK' }
            ]}
          ]
        }
      ]}
    ]}
  ]
}