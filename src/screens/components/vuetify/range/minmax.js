export default {
  items: [
    { component: 'card', flat: true, color: 'transparent', items: [
      { component: 'subheader', itemtext: 'Min and Max range slider' },
      { component: 'cardText', items: [
        { component: 'row',  items: [
          { component: 'col', class: 'px-4', items: [
            { component: 'rangeSlider', model: 'range', max: 'max', min: 'min', hideDetails: true, class: 'align-center', 
              slots: [
                { name: 'prepend', items: [
                  { component: 'textfield', value: 'value1', class: 'mt-0 pt-0', hideDetails: true, singleLine: true, 
                    type: 'number', style: 'width: 60px', evnts: [{event: 'change', method: 'setValue1'}]
                  }
                ]},
                { name: 'append', items: [
                  { component: 'textfield', value: 'value2', class: 'mt-0 pt-0', hideDetails: true, singleLine: true, 
                    type: 'number', style: 'width: 60px', evnts: [{event: 'change', method: 'setValue2'}]
                  }
                ]}
              ]
            }
          ]}
        ]}
      ]}
    ]}
  ]
}