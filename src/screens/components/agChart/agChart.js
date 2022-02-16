export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Ag Chart', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agChart.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // simple bar
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agChart.simpleBar.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agChart.simpleBar.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-charts/gallery/simple-bar/#example-simple-bar',
      name: 'See code in agChart official document'
    },
    { component: 'code', file: 'components/agChart/simpleBar' },

    // layout
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agChart.layout.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agChart.layout.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-charts/layout/#example-basic-column',
      name: 'See code in agChart official document'
    },
    { component: 'code', file: 'components/agChart/layout' },

    // legend
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agChart.legend.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agChart.legend.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-charts/legend/#example-legend-position',
      name: 'See code in agChart official document'
    },
    { component: 'code', file: 'components/agChart/legend' },

    // node click
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agChart.click.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agChart.click.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-charts/events/#example-node-click-event',
      name: 'See code in agChart official document'
    },
    { component: 'code', file: 'components/agChart/click' }
  ]
}