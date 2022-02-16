export default {
  items: [
    { component: 'card', items: [
      { component: 'cardTitle', class: 'headline font-weight-regular blue-grey white--text', itemtext: 'Profile' },
      { component: 'cardText', items: [
        { component: 'subheader', class: 'pa-0', itemtext: 'Where do you live?' },
        {
          component: 'autocomplete', model: 'model', hint: 'hint', items: 'states', readonly: 'isReadonly',
          label: 'label', presistentHint: true, prependIcon: 'mdi-city',
          slots: [
            { name: 'append-outer', items: [
              { component: 'icon', color: 'appendOuterIconColor', name: 'appendOuterIcon',
                evnts: [{ event: 'click', method: 'clickIcon' }]
              }]
            }
          ]
        }
      ]}
    ]}
  ]
}