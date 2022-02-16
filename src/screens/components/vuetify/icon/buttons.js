export default {
  items: [
    { component: 'div', class: 'text-center', items: [
      { component: 'div', items: [
        { component: 'btn', class: 'ma-2', color: 'primary', dark: true , itemtext: 'Accept', items: [
          { component: 'icon', dark: true, right: true, name: 'mdi-checkbox-marked-circle' }
        ]},
        { component: 'btn', class: 'ma-2', color: 'red', dark: true , itemtext: 'Decline', items: [
          { component: 'icon', dark: true, right: true, name: 'mdi-cancel' }
        ]},
        { component: 'btn', class: 'ma-2', dark: true , items: [
          { component: 'icon', dark: true, left: true, name: 'mdi-minus-circle' }
        ], itemtext: 'Cancel' }
      ]},
      { component: 'div', items: [
        { component: 'btn', class: 'ma-2', color: 'orange darken-2', dark: true, items: [
          { component: 'icon', dark: true, left: true, name: 'mdi-arrow-left'}
        ], itemtext: 'Back' },
        { component: 'btn', class: 'ma-2', color: 'purple', dark: true, items: [
          { component: 'icon', dark: true, name: 'mdi-wrench' }
        ]},
        { component: 'btn', class: 'ma-2', color: 'indigo', dark: true, items: [
          { component: 'icon', dark: true, name: 'mdi-cloud-upload' }
        ]}
      ]},
      { component: 'div', items: [
        { component: 'btn', class: 'ma-2', text: true, icon: true, color: 'blue lighten-2', items: [{ component: 'icon', name: 'mdi-thumb-up'}] },
        { component: 'btn', class: 'ma-2', text: true, icon: true, color: 'red lighten-2', items: [{ component: 'icon', name: 'mdi-thumb-down'}] }
      ]}
    ]}
  ]
}
