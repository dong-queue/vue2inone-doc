export default {
  items: [
    { component: 'card', class: 'mx-auto', style: 'max-width: 500px;', items: [
      { component: 'toolbar', color: 'deep-purple accent-4', cards: true, dark: true, flat: true, items: [
        { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-arrow-left' }]},
        { component: 'card-title', class: 'title font-weight-regular', itemtext: 'Sign up' },
        { component: 'spacer' },
        { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-magnify' }]},
        { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-dots-vertical' }] },
      ]},
      { component: 'form', ref: 'form', model: 'form', class: 'pa-4 pt-6', items: [
        { component: 'text-field', model: 'pwd', rules: [ 'rules.password', 'rules.length' ], filled: true, 
          color: 'deep-purple', counter: 6, label: 'Password', style: 'min-height: 96px', type: 'password'
        },
        { component: 'text-field', model: 'phone', filled: true, color: 'deep-purple', label: 'Phone number' },
        { component: 'text-field', model: 'mail', rules: ['rules.email'], filled: true, 
          color: 'deep-purple', label: 'Email address', type: 'email' },
        { component: 'texta', model: 'bio', autoGrow: true, filled: true, color: 'deep-purple', label: 'Bio', rows: 1 },
        { component: 'checkbox', model: 'agreement', rules: ['rules.required'], color: 'deep-purple', 
          slots: [
            {name: 'label', items: [
              { component: 'row', items: [
                { component: 'text', itemtext: `&nbsp;I agree to the&nbsp;` },
                { component: 'text', class: 'blue--text text-decoration-underline', itemtext: 'Terms of Service', evnts: [{event: 'click', method: 'openDialog'}] },
                { component: 'text', itemtext: '&nbsp;and&nbsp;' },
                { component: 'text', class: 'blue--text text-decoration-underline', itemtext: 'Privacy Policy', evnts: [{ event: 'click', method: 'openDialog' }] },
              ]}
            ]}
          ]
        }
      ]},
      { component: 'divider' },
      { component: 'card-actions', items: [
        { component: 'btn', text: true, evnts: [{event: 'click', method: 'reset' }], itemtext: 'Clear' },
        { component: 'spacer' },
        { component: 'btn', disabled: {value: 'form', func: (e) => !e}, loading: 'isLoading', 
          class: 'white--text', color: 'deep-purple accent-4', depressed: true, itemtext: 'Submit'
        }
      ]},
      { component: 'dialog', model: 'dialog', absolute: true, maxWidth: 400, persistent: true, items: [
        { component: 'card', items: [
          { component: 'card-title', class: 'headline grey lighten-3', itemtext: 'Legal' },
          { component: 'card-text', itemtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
          { component: 'divider' },
          { component: 'card-actions', items: [
            { component: 'btn', text: true, evnts: [{event: 'click', method: 'closeDialog', value: false}], 
              itemtext: 'No' },
            { component: 'spacer' },
            { component: 'btn', class: 'white--text', color: 'deep-purple accent-4', 
              evnts: [{event: 'click', method: 'closeDialog', value: true}], itemtext: 'Yes' }
          ]}
        ]}
      ]}
    ]}
  ]
}