export default {
  items: [
    {
      component: 'container', items: [
        {
          component: 'agChart', class: 'sm8', style: 'width :100%; height: 300px;',
          chartOptions: {
            autoSize: true,
            data: [
              { type: 'Managers, directors & senior officials', earnings: 954 },
              { type: 'Professional occupations', earnings: 844 },
              { type: 'Associate professional & technical', earnings: 699 },
              { type: 'Skilled trades', earnings: 503 },
              { type: 'Process, plant & machine operatives', earnings: 501 },
              { type: 'Administrative & secretarial', earnings: 457 },
              { type: 'Sales & customer services', earnings: 407 },
              { type: 'Elementary occupations', earnings: 380 },
              { type: 'Caring, leisure & other services', earnings: 358 },
            ],
            title: {
              text: 'Gross Weekly Earnings by Occupation (Q4 2019)',
              fontSize: 18,
            },
            subtitle: { text: 'Source: Office for National Statistics' },
            series: [
              {
                type: 'bar',
                xKey: 'type',
                yKeys: ['earnings'],
              },
            ],
            axes: [
              {
                type: 'category',
                position: 'left',
              },
              {
                type: 'number',
                position: 'bottom',
                title: { text: '\xA3/week' },
              },
            ],
            legend: { enabled: false }
          }
        }
      ]
    }
  ]
}