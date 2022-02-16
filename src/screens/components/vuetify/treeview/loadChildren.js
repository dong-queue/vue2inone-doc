export default {
  items: [
    { component: 'card', items: [
      { component: 'card-title', class: 'indigo white--text headline', itemtext: 'User Directory' },
      { component: 'row', class: 'pa-4', justify: 'space-between', items: [
        { component: 'col', cols: 5, items: [
          {
            component: 'tree', items: 'items', 
            activatable: true, color: 'warning', openOnClick: true, transition: true,
            active: 'active',
            'load-children': async function (item) {
              await pause(1500)

              return fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(json => (item.children.push(...json)))
                .catch(err => console.warn(err))
            },
            evnts: [
              { event: 'update:active', method: 'updateActive' },
              { event: 'update:open', method: 'updateOpen' }
            ],
            slots: [
              { name: 'prepend', type: 'data', slotDataName: 'prepend', items: [
                { component: 'icon', if: [{target: 'prepend.item.children', ne: true}], name: 'mdi-account' }
              ]}
            ]
          }
        ]},
        { component: 'divider', vertical: true },
        { component: 'col', class: 'd-flex text-center', items: [
          { component: 'scroll-y-transition', mode: 'out-in', group: true, items: [
            { component: 'div', if: [{ target: 'user.id', ne: true }], class: 'title grey--text text--lighten-1 font-weight-light',
              style: 'align-self: center;', itemtext: 'Select a User'
            },
            {
              component: 'card', if: [{ target: 'user.id' }], class: 'pt-6 mx-auto', flat: true, maxWidth: 400, items: [
              {
                component: 'card-text', items: [
                { component: 'avatar', if: [{target: 'avatar'}], size: 88, items: [
                  { component: 'img', src: { value: 'avatar', func: e => `https://avataaars.io/${e}`}, class: 'mb-6' }
                ]},
                  { component: 'div', class: 'headline mb-2', itemtext: 'user.name' },
                  { component: 'div', class: 'blue--text mb-2', itemtext: 'user.email' },
                  { component: 'div', class: 'blue--text subheading font-weight-bold', itemtext: 'user.username'}
              ]},
              { component: 'divider' },
              { component: 'row', class: 'text-left', items: [
                { component: 'col', class: 'text-right mr-4 mb-2',cols: 5, items: [
                  { component: 'card-text', items: [{ component: 'text', html: '<strong>Company:</strong>' }] }
                ]},
                { component: 'col', items: [{ component: 'card-text', itemtext: 'user.company.name'}] },
                { component: 'col', class: 'text-right mr-4 mb-2',cols: 5, items: [
                  { component: 'card-text', items: [{component: 'text', html: '<strong>Website:</strong>'}] }
                ]},
                { component: 'col', items: [
                  { component: 'card-text', items: [{ component: 'text', html: { value: 'user.website', func: e => `<a :href="//${e}" target="_blank">${e}</a>`} }] }
                ]},
                { component: 'col', class: 'text-right mr-4 mb-2', cols: 5, items: [
                  { component: 'card-text', items: [{ component: 'text', html: '<strong>Phone:</strong>' }] }
                ]},
                { component: 'col', items: [
                  { component: 'card-text', itemtext: 'user.phone' }
                ]},
              ]}
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}
const pause = ms => new Promise(resolve => setTimeout(resolve, ms))