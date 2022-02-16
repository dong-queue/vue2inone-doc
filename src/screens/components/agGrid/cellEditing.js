const editBtns = [
  { component: 'btn', small: true, itemtext: 'edit (0)', evnts: [{ event: 'click', value: [null], method: 'onBtStartEditing' }] },
  { component: 'btn', small: true, itemtext: 'edit (0, Delete)', evnts: [{ event: 'click', value: [46], method: 'onBtStartEditing' }] },
  { component: 'btn', small: true, itemtext: `edit (0, 'T')`, evnts: [{ event: 'click', value: [null, 'T'], method: 'onBtStartEditing' }] },
  { component: 'btn', small: true, itemtext: 'edit (0, Top)', evnts: [{ event: 'click', value: [null, null, 'top'], method: 'onBtStartEditing' }] },
  { component: 'btn', small: true, itemtext: 'edit (0, Bottom)', evnts: [{ event: 'click', value: [null, null, 'bottom'], method: 'onBtStartEditing' }] }
]
const etcBtns = [
  { component: 'btn', small: true, itemtext: 'stop ()', evnts: [{ event: 'click', method: 'onBtStopEditing' }] },
  { component: 'btn', small: true, itemtext: 'next ()', evnts: [{ event: 'click', method: 'onBtNextCell' }] },
  { component: 'btn', small: true, itemtext: 'previous ()', evnts: [{ event: 'click', method: 'onBtPreviousCell' }] },
  { component: 'spacer' },
  { component: 'btn', small: true, itemtext: 'which ()', evnts: [{ event: 'click', method: 'onBtWhich' }] }
]


export default {
  items: [
    {
      component: 'container', items: [
        { component: 'row', class: 'ma-2', justify: 'space-between',
          items: [
            { component: 'row', class: 'ma-2', items: editBtns }, 
            { component: 'row', class: 'ma-2', items: etcBtns }
          ] 
        },
        {
          component: 'agGrid', style: 'width :100%; height: 300px;',
          evnts: [{ event: 'gridReady', method: 'onGridReady' }],
          gridOptions: 'gridOptions', columnDefs: 'columnDefs', rowData: 'rowData',
          defaultColDef: 'defaultColDef', pinnedTopRowData: 'pinnedTopRowData', pinnedBottomRowData: 'pinnedBottomRowData'
        }
      ]
    }
  ]
}
