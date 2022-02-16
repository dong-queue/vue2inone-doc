export default {
  items: [
    { component: 'card', items: [
      { component: 'tabs', model: 'tab', color: 'deep-purple accent-4', right: true, items: [
        { component: 'tab', itemtext: 'Landscape' }, 
        { component: 'tab', itemtext: 'City' },
        { component: 'tab', itemtext: 'Abstract' },
      ]},
      { component: 'tabs-items', model: 'tab', itemsfor: 3, subItemName: 'n', items: [
        {
          component: 'tab-item', eager: true, items: [
            { component: 'container', fluid: true, items: [
              { component: 'row', itemsfor: 6, subItemName: 'i', items: [
                { component: 'col', cols: 12, md: 4, items: [
                  { component: 'img', 
                    src: { value: '_self', func: ({ n, i }) => `https://picsum.photos/500/300?image=${i * n * 5 + 10}` },
                    lazySrc: { value: '_self', func: ({ n, i }) => `https://picsum.photos/10/6?image=${i * n * 5 + 10}` },
                    'aspect-ratio': 1
                  }
                ]}
              ]}
            ]}
          ]
        }
      ]}
    ]}
  ]
}