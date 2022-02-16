export default {
  items: [
    { component: 'toolbar', color: 'purple', dark: true, 
      title: { itemtext: 'Title' },
      items: [
        { component: 'divider', class: 'mx-4', vertical: true },
        { component: 'text', class: 'subheading', itemtext: 'My Home' },
        { component: 'spacer' },
        { component: 'toolbarItems', class: 'hidden-sm-and-down', items: [
          { component: 'btn', text: true, itemtext: 'News' },
          { component: 'divider', vertical: true },
          { component: 'btn', text: true, itemtext: 'Blog' },
          { component: 'divider', vertical: true },
          { component: 'btn', text: true, itemtext: 'Music' },
          { component: 'divider', vertical: true },
        ]}
      ],
      appBarNavIcon: true
    }
  ]
}