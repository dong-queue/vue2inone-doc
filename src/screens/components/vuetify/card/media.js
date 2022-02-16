export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: 400, items: [
      { component: 'img', class: 'white--text align-end', height: '200px', 
        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', items: [
          { component: 'cardTitle', itemtext: 'Top 10 Australian beaches' }
        ]
      },
      { component: 'card-subtitle', class: 'pb-0', itemtext: 'Number 10' },
      { component: 'cardText', class: 'text--primary', items: [
        { component: 'div', itemtext: 'Whitehaven Beach' },
        { component: 'div', itemtext: 'Whitsunday Island, Whitsunday Islands' }
      ]},
      { component: 'cardActions', items: [
        { component: 'btn', color: 'orange', text: true, itemtext: 'Share' },
        { component: 'btn', color: 'orange', text: true, itemtext: 'Explore' },
      ]}
    ]}
  ]
}