const divStyle = 'border-raius: 4px; min-height: 36px;'

export default {
  items: [
    { component: 'row', framework: 'el', class: 'mx-1 my-3', gutter: 10, items: [
      { component: 'col', framework: 'el', xs: 8, sm: 6, md: 4, lg: 3, xl: 1, items: [
        { component: 'card', style: divStyle, elevation: 0, color: 'blue-grey lighten-4' }
      ]},
      { component: 'col', framework: 'el', xs: 4, sm: 6, md: 8, lg: 9, xl: 11, items: [
        { component: 'card', style: divStyle, elevation: 0, color: 'blue-grey lighten-5' }
      ]},
      { component: 'col', framework: 'el', xs: 4, sm: 6, md: 8, lg: 9, xl: 11, items: [
        { component: 'card', style: divStyle, elevation: 0, color: 'blue-grey lighten-4' }
      ]},
      { component: 'col', framework: 'el', xs: 8, sm: 6, md: 4, lg: 3, xl: 1, items: [
        { component: 'card', style: divStyle, elevation: 0, color: 'blue-grey lighten-4' }
      ]}
    ]}
  ]
}

