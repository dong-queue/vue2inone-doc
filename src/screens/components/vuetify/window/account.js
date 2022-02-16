export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: 500, items: [
      { component: 'card-title', class: 'title font-weight-regular justify-space-between', items: [
        { component: 'text', itemtext: 'currentTitle' },
        { component: 'avatar', color: 'primary lighten-2', class: 'subheading white--text', size: 24, itemtext: 'step' }
      ]},
      { component: 'window', model: 'step', items: [
        {
          component: 'window-item', eager: true, value: 1, items: [
          { component: 'card-text', items: [
            { component: 'text-field', label: 'Email', value: 'john@vuetify.com' },
            { component: 'text', class: 'caption grey--text text--darken-1', itemtext: 'This is the email you will use to login to your Vuetify account' }
          ]}
        ]},
        {
          component: 'window-item', eager: true, value: 2, items: [
          { component: 'card-text', items: [
            { component: 'text-field', label: 'Password', type: 'password' },
            { component: 'text-field', label: 'Confirm Password', type: 'password' },
            { component: 'text', class: 'caption grey--text text--darken-1', itemtext: 'Please enter a password for your account' }
          ]}
        ]},
        {
          component: 'window-item', eager: true, value: 3, items: [
          { component: 'div', class: 'pa-4 text-center', items: [
            { component: 'img', class: 'mb-4', contain: true, height: 128, src: 'https://cdn.vuetifyjs.com/images/logos/v.svg' },
            { component: 'div', class: 'title font-weight-light mb-2', itemtext: 'Welcome to Vuetify' },
            { component: 'text', class: 'caption grey--text', itemtext: 'Thanks for signing up!' }
          ]}
        ]}
      ]},
      { component: 'divider' },
      { component: 'card-actions', items: [
        { component: 'btn', disabled: {value: 'step', func: e => e === 1}, text: true, itemtext: 'Back',
          evnts: [{ event: 'click', value: '-', method: 'moveStep'}]
        },
        { component: 'spacer' },
        { component: 'btn', disabled: {value: 'step', func: e => e=== 3}, color: 'primary', depressed: true, itemtext: 'Next', 
          evnts: [{ event: 'click', value: '+', method: 'moveStep'} ]
        }
      ]}
    ]}
  ]
}