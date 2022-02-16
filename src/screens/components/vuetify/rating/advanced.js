export default {
  items: [
    { component: 'card', class: 'mx-auto overflow-hidden', style: 'max-width: 600px', items: [
      { component: 'row', items: [
        { component: 'col', class: 'd-flex', cols: 6, items: [
          { component: 'img', src: 'https://cdn.vuetifyjs.com/images/ratings/fortnite1.png' }
        ]},
        { component: 'col', cols: 6, items: [
          { component: 'container', class: 'pa-0 pl-2', style: 'margin: -4px 0', items: [
            { component: 'row', items: [
              { component: 'col', class: 'd-flex', cols: 7, items: [
                { component: 'img', src: 'https://cdn.vuetifyjs.com/images/ratings/fortnite2.png' }
              ]},
              { component: 'col', class: 'd-flex', cols: 5, items: [
                { component: 'img', src: 'https://cdn.vuetifyjs.com/images/ratings/fortnite3.png' }
              ]},
              { component: 'col', class: 'd-flex', cols: 5, items: [
                { component: 'img', src: 'https://cdn.vuetifyjs.com/images/ratings/fortnite4.png' }
              ]},
              { component: 'col', class: 'd-flex', cols: 5, items: [
                { component: 'img', src: 'https://cdn.vuetifyjs.com/images/ratings/fortnite5.png' }
              ]}
            ]}
          ]}
        ]}
      ]},
      { component: 'card-title', class: 'align-start', items: [
        { component: 'div', items: [
          { component: 'text', class: 'headline', itemtext: 'FORTNITE' },
          { component: 'div', class: 'grey--text font-weight-light', itemtext: 'Video game' }
        ]},
        { component: 'spacer' },
        { component: 'dialog', model: 'dialog', width: 400, items: [
          { component: 'card', items: [
            { component: 'card-title', items: [
              { component: 'text', class: 'title font-weight-bold', itemtext: 'Share' },
              { component: 'spacer' },
              { component: 'btn', class: 'mx-0', icon: true, evnts: [{event: 'click', method: 'changeDialog', value: false}], items: [
                { component: 'icon', name: 'mdi-close-circle-outline' }
              ]}
            ]},
            { component: 'list', items: [
              { component: 'list-item', items: [
                { component: 'list-item-action', items: [
                  { component: 'icon', color: 'indigo', name: 'mdi-facebook' }
                ]},
                { component: 'card-title', itemtext: 'Facebook' }
              ]},
              { component: 'list-item', items: [
                { component: 'list-item-action', items: [
                  { component: 'icon', color: 'cyan', name: 'mdi-twitter' }
                ]},
                { component: 'card-title', itemtext: 'Twitter' }
              ]},
              { component: 'list-item', items: [
                { component: 'list-item-action', items: [
                  { component: 'icon', name: 'mdi-email' }
                ]},
                { component: 'card-title', itemtext: 'Email' }
              ]},
            ]},
            { component: 'text-field', ref: 'link', label: {value: 'copied', func: e => e ? 'Link copied' : 'Click to copy link'},
              class: 'pa-4', readonly: true, value: 'http://g.co/kgs/nkrK43', evnts: [{event: 'click', method: 'copy'} ]
            }
          ]}
        ]},
        { component: 'icon', name: 'mdi-share-variant', evnts: [{ event: 'click', method: 'changeDialog', value: true }] }
      ]},
      { component: 'divider' },
      { component: 'card-actions', items: [
        { component: 'text', class: 'pl-2 grey--text text--darken-2 font-weight-light caption', itemtext: '16,544 reviews' },
        { component: 'spacer' },
        { component: 'rating', model: 'rating', length: 10, readonly: true, 
          slots: [{
            name: 'item', type: 'data', slotDataName: 'props', items: [
            { component: 'icon', large: true, color: { value: 'props', func: e => e.isfilled ? 'purple darken-4' : ''},
              name: { value: 'props', func: e => `mdi-numeric${e.index}-box`}
            }
          ]}]
        } 
      ]},
      { component: 'tex', sytle: 'width: 3000px;'},
      { component: 'text', class: 'pa-4 pt-4 caption', itemtext: `<em>Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</em>`}
    ]}
  ]
}