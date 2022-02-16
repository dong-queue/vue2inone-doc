export default {
  items: [
    { component: 'radioGroup', model: 'radios', 
      slots: [
        { name: 'label', items: [
          { component: 'text', class: 'text-start', itemtext: 'Your favourite <strong>search engine</strong>' }
        ]},
      ],
      items: [
        { component: 'radio', value: 'Google', 
          slots: [
            { name: 'label', items: [
              { component: 'text', itemtext: `Of course it's<strong class= "success--text" > Google</strong>` }
            ]}
          ]
        },
        { component: 'radio', value: 'Duckduckgo', 
          slots: [
            { name: 'label', items: [
              { component: 'text', itemtext: `Definitely <strong class="primary--text">Duckduckgo</strong>` }
            ]}
          ]
        }
      ]
    }
  ]
}