export default {
  items: [
    { component: 'card', id: 'create', items: [
      // conditions
      {
        component: 'row', class: 'child-flex', items: [
        { component: 'col', cols: 12, sm: 6, md: 4, items: [
          { component: 'subheader', itemtext: 'Options' },
          { component: 'checkbox', model: 'model.hover', label: 'Open on hover', hideDetails: true }
        ]},
        { component: 'col', cols: 12, sm: 6, md: 4, items: [
          { component: 'subheader', itemtext: 'FAB location' },
          { component: 'checkbox', model: 'model.top', label: 'Top', hideDetails: true },
          { component: 'checkbox', model: 'model.right', label: 'Right', hideDetails: true },
          { component: 'checkbox', model: 'model.bottom', label: 'Bottom', hideDetails: true },
          { component: 'checkbox', model: 'model.left', label: 'Left', hideDetails: true },
        ]},
        { component: 'col', cols: 12, sm: 6, md: 4, items: [
          { component: 'subheader', itemtext: 'Speed dial direction' },
          {
            component: 'radioGroup', model: 'model.direction', hideDetails: true, items: [
            { component: 'radio', value: 'top', label: 'Top' },
            { component: 'radio', value: 'right', label: 'Right' },
            { component: 'radio', value: 'bottom', label: 'Bottom' },
            { component: 'radio', value: 'left', label: 'Left' },
          ]}
        ]},
        { component: 'col', cols: 12, sm: 6, md: 4, items: [
          { component: 'subheader', itemtext: 'Transition'},
          {
            component: 'radioGroup', model: 'model.transition', hideDetails: true, items: [
              { component: 'radio', value: 'slide-y-transition', label: 'Slide y' },
              { component: 'radio', value: 'slide-y-reverse-transition', label: 'Slide y reverse' },
              { component: 'radio', value: 'slide-x-transition', label: 'Slide x' },
              { component: 'radio', value: 'slide-x-reverse-transition', label: 'Slide x reverse' },
              { component: 'radio', value: 'scale-transition', label: 'Scale' },
          ]}
        ]}
      ]},
      // speed dial
      {
        component: 'speedDial', model: 'model.fab', top: 'model.top', bottom: 'model.bottom', right: 'model.right', 
        left: 'model.left', direction: 'model.direction', openOnHover: 'model.hover', transition: 'model.transition',
        style: 'position: absolute;',
        slots: [
          {
            name: 'activator', items: [
            {
              component: 'btn', model: 'model.fab', color: 'blue darken-2', dark: true, fab: true, items: [
              { component: 'icon', if: [{ target: 'model.fab', value: 'true' }], name: 'mdi-close' },
              { component: 'icon', if: [{ target: 'model.fab', value: 'false' }], name: 'mdi-account-circle' },
            ]}
          ]}
        ],
        items: [
          { component: 'btn', fab: true, dark: true, small: true, color: 'green', items: [
              { component: 'icon', name: 'mdi-pencil'}
            ], style: 'position: relative'
          },
          {
            component: 'btn', fab: true, dark: true, small: true, color: 'indigo', items: [
              { component: 'icon', name: 'mdi-plus'}
            ], style: 'position: relative'
          },
          { component: 'btn', fab: true, dark: true, small: true, color: 'red', items: [
              { component: 'icon', name: 'mdi-delete'}
            ], style: 'position: relative'
          },
        ]
      }
    ]}
  ]
}