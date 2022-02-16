export default {
  items: [
    { component: 'btn', framework: 'el', type: 'primary', icon: 'el-icon-edit' },
    { component: 'btn', framework: 'el', type: 'primary', icon: 'el-icon-share' },
    { component: 'btn', framework: 'el', type: 'primary', icon: 'el-icon-delete' },
    { component: 'btn', framework: 'el', type: 'primary', icon: 'el-icon-search', itemtext: 'Search' },
    { component: 'btn', framework: 'el', type: 'primary', itemtext: 'Upload', items: [
      { component: 'text', html: '<i class="el-icon-upload el-icon-right"></i>'}
    ] },
  ]
}