export default {
  items: [
    { component: 'card', class: 'e4', items: [
      { component: 'responsive', style: { value: '_self', func: (e) => `background: rgb(${e.red}, ${e.green}, ${e.blue})`}, height: '300px' },
      { component: 'card-text', items: [
        { component: 'row', items: [
          { component: 'col', cols: 12, items: [
            { component: 'sld', model: 'red', max: 255, label: 'R', class: 'align-center', 
              slots: [
                { component: 'append', items: [
                  { component: 'text-field', model: 'red', class: 'mt-0 pt-0', type: 'number', style: 'width: 60px' }
                ] }
              ]
            }
          ]},
          { component: 'col', cols: 12, items: [
            { component: 'sld', model: 'green', max: 255, label: 'G', class: 'align-center', 
              slots: [
                { component: 'append', items: [
                  { component: 'text-field', model: 'green', class: 'mt-0 pt-0', type: 'number', style: 'width: 60px' }
                ] }
              ]
            }
          ]},
          { component: 'col', cols: 12, items: [
            { component: 'sld', model: 'blue', max: 255, label: 'B', class: 'align-center', 
              slots: [
                { component: 'append', items: [
                  { component: 'text-field', model: 'blue', class: 'mt-0 pt-0', type: 'number', style: 'width: 60px' }
                ] }
              ]
            }
          ]},
        ]}
      ]}
    ]}
  ]
}