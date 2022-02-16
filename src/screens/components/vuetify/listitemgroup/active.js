export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: '400', items: [
      { component: 'list', items: [
        { component: 'list-item-group', model: 'model', activeClass: 'primary lighten-2', 
          color: 'indigo', itemsfor: 'items', subItemName: 'item', items: [
          { component: 'list-item', items: [
            { component: 'list-item-icon', items: [
              { component: 'icon', name: 'item.icon' }
            ]},
            { component: 'list-item-content', items: [
              { component: 'list-item-title', itemtext: 'item.text' }
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}