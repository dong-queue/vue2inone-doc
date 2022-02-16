export default {
  items: [
    { component: 'bread', items: 'items', 
      slots: [{ name: 'divider', items: [{component: 'icon', name: 'mdi-forward'}]}]
    },
    { component: 'bread', items: 'items',
      slots: [{ name: 'divider', items: [{ component: 'icon', name: 'mdi-chevron-right' }] }]  
    }
  ]
}