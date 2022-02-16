export default {
  items: [
    { component: 'card', items: [
      { component: 'toolbar', flat: true, color: 'blue-grey', dark: true, title: {itemtext: 'Submit a post'} },
      { component: 'card-text', items: [
        { component: 'text-field', filled: true, label: 'Title', value: 'My new post' },
        { component: 'textarea', filled: true, label: 'Text', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' },
        { component: 'divider', class: 'my-2' },
        { component: 'item-group', multiple: true, items: [
          { component: 'subheader', itemtext: 'Tags' },
          { component: 'div', itemsfor: 8, items: [
            {
              component: 'item', slots: [{
                name: 'default', type: 'data', slotDataName: 'slot', items: [
              { component: 'chip', activeClass: 'purple--text', inputValue: 'slot.active', 
                evnts: [{event: 'click', value: 'slot.toggle', func: e => e() }], 
                itemtext: {value: 'subItem', func: e => `Tag ${e}`} 
              }
            ]}]}
          ]}
        ]}
      ]},
      { component: 'divider' },
      { component: 'card-actions', items: [
        { component: 'spacer' },
        { component: 'btn', color: 'success', depressed: true, itemtext: 'Post' }
      ]}
    ]}
  ]
}