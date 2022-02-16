export default {
  items: [
    { component: 'row', framework: 'element', class: 'mb-3', items: [
      { component: 'btn', framework: 'el', type: 'primary', itemtext: 'Primary' },
      { component: 'btn', framework: 'el', type: 'success', itemtext: 'Success' },
      { component: 'btn' ,framework: 'el', type: 'info', itemtext: 'Info' },
      { component: 'btn', framework: 'el', type: 'warning', itemtext: 'Warning' },
      { component: 'btn', framework: 'el', type: 'danger', itemtext: 'Danger' }
    ]},
    {
      component: 'row', framework: 'el', class: 'mb-3', items: [
      { component: 'btn', framework: 'el', plain: true, itemtext: 'Plain' },
      { component: 'btn', framework: 'el', type: 'primary', plain: true, itemtext: 'Primary' },
      { component: 'btn', framework: 'el', type: 'success', plain: true, itemtext: 'Success' },
      { component: 'btn', framework: 'el', type: 'info', plain: true, itemtext: 'Info' },
      { component: 'btn', framework: 'el', type: 'warning', plain: true, itemtext: 'Warning' },
      { component: 'btn', framework: 'el', type: 'danger', plain: true, itemtext: 'Danger' }
    ]},
    {
      component: 'row', framework: 'el', class: 'mb-3', items: [
      { component: 'btn', framework: 'el', round: true, itemtext: 'Round' },
      { component: 'btn', framework: 'el', type: 'primary', round: true, itemtext: 'Primary' },
      { component: 'btn', framework: 'el', type: 'success', round: true, itemtext: 'Success' },
      { component: 'btn', framework: 'el', type: 'info', round: true, itemtext: 'Info' },
      { component: 'btn', framework: 'el', type: 'warning', round: true, itemtext: 'Warning' },
      { component: 'btn', framework: 'el', type: 'danger', round: true, itemtext: 'Danger' }
    ]},
    {
      component: 'row', framework: 'el', class: 'mb-3', items: [
      { component: 'btn', framework: 'el', circle: true, icon: 'el-icon-search' },
      { component: 'btn', framework: 'el', type: 'primary', circle: true, icon: 'el-icon-edit' },
      { component: 'btn', framework: 'el', type: 'success', circle: true, icon: 'el-icon-check' },
      { component: 'btn', framework: 'el', type: 'info', circle: true, icon: 'el-icon-message' },
      { component: 'btn', framework: 'el', type: 'warning', circle: true, icon: 'el-icon-star-off' },
      { component: 'btn', framework: 'el', type: 'danger', circle: true, icon: 'el-icon-delete' }
    ]}
  ]
}