export default {
  items: [
    { component: 'form', ref: 'form', model: 'valid', lazyValidation: true, items: [
      { component: 'txtfld', model: 'name', couter: '10', rules: ['requiredRule', 'nameRule'], label: 'Name', required: true },
      { component: 'txtfld', model: 'email', rules: ['requiredRule', 'emailRule'], label: 'E-mail', required: true },
      { component: 'select', model: 'select', items: 'items', rules: ['requiredRule'], label: 'Item', required: true },
      { component: 'chk', model: 'checkbox', rules: ['requiredRule'], label: 'Do you agree?', required: true },
      { component: 'btn', disabled: 'isNotValid', color: 'success', class: 'mr-4', itemtext: 'Validate',
        evnts: [{event: 'click', method: 'validate'}]
      },
      { component: 'btn',  color: 'error', class: 'mr-4', itemtext: 'Reset Form',
        evnts: [{event: 'click', method: 'reset'}]
      },
      { component: 'btn', color: 'warning', class: 'mr-4', itemtext: 'Reset Validation',
        evnts: [{event: 'click', method: 'resetValidation'}]
      }
    ]}
  ]
}