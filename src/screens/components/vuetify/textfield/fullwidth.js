export default {
  items: [
    { component: 'autocomplete', model: 'selected', items: ['Trevor Handsen', 'Alex Nelson'], chips: true, label:  'To', 
      fullWidth: true, hideDetails: true, hideNoData: true, hideSelected: true, multiple: true, singleLine: true
    },
    { component: 'divider' },
    { component: 'text-field', label: 'Subject', value: 'Plans for the weekend', singleLine: true, fullWidth: true, hideDetails: true },
    { component: 'divider' },
    { component: 'textarea', model: 'title', label: 'Message', counter: true, maxlength: 120, fullWidth: true, singleLine: true }
  ]
}