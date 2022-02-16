export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'password', appendIcon: {value: 'show1', func: e => e ? 'mdi-eye' : 'mdi-eye-off'},
          rules: ['rules.required', 'rules.min'], type: {value: 'show1', func: e => e ? 'text' : 'password' }, name: 'input-10-1',
          label: 'Normal with hint text', hint: 'At least 8 characters', counter: true,
          evnts: [{ event: 'click:append', value: '1', method: 'changeShow'}]
        }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'password', appendIcon: {value: 'show2', func: e => e ? 'mdi-eye' : 'mdi-eye-off'},
          rules: ['rules.required', 'rules.min'], type: {value: 'show2', func: e => e ? 'text' : 'password' }, name: 'input-10-2',
          label: 'Visible', hint: 'At least 8 characters', value: 'wqfasds', class: 'input-group--focused',
          evnts: [{ event: 'click:append', value: '2', method: 'changeShow'}]
        }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'password', appendIcon: {value: 'show3', func: e => e ? 'mdi-eye' : 'mdi-eye-off'},
          rules: ['rules.required', 'rules.min'], type: {value: 'show3', func: e => e ? 'text' : 'password' }, name: 'input-10-2',
          label: 'Not visible', hint: 'At least 8 characters', value: 'wqfasds', class: 'input-group--focused',
          evnts: [{ event: 'click:append', value: '3', method: 'changeShow'}]
        }
      ]},
      { component: 'col', cols: 12, sm: 6, items: [
        { component: 'text-field', model: 'password', appendIcon: {value: 'show4', func: e => e ? 'mdi-eye' : 'mdi-eye-off'},
          rules: ['rules.required', 'rules.emailMatch'], type: {value: 'show4', func: e => e ? 'text' : 'password' }, name: 'input-10-2',
          label: 'Error', hint: 'At least 8 characters', value: 'pa', error: true,
          evnts: [{ event: 'click:append', value: '4', method: 'changeShow'}]
        }
      ]},
    ]}
  ]
}