export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'switch', model: 'closeOnClick', label: 'Close on click' },
      { component: 'btn', color: 'primary', dark: true, itemtext: 'Dropdown', 
        evnts: [{event: 'click', method: 'show' }]
      },
      { component: 'menu', model: 'showMenu', top: true, 'close-on-click': 'closeOnClick', activator: 'element', items: [
        { component: 'list', itemsfor: 'items', items: [
          { component: 'list-item', items: [{ component: 'list-item-title', itemtext: 'subItem.title' }]}
        ]}
      ]}
    ]}
  ]
}