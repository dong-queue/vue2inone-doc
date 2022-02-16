const divStyle = 'border-raius: 4px; min-height: 36px;'

export default {
  items: [
    { component: 'row', framework: 'el', class: 'mx-1 my-3', gutter: 20, items: [
      { component: 'col', framework: 'el', span: 6, items: [
        { component: 'card', style: divStyle, elevation: 0, color: 'blue-grey lighten-4' }
      ]},
      { component: 'col', framework: 'el', span: 6, offset: 6, items: [
        { component: 'card', style: divStyle, elevation: 0, color: 'blue-grey lighten-4' }
      ]}
    ]},
    { component: 'row', framework: 'el', class: 'mx-1 my-3', gutter: 20, items: [
      { component: 'col', framework: 'el', span: 6, offset: 6, items: [
        { component: 'card', style: divStyle, elevation: 0, color: 'blue-grey lighten-4' }
      ]},
      { component: 'col', framework: 'el', span: 6, offset: 6, items: [
        { component: 'card', style: divStyle, elevation: 0, color: 'blue-grey lighten-4' }
      ]}
    ]},
    { component: 'row', framework: 'el', class: 'mx-1 my-3', gutter: 20, items: [
      { component: 'col', framework: 'el', span: 12, offset: 6, items: [
        { component: 'card', style: divStyle, elevation: 0, color: 'blue-grey lighten-4' }
      ]}
    ]}
  ]
}