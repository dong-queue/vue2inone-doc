export default {
  items: [
    { component: 'sheet', elevation: 6, items: [
      { component: 'tabs', 'background-color': 'cyan', dark: true, showArrows: true,
        'next-icon': 'mdi-arrow-right-bold-box-outline', 'prev-icon': 'mdi-arrow-left-bold-box-outline',
        tabsSlider: { color: 'pink' },
        itemsfor: 30, subItemName: 'i', items: [
          { component: 'tab', href: {value: 'i', func: e => `#tab-${e}`}, itemtext: {value: 'i', func: e => `Item ${e}`} }
        ]
      }
    ] }
  ]
}