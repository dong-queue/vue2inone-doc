export default {
  items: [
    { component: 'row', justify: 'center',
      items: [
        { component: 'chip', textJustify: 'center', class: 'ma-2', label: true, itemtext: 'Label' },
        {
          component: 'chip', textJustify: 'center', class: 'ma-2', label: true, color: 'pink', textColor: 'white', items: [
          { component: 'icon', left: true, name: 'mdi-label' },
          { component: 'text', itemtext: 'Tags' }
        ] },
        {
          component: 'chip', textJustify: 'center', class: 'ma-2', label: true, color: 'primary', items: [
          { component: 'icon', left: true, name: 'mdi-account-circle-outline' },
          { component: 'text', itemtext: 'John Leider' }
        ] },
        {
          component: 'chip', textJustify: 'center', class: 'ma-2', label: true, color: 'cyan', textColor: 'white', items: [
          { component: 'icon', left: true, name: 'mdi-twitter' },
          { component: 'text', itemtext: 'New Tweets' }
        ] },
      ]
    }
  ]
}