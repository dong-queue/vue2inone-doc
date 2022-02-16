export default {
  items: [
    { component: 'card', class: 'mx-auto', height: 300, width: 300, items: [
      { component: 'navidrw', absolute: true, dark: true, width: '100%', permanaent: true, 
        src: 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg', items: [
          { component: 'list', itemsfor: 'items', items: [
            { component: 'list-item', link: true, items: [
              { component: 'list-item-icon', items: [{ component: 'icon', name: 'subItem.icon'}] },
              { component: 'list-item-content', items: [{component: 'list-item-title', itemtext: 'subItem.text'}] }
            ]}
          ]}
        ]
      }
    ]}
  ]
}