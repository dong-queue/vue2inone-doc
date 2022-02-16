export default {
  items: [
    { component: 'file', model: 'files', color: 'deep-purple accent-4', counter: true, label: 'File input', 
      multiple: true, placeholder: 'Select your files', prependIcon: 'mdi-paperclip', outlined: true,
      showSize: 1000, 
      slots: [
        { name: 'selection', type: 'data', slotDataName: 'slot', items: [
          { component: 'chip', if: [{target: 'slot.index', value: (e) => e < 2 }],
            color: 'deep-purple accent-4', dark: true, label: true, small: true, itemtext: 'slot.text'
          },
          { 
            component: 'text', if: [{target: 'slot.index', value: '2'}], class: 'overline grey--text text--darken-3 mx-2', 
            itemtext: {value: 'files', func: (e) => String().concat('+', e.length -2, 'File(s)')}
          }
        ]}
      ]
    }
  ]
}