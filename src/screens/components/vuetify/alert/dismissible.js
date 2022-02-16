export default {
  items: [
    { component: 'div', items: [
      { component: 'alert', model: 'alert', border: 'left', closeText: 'Close Alert', color: 'deep-purple accent-4', dark: true, dismissible: true, 
        itemtext: `Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.

          Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.`
      },
      { component: 'div', class: 'text-center', items: [
        { component: 'btn', if: [{target: 'alert', value: 'false'}], color: 'deep-purple accent-4', 
          dark: true, evnts: [{event: 'click', method: 'reset'}], itemtext: 'Reset' }
      ]}
    ]}
  ]
}