export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 12, sm: 6, class: 'py-2', items: [
        { component: 'div', itemtext: 'Exclusive' },
        { component: 'btn-toggle', model: 'toggle_exclusive', items: [
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-left' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-center' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-right' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-justify' }
          ]}
        ]}
      ]},
      { component: 'col', cols: 12, sm: 6, class: 'py-2', items: [
        { component: 'div', itemtext: 'Multiple' },
        { component: 'btn-toggle', model: 'toggle_multiple', dense: true, 
          backgroundColor: 'primary', dark: true, multiple: true, items: [
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-bold' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-italic' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-underline' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-color-fill' }
          ]}
        ]}
      ]},
      { component: 'col', cols: 12, sm: 6, class: 'py-2', items: [
        { component: 'div', itemtext: 'No Options Selected' },
        { component: 'btn-toggle', model: 'toggle_none', items: [
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-left' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-center' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-right' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-justify' }
          ]}
        ]}
      ]},
      { component: 'col', cols: 12, sm: 6, class: 'py-2', items: [
        { component: 'div', itemtext: 'Mandatory' },
        {
          component: 'btn-toggle', model: 'toggle_one', shaped: true, mandatory: true, items: [
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-left' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-center' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-right' }
          ]},
          { component: 'btn', items: [
            { component: 'icon', name: 'mdi-format-align-justify' }
          ]}
        ]}
      ]},
      { component: 'col', cols: 12, class: 'py-2', items: [
        { component: 'div', itemtext: 'Text Options' },
        {
          component: 'btn-toggle', model: 'text', tile: true, color: 'deep-purple accent-3', 
          group: true, items: [
            { component: 'btn', value: 'left', itemtext: 'Left'},
            { component: 'btn', value: 'center', itemtext: 'center'},
            { component: 'btn', value: 'right', itemtext: 'right'},
            { component: 'btn', value: 'justify', itemtext: 'justify'}
          ]
        }
      ]},
      { component: 'col', cols: 12, class: 'py-2', items: [
        { component: 'div', itemtext: 'Text & Icon Options' },
        { component: 'btn-toggle', model: 'icon', borderless: true, items: [
          { component: 'btn', value: 'left', items: [
            { component: 'text', class: 'hidden-sm-and-down', itemtext: 'Left' },
            { component: 'icon', right: true, name: 'mdi-format-align-left' }
          ]},
          { component: 'btn', value: 'center', items: [
            { component: 'text', class: 'hidden-sm-and-down', itemtext: 'Center' },
            { component: 'icon', right: true, name: 'mdi-format-align-center' }
          ]},
          {
            component: 'btn', value: 'right',  items: [
            { component: 'text', class: 'hidden-sm-and-down', itemtext: 'Right' },
            { component: 'icon', right: true, name: 'mdi-format-align-right' }
          ]},
          { component: 'btn', value: 'justify', items: [
            { component: 'text', class: 'hidden-sm-and-down', itemtext: 'Justify' },
            { component: 'icon', right: true, name: 'mdi-format-align-justify' }
          ]}
        ]}
      ]},
    ]}
  ]
}