export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: '400', items: [
      { component: 'list', flat: true, items: [
        { component: 'list-item-group', model: 'model', color: 'indigo', itemsfor: 'items', items: [
          { component: 'list-item', items: [
            { component: 'list-item-icon', items: [{component: 'icon', name: 'subItem.icon'}] },
            { component: 'list-item-content', items: [{ component: 'list-item-title', itemtext: 'subItem.text'}] }
          ]}
        ]}
      ]}
    ]}
  ]
}