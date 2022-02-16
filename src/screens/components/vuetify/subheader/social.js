export default {
  items: [
    {
      component: 'card', items: [
        {
          component: 'toolbar', color: 'cyan', dark: true,
          appBarNavIcon: true,
          title: { itemtext: 'Application' },
          items: [
            { component: 'spacer' },
            { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-magnify' }] }
          ]
        },
        { component: 'card-title', itemsfor: 'types', subItemName: 'type', items: [
          { component: 'container', class: 'grey lighten-4', fluid: true, items: [
            { component: 'subheader', itemtext: 'type' },
            { component: 'row', itemsfor: 'cards', subItemName: 'card', items: [
              { component: 'col', cols: 12, sm: 6, md: 4, items: [
                { component: 'card', items: [
                  {
                    component: 'img', src: { value: 'image', func: e => `https://picsum.photos/200/300?image=${e()}`}, 
                    height: '300px', items: [
                      { component: 'text', class: 'headline white--text pl-4 pt-4 d-inline-block', itemtext: 'card' }
                    ]
                  },
                  { component: 'card-actions', class: 'white justify-center', itemsfor: 'socials', subItemName: 'social', items: [
                    {
                      component: 'btn', color: 'social.color', class:' white--text', fab: true, icon: true, small: true,
                      items: [{ component: 'icon', name: 'social.icon'}]
                    }
                  ]}
                ]}
              ]}
            ]}
          ]}
        ]}
      ]
    }
  ]
}