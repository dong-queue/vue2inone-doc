export default {
  items: [
    { component: 'link', framework: 'el', icon: 'el-icon-edit', itemtext: 'Edit' },
    { component: 'link', framework: 'el', itemtext: 'Check', items: [
      { component: 'text', html: '<i class="el-icon-view el-icon--right"></i>' }
    ]}
  ]
}