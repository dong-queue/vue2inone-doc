export default {
  items: [
    {
      component: 'toolbar', elevation: 2, 
      color: 'grey', 
      class: 'mt-0', 
      title: { itemtext: 'complex', class: 'white--text' },
      items: [
        { component: 'btn', itemtext: 'Button', text: true,
          evnts: [
            { event: 'click', method: 'click' }
          ],
        },
        { component: 'spacer' },
        { component: 'textfield', model: 'bar.text', singleLine: true, hideDetails: true, class: 'mx-2' },
        { component: 'autocomplete', items: 'bar.autocompleteItems', model: 'bar.item', singleLine: true, hideDetails: true, 
          evnts: [
            { event: 'change', method: 'dataChanged' }
          ]
        },
        {
          component: 'btn', icon: true, size: 'sm', outlined: true, 
          evnts: [
            { event: 'click', method: 'click' }
          ],
          items: [
            { component: 'icon', name: 'mdi-content-save' }
          ]
        }
      ]
    }
  ]
}