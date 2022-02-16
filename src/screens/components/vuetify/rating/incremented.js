export default {
  items: [
    { component: 'card', class: 'elevation-16 mx-auto', width: 300, items: [
      { component: 'card-title', class: 'headline', itemtext: 'Rate Our Framework' },
      { component: 'card-text', itemtext: 'If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!', items: [
        { component: 'div', class: 'text-center mt-12', items: [
          { component: 'rating', model: 'rating', color: 'yellow darken-3', backgroundColor: 'grey darken-1', 
            emptyIcon: '$ratingFull', halfIncrements: true, hover: true, large: true
          }
        ]}
      ] },
      { component: 'divider' },
      { component: 'card-actions', class: 'justify-space-between', items: [
        { component: 'btn', text: true, itemtext: 'No Thanks' },
        { component: 'btn', color: 'primary', text: true, itemtext: 'Rate Now' }
      ]}
    ]}
  ]
}