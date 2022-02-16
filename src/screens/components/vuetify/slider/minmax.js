export default {
  items: [
    { component: 'crd', flat: true, color: 'transparent', items: [
      { component: 'subhdr', itemtext: 'Min and max default slider' },
      { component: 'crdtxt', items: [
        { component: 'row', items: [
          { component: 'col', cols: 12, class: 'pr-4', items: [
            { component: 'sld', model: 'slider', class: 'align-center', 
              max: 'max', 
              // min: 'min', 
              'hide-details': true,
              slots: [
                { name: 'append', items: [
                  { component: 'text-field', model: 'slider', class: 'mt-0 pt-0', 'hide-details': true, 'single-line': true, type: 'number', style: 'width: 60px'}
                ]}
              ]
            }
          ]}
        ]}
      ]}
    ]}
  ]
}