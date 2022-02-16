export default {
  items: [
    { component: 'row', justify: 'center', items: [
      { component: 'btn', color: 'primary', dark: true, itemtext: 'Open Dialog', 
        evnts: [{event: 'click', method: 'changeDialog', value: true}]
      },
      { component: 'dialog', model: 'dialog', persistent: true, maxWidth: 290, items: [
        { component: 'card', items: [
          { component: 'cardTitle', class: 'headline', itemtext: `Use Google's location service?` },
          { component: 'cardText', itemtext: 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.' },
          { component: 'cardActions', items: [
            { component: 'spacer' },
            { component: 'btn', color: 'green darken-1', text: true, itemtext: 'Disagree',
              evnts: [{ event: 'click', method: 'changeDialog', value: false }]
            },
            { component: 'btn', color: 'green darken-1', text: true, itemtext: 'Agree',
              evnts: [{ event: 'click', method: 'changeDialog', value: false }]
            }
          ]}
        ]}
      ]}
    ]}
  ]
}