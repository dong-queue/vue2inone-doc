export default {
  items: [
    {
      component: 'expanels', items: [
      { component: 'expanel', items: [
        { component: 'expanelh', slots: [
          {name: 'default', type: 'data', slotDataName: 'data', items: [
            { component: 'row', noGutters: true, items: [
              { component: 'col', cols: 4, items: [{component: 'text', itemtext: 'Trip name'}]},
              { component: 'col', cols: 8, class: 'text--secondary', items: [
                { component: 'text', if: [{ target: 'data.open', value: true}], itemtext: 'Enter a name for the trip' },
                { component: 'text', if: [{ target: 'data.open', value: true, ne: true}], itemtext: 'trip.name' }
              ]}
            ]}
          ]}
        ]},
        { component: 'expansion-panel-content', items: [{ component: 'textfield', model: 'trip.name', placeholder: 'Caribbean Cruise' }]}
      ]},
      { component: 'expansion-panel', items: [
        { component: 'expansion-panel-header', slots: [
          {name: 'default', type: 'data', slotDataName: 'data', items: [
            { component: 'row', noGutters: true, items: [
              { component: 'col', cols: 4, items: [{ component: 'text', itemtext: 'Location' }]},
              { component: 'col', cols: 8, class: 'text--secondary', items: [
                { component: 'text', if: [{ target: 'data.open', value: true }], itemtext: 'Select trip destination' },
                { component: 'text', if: [{ target: 'data.open', value: true, ne: true }], itemtext: 'trip.location' }
              ]}
            ]}
          ]}
        ]},
        { component: 'expansion-panel-content', items: [
          { component: 'row', 'no-gutters': true, items: [
            { component: 'spacer' },
            { component: 'col', cols: 5, items: [
              { component: 'select', model: 'trip.location', items: 'locations', chips: true, flat: true, solo: true }
            ]},
            { component: 'divider', vertical: true, class: 'mx-4' },
            { component: 'col', cols: 3, items: [{ component: 'text', itemtext: 'Select your destination of choice<br><a href="#">Learn more</a>'}]},
            { component: 'cardActions', items: [
              { component: 'spacer' },
              { component: 'btn', text: true, color: 'secondary', itemtext: 'Cancel' },
              { component: 'btn', text: true, color: 'primary', itemtext: 'Save' }
            ]}
          ]}
        ]}
      ]},
      { component: 'expanel', items: [
        { component: 'expansion-panel-header', 
          slots: [{ name: 'default', type: 'data', slotDataName: 'data', items: [
            { component: 'row', 'no-gutters': true, items: [
              { component: 'col', cols: 4, items: [{ component: 'text', itemtext: 'Start and end dates' }]},
              { component: 'col', cols: 8, class: 'text--secondary', items: [
                { component: 'text', if: [{ target: 'data.open', value: true }], itemtext: 'When do you want to travel?' },
                {
                  component: 'row', if: [{ target: 'data.open', value: true, ne: true }], noGutters: true, style: 'width: 100%', items: [
                    { component: 'col', cols: 6, items: [{ component: 'text', itemtext: { value: 'trip.start', func: (e) => String('Start date: ').concat(e || 'Not set') } }] },
                    { component: 'col', cols: 6, items: [{ component: 'text', itemtext: { value: 'trip.end', func: (e) => String('End date: ').concat(e || 'Not set') } }] },
                  ]
                }
              ]}
            ]}
          ]}]
        },
        { component: 'expansion-panel-content', items: [
          { component: 'row', justify: 'space-around', noGutters: true, items: [
            { component: 'col', cols: 3, items: [
              
              { component: 'menu', ref: 'startMenu', offsetY: true, minWidth: '290px', 
                'close-on-content-click': false,
                slots: [
                  { name: 'activator', type: 'data', slotDataName: 'slot', items: [
                    {
                      component: 'text-field', model: 'trip.start', label: 'Start date', prependIcon: 'mdi-calendar', readonly: true,
                      attrs: 'slot.attrs', on: 'slot.on'
                    },
                  ]}
                ],
                items: [
                  { component: 'date-picker', model: 'date', noTitle: true, scrollable: true, items: [
                    { component: 'spacer' },
                    { component: 'btn', text: true, color: 'primary', itemtext: 'Cancel', evnts: [{ event: 'click', method: 'closeMenu', value: 'startMenu' }]},
                    { component: 'btn', text: true, color: 'primary', itemtext: 'Save', evnts: [{ event: 'click', method: 'saveDate', value: 'startMenu' }] }
                  ]}
                ]
              }
            ]},
            { component: 'col', cols: 3, items: [
              
              { component: 'menu', ref: 'endMenu', offsetY: true, minWidth: '290px', 
                'close-on-content-click': false,
                slots: [
                  { name: 'activator', type: 'data', slotDataName: 'slot', items: [
                    { component: 'text-field', model: 'trip.end', label: 'End date', prependIcon: 'mdi-calendar', readonly: true, 
                      attrs: 'slot.attrs', on: 'slot.on'
                    },
                  ]}
                ],
                items: [
                  { component: 'date-picker', model: 'date', noTitle: true, scrollable: true, items: [
                    { component: 'spacer' },
                    { component: 'btn', text: true, color: 'primary', itemtext: 'Cancel', evnts: [{ event: 'click', method: 'closeMenu', value: 'endMenu' }]},
                    { component: 'btn', text: true, color: 'primary', itemtext: 'Save', evnts: [{ event: 'click', method: 'saveDate', value: 'endMenu' }] }
                  ]}
                ]
              }
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}