export default {
  items: [
    { component: 'row', justify: 'space-around', items: [
      { component: 'col', cols: 'auto', items: [
        { component: 'btn', color: 'primary', itemtext: 'From the bottom',
          evnts: [{ event: 'click', method: 'changeDialog', value: ['bottom', true] }]
        },
        { component: 'dialog', model: 'dialog.bottom', transition: 'dialog-bottom-transition', maxWidth: 600,
          items: [
            { component: 'card', items: [
              { component: 'toolbar', color: 'primary', dark: true, title: { itemtext: 'Opening from the bottom' }},
              { component: 'cardText', items: [{ component: 'div', class: 'text-h2 pa-12', itemtext: 'Hello world!' }]},
              { component: 'cardActions', class: 'justify-end', items: [
                { component: 'btn', text: true, itemtext: 'close', evnts: [{ event: 'click', method: 'changeDialog', value: ['bottom', false] }]}
              ]}
            ]}
          ]
        }
      ]},
      { component: 'col', cols: 'auto', items: [
        { component: 'btn', color: 'primary', itemtext: 'From the top',
          evnts: [{ event: 'click', method: 'changeDialog', value: ['top', true] }]
        },
        { component: 'dialog',  model: 'dialog.top', transition: 'dialog-top-transition', maxWidth: 600,
          items: [
            { component: 'card', items: [
              { component: 'toolbar', color: 'primary', dark: true, title: { itemtext: 'Opening from the top' }},
              { component: 'cardText', items: [{ component: 'div', class: 'text-h2 pa-12', itemtext: 'Hello world!' }]},
              { component: 'cardActions', class: 'justify-end', items: [
                { component: 'btn', text: true, itemtext: 'close', evnts: [{ event: 'click', method: 'changeDialog', value: ['top', false] }]}
              ]}
            ]}
          ]
        }
      ]}
    ]}
  ]
}