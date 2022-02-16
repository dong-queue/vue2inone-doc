export default {
  items: [
    { component: 'row', items: [
      { component: 'col', cols: 4, items: [{ component: 'subheader', itemtext: 'Prefix for dollar currency'}]},
      { component: 'col', cols: 8, items: [{ component: 'text-field', label: 'Amount', value: '10.00', prefix: '$' }]}
    ]},
    { component: 'row', items: [
      { component: 'col', cols: 4, items: [{ component: 'subheader', itemtext: 'Suffix for weight'}]},
      { component: 'col', cols: 8, items: [{ component: 'text-field', label: 'Weight', value: '28.00', suffix: 'lbs' }]}
    ]},
    { component: 'row', items: [
      { component: 'col', cols: 4, items: [{ component: 'subheader', itemtext: 'Suffix for email domain'}]},
      { component: 'col', cols: 8, items: [{ component: 'text-field', label: 'Email address', value: 'example', suffix: '@gmail.com' }]}
    ]},
    { component: 'row', items: [
      { component: 'col', cols: 4, items: [{ component: 'subheader', itemtext: 'Suffix for time zone'}]},
      { component: 'col', cols: 8, items: [{ component: 'text-field', label: 'Label Text', value: '12:30:00', suffix: 'PST' }]}
    ]}
  ]
}