export default {
  items: [
    { component: 'checkbox', model: 'checkbox', 
      slots: [
        { name: 'label', items: [
          { component: 'text', itemtext: 'I agree that <a target="_blank" href="http://vuetifyjs.com" @click.stop v-on="on">Vuetify</a> is awesome'}
        ]}
      ]
    }
  ]
}