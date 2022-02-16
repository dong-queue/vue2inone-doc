export default {
  items: [
    { component: 'toolbar', dark: true, color: 'teal', 
      title: { itemtext: 'State selection' },
      items: [
        {
          component: 'autocomplete', loading: 'loading1', items: 'items', 
          casheItems: true, class: 'mx-4',
          flat: true, hideNoData: true, hideDetails: true, label: 'What state are you from?', soloInverted: true,
          evnts: [
            { event: 'update:search-input', method: 'changeSearch' }
          ]
        },
        { component: 'btn', icon: true, items: [
            {component: 'icon', name: 'mdi-dots-vertical'}
          ]
        }
      ]
    }
  ]
}