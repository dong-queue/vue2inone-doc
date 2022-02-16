export default {
  items: [
    { component: 'card', class: 'overflow-hidden', color: 'purple lighten-1', dark: true, items: [
      {
        component: 'toolbar', flat: true, color: 'purple',
        items: [
          { component: 'icon', name: 'mdi-account' },
          { component: 'text', class: 'ont-weight-light', itemtext: 'User Profile' },
          { component: 'spacer' },
          {
            component: 'btn', color: 'purple darken-3', fab: true, size: 'sm',
            evnts: [
              { event: 'click', method: 'changeEdit' }
            ],
            items: [
              { component: 'icon', color: 'white', name: 'iconName' }
            ]
          }
        ]
      },
      { component: 'cardText', items: [
        { component: 'textfield', class: 'ma-1', disabled: 'autocomplete.isDisabled', model: 'autocomplete.value2', color: 'white', label: 'Name' },
        {
          component: 'autocomplete', class: 'ma-1', disabled: 'autocomplete.isDisabled', model: 'autocomplete.value3',
          items: 'autocomplete.items3', color: 'white', label: 'State', itemText: 'name', filter: customFilter,
        },
      ]},
      { component: 'divider' },
      { component: 'cardActions', items: [
        { component: 'spacer' },
        {
          component: 'btn', itemtext: 'Save', disabled: 'autocomplete.isDisabled', color: 'success',
          evnts: [
            { event: 'click', method: 'click' }
          ]
        }
      ]}
    ]}
  ]
}
function customFilter (item, queryText) {
  // console.log(this)
  const textOne = item.name.toLowerCase()
  const textTwo = item.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.indexOf(searchText) > -1 ||
    textTwo.indexOf(searchText) > -1
}