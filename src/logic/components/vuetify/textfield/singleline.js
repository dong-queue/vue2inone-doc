export default {
  data() {
    return {
      items: [
        {
          col: [
            { label: 'Regular', 'single-line': true },
          ], cols: 12, sm: 6
        },
        {
          col: [
            { label: 'Solo', 'single-line': true, solo: true }
          ], cols: 12, sm: 6
        },
        {
          col: [
            { label: 'Filled', singleLine: true, filled: true },
          ], cols: 12, sm: 6
        },
        {
          col: [
            { label: 'Outlined', singleLine: true, outlined: true },
          ], cols: 12, sm: 6
        }
      ]
    }
  }
}