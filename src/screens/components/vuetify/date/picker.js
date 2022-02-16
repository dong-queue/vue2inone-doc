export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, class: 'my-2 px-1', items: [
        { component: 'date-picker', ref: 'picker', model: 'date', fullWidth: true, evnts: [{ event: 'update:picker-date', method: 'updatePickerDate'}] }
      ]},
      { component: 'col', cols: 12, sm: 6, class: 'my-2 px-1', items: [
        { component: 'div', class: 'title', itemtext: {value: 'pickerDate', func: e => `Month news (${e || 'change month...'})`}},
        { component: 'div', class: 'subheading', itemtext: 'Change month to see other news' },
        { component: 'div', class: 'ma-4', itemsfor: 'notes', items: [
          { component: 'text', itemtext: {value: 'subItem', func: e => `<li>${e}</li>`}}
        ]}
      ]}
    ]}
  ]
}