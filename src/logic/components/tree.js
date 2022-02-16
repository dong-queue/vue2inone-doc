export default {
  data: () => ({
    tree: {
      items: [
        {
          id: 1, name: 'parent', value: 'parentValue',
          prepend: { itemtext: '[prepend]' },
          children: [
            {
              id: 2, name: 'child1', value: 'childValue1', append: [],
              children: [
                { id: 3, name: 'child1-child', value: 'child1childValue', append: [] }
              ]
            },
            { id: 4, name: '[prepend] child2', value: 'childValue2', append: [] },
          ],
          append: [
            { type: 'btn', click: 'clickTreeItem', clickTarget: 'self', icon: 'mdi-check' }
          ]
        }
      ],
      item: ''
    }
  }),
  methods: {
    getTreeItem(node) {
      // console.log(node[0])
      if (typeof (node[0]) !== 'undefined') this.tree.item = node[0].value
    },
    clickTreeItem(value) {
      this.$message({ type: 'warning', showClose: true, message: String('click tree item: ').concat(': ', value) })
    },
  }
}