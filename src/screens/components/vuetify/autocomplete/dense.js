export default {
  items: [
    {
      component: 'autocomplete', model: 'autocomplete.values', items: 'autocomplete.items1',
      outlined: true, chips: true, smallChips: true, multiple: true,
      dense: true, label: 'Outlined'
    },
    {
      component: 'autocomplete', model: 'autocomplete.values', items: 'autocomplete.items1',
      chips: true, smallChips: true, multiple: true, solo: true,
      dense: true, label: 'Solo'
    },
    {
      component: 'autocomplete', model: 'autocomplete.value', items: 'autocomplete.items1',
      filled: true, dense: true, label: 'Filled'
    }
  ]
}