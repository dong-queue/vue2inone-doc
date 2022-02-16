export default {
  items: [
    {
      component: 'toolbar',
      prominent: true, extended: true,
      appBarNavIcon: true,
      title: { itemtext: 'Title', class: 'headline' },
      items: [
        { component: 'spacer' },
        {
          component: 'btn', icon: true,
          items: [
            { component: 'icon', name: 'mdi-magnify' }
          ]
        },
        {
          component: 'btn', icon: true,
          items: [
            { component: 'icon', name: 'mdi-heart' }
          ] 
        },
        {
          component: 'btn', icon: true,
          items: [
            { component: 'icon', name: 'mdi-dots-vertical' }
          ] 
        }
      ]
    }
  ]
}