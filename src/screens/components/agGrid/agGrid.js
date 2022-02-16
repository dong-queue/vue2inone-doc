export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Ag Grid', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agGrid.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // default
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agGrid.default.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agGrid.default.intro' }
      ]
    },
    { component: 'code', file: 'components/agGrid/default' },

    // fetch remote data
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agGrid.fetchData.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agGrid.fetchData.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-grid/getting-started/#fetch-remote-data-3',
      name: 'See code in agGrid official document'
    },
    { component: 'code', file: 'components/agGrid/fetchData' },

    // enable selection
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agGrid.enableSelection.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agGrid.enableSelection.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-grid/getting-started/#enable-selection-3',
      name: 'See code in agGrid official document'
    },
    { component: 'code', file: 'components/agGrid/enableSelection' },

    // column definition
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agGrid.columnDefinition.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agGrid.columnDefinition.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-grid/column-definitions/#example-column-definition',
      name: 'See code in agGrid official document'
    },
    { component: 'code', file: 'components/agGrid/columnDefinition' },

    // column-ids
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agGrid.columnIds.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agGrid.columnIds.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-grid/column-definitions/#example-column-ids',
      name: 'See code in agGrid official document'
    },
    { component: 'code', file: 'components/agGrid/columnIds' },

    // render
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agGrid.render.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agGrid.render.intro' }
      ]
    },
    { component: 'code', file: 'components/agGrid/render' },

    // cell editing
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agGrid.cellEditing.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agGrid.cellEditing.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-grid/cell-editing/#example-cell-editing',
      name: 'See code in agGrid official document'
    },
    { component: 'code', file: 'components/agGrid/cellEditing' },

    // dynamicEditor
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'agGrid.agGrid.dynamicParameter.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'agGrid.agGrid.dynamicParameter.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://www.ag-grid.com/vue-grid/cell-editing/#example-dynamic-parameters',
      name: 'See code in agGrid official document'
    },
    { component: 'code', file: 'components/agGrid/dynamicParameter' },
  ]
}