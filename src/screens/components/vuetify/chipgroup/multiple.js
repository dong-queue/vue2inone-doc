export default {
  items: [
    { component: 'row', justify: 'space-around', items: [
      { component: 'col', cols: 12, sm: 10, md: 8, items: [
        { component: 'sheet', elevation: 10, class: 'py-4 px-1', items: [
          { component: 'chip-group', multiple: true, activeClass: 'primary--text', itemsfor: 'tags', items: [
            { component: 'chip', itemtext: 'subItem' }
          ]}
        ]}
      ]}
    ]}
  ]
}