export default {
  items: [
    { component: 'card', class: 'mx-auto', maxWidth: 600, items: [
      { component: 'toolbar', flat: true, dense: true, title: { itemtext: 'METRONOME', class: 'subheading' },
        items: [
          { component: 'spacer' },
          { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-share-variant' }] }
        ]
      },
      { component: 'card-text', items: [
        { component: 'row', class: 'mb-4', justify: 'space-between', items: [
          { component: 'col', class: 'text-left', items: [
            { component: 'text', class: 'display-3 font-weight-light', itemtext: 'bpm' },
            { component: 'text', class: 'subheading font-weight-light mr-1', itemtext: 'BPM' },
            { component: 'avatar', if: [{ target: 'isPlaying', value: 'true' }], color: 'color', style: { animaitonDuration: animaitonDuration() },
              class: 'mb-1 v-avatar--metronome', size: 12
            }
          ]},
          { component: 'col', class: 'text-right', items: [
            { component: 'btn', color: 'color', dark: true, depressed: true, fab: true, 
              evnts: [{event: 'click', method: 'toggle'}],
              items: [{ component: 'icon', large: true, name: {value: 'isPlaying', func: (e) => e ? 'mdi-pause' : 'mdi-play'}}]
            }
          ]}
        ]},
        { component: 'sld', model: 'bpm', color: 'color', trackColor: 'grey', 'always-dirty': true, min: 40, max: 218,
          slots: [
            { name: 'prepend', items: [{ component: 'icon', color: 'color', evnts: [{event: 'click', method: 'decrement' }], name: 'mdi-minus'}] },
            { name: 'append', items: [{ component: 'icon', color: 'color', evnts: [{event: 'click', method: 'increment' }], name: 'mdi-plus'}] }
          ]
        }
      ]}
    ]}
  ]
}

function animaitonDuration () {
  return `${60 / 100 }s`
} 