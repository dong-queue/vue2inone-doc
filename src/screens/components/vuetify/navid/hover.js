export default {
  items: [
    { component: 'div', class: 'ma-12 pa-12', items: [
      { component: 'card', items: [
        { component: 'navigation-drawer', permanent: true, expandOnHover: true, items: [
          { component: 'list', items: [
            { component: 'list-item', class: 'px-2', items: [
              { component: 'list-item-avatar', items: [
                { component: 'img', src: 'https://randomuser.me/api/portraits/women/85.jpg' }
              ]}
            ]},
            { component: 'list-item', link: true, items: [
              { component: 'list-item-content', items: [
                { component: 'list-item-title', class: 'title', itemtext: 'Sandra Adams' },
                { component: 'list-item-subtitle', itemtext: 'sandra_a88@gmail.com' }
              ]}
            ]}
          ]},
          { component: 'divider' },
          { component: 'list', nav: true, dense: true, items: [
            { component: 'list-item', link: true, items: [
              { component: 'list-item-icon', items: [{component: 'icon', name: 'mdi-folder'}] },
              { component: 'list-item-title', itemtext: 'My Files' }
            ]},
            { component: 'list-item', link: true, items: [
              { component: 'list-item-icon', items: [{component: 'icon', name: 'mdi-account-multiple'}] },
              { component: 'list-item-title', itemtext: 'Shared with me' }
            ]},
            { component: 'list-item', link: true, items: [
              { component: 'list-item-icon', items: [{ component: 'icon', name: 'mdi-star'}] },
              { component: 'list-item-title', itemtext: 'Starred' }
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}