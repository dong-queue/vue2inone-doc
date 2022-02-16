export default {
  items: [
    { component: 'parallax', dark: true, src: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg', items: [
      { component: 'row', align: 'center', justify: 'center', items: [
        { component: 'col', class: 'text-center', cols: 12, items: [
          {
            component: 'text', itemtext: `<h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
            <h4 class="subheading">Build your application today!</h4>` 
          },
          // { component: 'div', class: 'subheading', itemtext: ' }
        ]}
      ]}
    ]}
  ]
}