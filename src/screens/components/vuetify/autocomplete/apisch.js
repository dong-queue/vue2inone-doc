export default {
  items: [
    { component: 'card', color: 'red lighten-2', dark: true,
      items: [
        { component: 'cardTitle', class: 'headline red lighten-3', items:[{ component: 'text', itemtext: 'Search for Public APIs'}] },
        {
          component: 'cardText', items: [ { component: 'text', itemtext: 
            `Explore hundreds of free API's ready for consumption! For more information visit
            <a
              class="grey--text text--lighten-3"
              href="https://github.com/toddmotto/public-apis"
              target="_blank"
            >the Github repository</a>.`
          }]
        },
        {
          component: 'autocomplete', class: 'px-1', model: 'model1', items: 'items1', loading: 'isLoading',
          color: 'white', hideNoData: true, hideSelected: true,
          itemText: 'Description', itemValue: 'API', label: 'Public APIs', placeholder: 'Start typing to Search',
          prependIcon: 'mdi-database-search', returnObject: true,
          evnts: [
            { event: 'update:search-input', method: 'changeSearch' }
          ]
        },
        { component: 'divider', if: [{ target: 'model1' }] },
        {
          component: 'list', if: [{ target: 'model1' }], class: 'red lighten-3',
          itemsfor: 'fields', subItemName: 'field',
          items: [
            { component: 'listItem', items: [
              { component: 'listItemContent', items: [
                { component: 'listItemTitle', itemtext: 'field.value' },
                { component: 'listItemSubtitle', itemtext: 'field.key' }
              ]}
            ]}
          ]
        },
        { component: 'card-actions', items: [
          { component: 'spacer' },
          { component: 'btn', disabled: 'disableBtn', color: 'grey darken-3',
            evnts: [{ event: 'click', method: 'clearModel' }],
            items: [
              { component: 'text', itemtext: 'Clear' },
              { component: 'icon', right: true, name: 'mdi-close-circle' }
            ]
          }
        ]}
      ]
    }
  ]
}