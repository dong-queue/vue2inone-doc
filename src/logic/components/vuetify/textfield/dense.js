export default {
  data () {
    return {
      items: [
        { label: 'Regular', filled: false, placeholder: '', solo: false, outlined: false, rounded: false, dense: true,  },
        { label: 'Filled', filled: true, placeholder: '', solo: false, outlined: false, rounded: false, dense: true },
        { label: 'Filled', filled: true, placeholder: 'Dense & Rounded', solo: false, outlined: false, rounded: true, dense: true },
        { label: 'Solo', filled: false, placeholder: '', solo: true, outlined: false, rounded: false, dense: true },
        { label: 'Outlined', filled: false, placeholder: '', solo: false, outlined: true, rounded: false, desne: true },
        { label: 'Outlined', filled: false, placeholder: 'Placeholder', solo: false, outlined: true, rounded: false, dense: true}
      ]
    }
  }
}