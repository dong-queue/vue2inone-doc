export default {
  items: [
    { component: 'row', align: 'center', items: [
      { component: 'item-group', model: 'window', class: 'shrink mr-6', mandatory: true, 
        itemsfor: 'length', items: [
          { component: 'item', 
            slots: [{name: 'default', type: 'data', slotDataName: 'props', items: [
              { component: 'div', items: [
                {
                  component: 'btn', 'input-value': 'props.active', 
                  icon: true, evnts: [{ event: 'click', value: 'props.toggle', func: e => e()}], items: [
                    { component: 'icon', name: 'mdi-record' }
                  ]
                }
              ]}
            ]}
          ]}
      ]},
      { component: 'col', items: [
        { component: 'window', model: 'window', class: 'elevation-1', vertical: true, itemsfor: 'length', items: [
          {
            component: 'window-item', eager: true, items: [
            { component: 'card', flat: true, items: [
              { component: 'card-text', items: [
                { component: 'row', class: 'mb-4', align: 'center', items: [
                  { component: 'avatar', color: 'grey', class: 'mr-4' },
                  { component: 'text', class: 'title font-weight-bold', itemtext: {value: 'subItem', func: e => `Title ${e}`} },
                  { component: 'spacer' },
                  { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-account' }]}
                ]},
                { component: 'div', itemtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
                { component: 'div', itemtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
                { component: 'div', itemtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
              ]}
            ]}
          ] }
        ]}
      ]}
    ]}
  ]
}