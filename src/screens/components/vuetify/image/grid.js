export default {
  items: [
    { component: 'row', itemsfor: 9, items: [
      { component: 'col', class: 'd-flex child-flex', cols: 4, items: [
        { component: 'img', src: { value: 'subItem', func: e => `https://picsum.photos/500/300?image=${e * 5 + 10}`},
          lazySrc: { value: 'subItem', func: e => `https://picsum.photos/500/300?image=${e * 5 + 10}` }, aspectRatio: 1, 
          class: 'grey lighten-2', slots: [{name: 'placeholder', items: [
            { component: 'row', class: 'fill-height ma-0', align: 'center', justify: 'center', items: [
              { component: 'progress-circular', indeterminate: true, color: 'grey lighten-5' }
            ]}
          ]}]
        }
      ]}
    ]}
  ]
}