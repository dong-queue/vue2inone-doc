export default {
  items: [
    { component: 'card', class: 'mx-auto mt-6', width: 344, items: [
      { component: 'toolbar', items: [
        { component: 'btn', icon: true, items: [{component: 'icon', name: 'mdi-arrow-left'}] },
        { component: 'text', itemtext: 'My Recipes' },
        { component: 'progress-linear', active: 'loading', indeterminate: 'loading', absolute: true, bottom: true, color: 'deep-purple accent-4' },
        { component: 'spacer' },
        { component: 'btn', icon: true, items: [{component: 'icon', name: 'mdi-magnify'}] },
        { component: 'btn', icon: true, items: [{ component: 'icon', name: 'mdi-dots-vertical' }] }
      ]},
      { component: 'container', style: 'height: 282px;', items: [
        { component: 'row', class: 'fill-height', align: 'center', justify: 'center', items: [
          { component: 'fade-transition', items: [
            { component: 'div', if: [{target: 'loading', value: 'true', ne: true}], class: 'text-center', items: [
              { component: 'btn', color: 'primary', evnts: [{event: 'click', method: 'startLoading'}], itemtext: 'Start loading' }
            ]}
          ]}
        ]}
      ]}
    ]}
  ]
}