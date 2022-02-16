export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'btn', color: 'primary', dark: true, itemtext: 'Open Dialog', 
        evnts: [{ event: 'click', method: 'changeDialog', value: true }]
      },
      { component: 'dialog', model: 'dialog', persistent: true, maxWidth: '600px', items: [
        { component: 'card', items: [
          { component: 'cardTitle', items: [
            { component: 'text', class: 'headline', itemtext: 'User Profile' }
          ]},
          { component: 'cardText', items: [
            { component: 'row', items: [
              { component: 'col', cols: '12', sm: '6', md: '4', items: [
                { component: 'textfield', label: 'Legal first name*', required: true }
              ]},
              { component: 'col', cols: 12, sm: 6, md: 4, items: [
                { component: 'textfield', label: 'Legal middle name', hint: 'example of helper text only on focus' }
              ]},
              { component: 'col', cols: 12, sm: 6, md: 4, items: [
                { component: 'textfield', label: 'Legal last name*', hint: 'example of persistent helper text',
                  persistentHint: true, required: true
                }
              ]},
              { component: 'col', cols: 12, items: [
                { component: 'textfield', label: 'Email*', required: true }
              ]},
              { component: 'col', cols: 12, items: [
                { component: 'textfield', label: 'Password*', type: 'password', required: true }
              ]},
              { component: 'col', cols: 12, sm: 6, items: [
                { component: 'select', items: ['0-17', '18 - 29', '30 - 54', '54 +'], label: 'Age*', required: true }
              ]},
              { component: 'col', cols: 12, sm: 6, items: [
                { component: 'autocomplete', items: ['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump'],
                  label: 'Interest', multiple: true
                }
              ]}
            ]},
            { component: 'text', itemtext: '*indicates required field' }
          ]},
          { component: 'cardActions', items: [
            { component: 'spacer' },
            { component: 'btn', color: 'blue darken-1', text: true, evnts: [{event: 'click', method: 'changeDialog', value: false}], itemtext: 'Close' },
            { component: 'btn', color: 'blue darken-1', text: true, evnts: [{ event: 'click', method: 'changeDialog', value: false }], itemtext: 'Save' },
          ]}
        ]}
      ]}
    ]}
  ]
}