export default {
  items: [
    { component: 'com', model: 'model', items: 'items', hideSelected: true, hint: 'Maximum of 5 tags', label: 'Add some tags',
      multiple: true, persistentHint: true, 'small-chips': true,
      evnts: [{ event: 'update:search-input', method: 'changeSearch'}],
      slots: [
        { name: 'no-data', items: [
          { component: 'listItem', items: [
            { component: 'listItemContent', items: [
              { component: 'listItemTitle', itemtext: { value: 'search', func: (search) => `No results matching "<strong>${search}</strong>". Press <kbd>enter</kbd> to create a new one` }}
            ]}
          ]}
        ]}
      ]
    }
  ]
}