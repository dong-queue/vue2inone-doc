export default {
  data () {
    return {
      items: [
        { value: 'John Doe', label: 'Regular', disabled: true },
        { value: 'John Doe', label: 'Regular', readonly: true },
        { value: 'John Doe', label: 'Solo', solo: true, disabled: true },
        { value: 'John Doe', label: 'Solo', solo: true, readonly: true },
        { value: 'John Doe', label: 'Filled', filled: true, disabled: true },
        { value: 'John Doe', label: 'Filled', filled: true, readonly: true },
        { value: 'John Doe', label: 'Outlined', outlined: true, disabled: true },
        { value: 'John Doe', label: 'Outlined', outlined: true, readonly: true },
      ]
    }
  }
}