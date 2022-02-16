export default {
  items: [
    { component: 'card', items: [
      { component: 'toolbar', color: 'pink', dark: true, dense: true, flat: true, title: { class: 'body-2', itemtext: 'Upcoming Changes'} },
      { component: 'card-text', itemtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      { component: 'card-actions', items: [
        { component: 'spacer' },
        { component: 'icon', large: true, name: 'mdi-chevron-right', evnts: [{event: 'click', method: 'next'}] }
      ]}
    ]}
  ]
}