export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'col', cols: 12, sm: 7, md: 6, lg: 5, items: [
        { component: 'sheet', elevation: '10', rounded: 'xl', items: [
          { component: 'sheet', class: 'pa-3 primary text-right', dark: true, rounded: 't-xl', items: [
            { component: 'btn', icon: true, items: [
              { component: 'icon', name: 'mdi-content-save-cog-outline' }
            ]},
            { component: 'btn', class: 'ml-2', icon: true, items: [
              { component: 'icon', name: 'mdi-check-bold' }
            ]}
          ]},
          { component: 'div', class: 'pa-4', items: [
            { component: 'chip-group', activeClass: 'primary--text', column: true, itemsfor: 'tags', items: [
              { component: 'chip', itemtext: 'subItem' }
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}