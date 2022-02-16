export default {
  items: [
    { component: 'checkbox', model: 'custom', label: 'Custom progress bar' },
    { component: 'text-field', model: 'value', color: 'cyan darken', label: 'Text field', placehoder: 'Start typing...', loading: true,
      slots: [
        { name: 'progress', items: [{ component: 'progress-linear', if: [{target: 'custom', value: 'true'}], value: 'progress', color: 'color', absolute: true, height: 7 }] }
      ]
    }
  ]
}