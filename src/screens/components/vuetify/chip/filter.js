export default {
  items: [
    { component: 'row', 
      justify: 'space-around', align: 'center',
      items: [
        { component: 'chip', class: 'ma-2', inputValue: 'active', filter: true, itemtext: `I'm chip` },
        { component: 'chip', class: 'ma-2', inputValue: 'active', filter: true, filterIcon: 'mdi-plus', itemtext: `I'm chip` },
        { component: 'chip', class: 'ma-2', inputValue: 'active', filter: true, filterIcon: 'mdi-minus', itemtext: `I'm chip` },
        { component: 'switch', model: 'active', label: 'Active'}
      ]  
    }
  ]
}