export default {
  data() {
    return {
      items: [
        { value: 'Grocery delivery', label: 'Your product or service', hint: 'For example, flowers or used cars' },
        { value: '', label: 'Your landing page', hint: 'www.example.com/page', persistentHint: true },
        { value: 'Grocery delivery', label: 'Your product or service', hint: 'For example, flowers or used cars', filled: true },
        { value: '', label: 'Your landing page', hint: 'www.example.com/page', persistentHint: true, filled: true },
        { value: 'Grocery delivery', label: 'Your product or service', hint: 'For example, flowers or used cars', outlined: true },
        { value: '', label: 'Your landing page', hint: 'www.example.com/page', persistentHint: true, outlined: true },
      ]
    }
  }
}