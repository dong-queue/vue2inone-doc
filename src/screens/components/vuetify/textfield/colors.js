export default {
  items: [
    { component: 'card', flat: true, items: [
      { component: 'snackbar', model: 'snackbar', absolute: true, top: true, right: true, color: 'success', items: [
        { component: 'text', itemtext: 'Registration successful!' },
        { component: 'icon', dark: true, name: 'mdi-checkbox-marked-circle' }
      ]},
      { component: 'form', ref: 'form', evnts: [{event: 'submit', method: 'submit'}], items: [
        { component: 'row', items: [
          { component: 'col', cols: 12, sm: 6, items: [
            { component: 'text-field', model: 'form.first', rules: 'rules.name', color: 'purple darken-2', label: 'First name', required: true }
          ]},
          { component: 'col', cols: 12, sm: 6, items: [
            { component: 'txtfld', model: 'form.last', rules: 'rules.name', color: 'blue darken-2', label: 'Last name', required: true }
          ]},
          { component: 'col', cols: 12, items: [
            { component: 'textarea', model: 'form.bio', color: 'teal', 
              slots: [{name: 'label', items: [
                { component: 'text', itemtext: 'bio <small>(optional)</small>'}
              ]}]
            }
          ]},
          { component: 'col', cols: 12, sm: 6, items: [
            { component: 'select', model: 'form.favoriteAnimal', items: 'animals', rules: 'rules.animal', color: 'pink', label: 'Favorite animal', required: true }
          ]},
          { component: 'col', cols: 12, sm :6, items: [
            { component: 'slider', model: 'form.age', rules: 'rules.age', color: 'orange', label: 'Age', hint: 'Be honest', min: 1, max: 100, thumbLabel: true }
          ]},
          { component: 'col', cols: 12, items: [
            { component: 'checkbox', model: 'form.terms', color: 'green', slots: [
              {name: 'label', items: [
                { component: 'row', items: [
                  { component: 'text', itemtext: `&nbsp;Do you accept the&nbsp;` },
                  { component: 'text', class: 'blue--text text-decoration-underline', itemtext: 'terms', evnts: [{event: 'click', method: 'openDialog'}] },
                  { component: 'text', itemtext: '&nbsp;and&nbsp;' },
                  { component: 'text', class: 'blue--text text-decoration-underline', itemtext: 'conditions?', evnts: [{ event: 'click', method: 'openDialog' }] },
                ]}
              ]}
            ]}
          ]}
        ]},
        { component: 'card-actions', items: [
          { component: 'btn', text: true, evnts: [{event: 'click', method: 'resetForm'}], itemtext: 'Cancel' },
          { component: 'spacer' },
          { component: 'btn', disabled: { value: 'form', func: (e) => !(e.first && e.last && e.favoriteAnimal && e.terms)}, 
            text: true, color: 'primary', type: 'submit', itemtext: 'Register' }
        ]}
      ]},
      { component: 'dialog', model: 'terms', width: '70%', items: [
        { component: 'card', items: [
          { component: 'card-title', class: 'title', itmetext: 'Terms' },
          { component: 'div', itemsfor: 5, items: [
            { component: 'card-text', itemtext: 'content' }
          ]},
          { component: 'card-actions', items: [
            { component: 'spacer' },
            { component: 'btn', text: true, color: 'purple', evnts: [{event: 'click', method: 'closeDialog'}], itemtext: 'Ok' }
          ]}
        ]}
      ]}
    ]}
  ]
}