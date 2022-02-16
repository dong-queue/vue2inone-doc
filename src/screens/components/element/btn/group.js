export default {
  items: [
    { component: 'button-group', framework: 'el', items: [
      { component: 'btn', framework: 'el', type: 'primary', icon: 'el-icon-arrow-left', itemtext: 'Previous Page' },
      { component: 'btn', framework: 'el', type: 'primary', itemtext: 'Next Page', items: [
        { component: 'text', html: '<i class="el-icon-arrow-right el-icon-right"></i>' }
      ]}
    ]},
    { component: 'button-group', framework: 'el', items: [
      { component: 'btn', framework: 'el', type: 'primary', icon: 'el-icon-edit' },
      { component: 'btn', framework: 'el', type: 'primary', icon: 'el-icon-share' },
      { component: 'btn', framework: 'el', type: 'primary', icon: 'el-icon-delete' },
    ]}
  ]
}