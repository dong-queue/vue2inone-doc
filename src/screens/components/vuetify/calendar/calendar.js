export default {
  items: [
    // title
    {
      component: 'iterator',
      items: [
        { component: 'div', itemtext: 'Calendars', class: 'text-h4 py-3', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.calendar.intro', class: 'subtitle-1', textJustify: 'left' }
      ]
    },

    // usage
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.calendar.usage.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.calendar.usage.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/calendars/#usage',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/calendar/usage' },

    // type-category
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.calendar.category.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.calendar.category.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/calendars/#type-category',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/calendar/category' },

    // type-day
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.calendar.day.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.calendar.day.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/calendars/#type-day',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/calendar/day' },

    // type-week
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.calendar.week.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.calendar.week.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/calendars/#type-week',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/calendar/week' },

    // click
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.calendar.click.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.calendar.click.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/calendars/#click',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/calendar/click' },

    // slotday
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.calendar.slotday.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.calendar.slotday.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/calendars/#day',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/calendar/slotday' },

    // drag-and-drop
    {
      component: 'iterator',
      items: [
        { component: 'div', class: 'py-4' },
        { component: 'text', itemtext: 'vuetify.calendar.drag.heading', class: 'text-h6', textJustify: 'left' },
        { component: 'text', itemtext: 'vuetify.calendar.drag.intro' }
      ]
    },
    {
      component: 'link', class: 'ml-4',
      link: 'https://vuetifyjs.com/en/components/calendars/#drag-and-drop',
      name: 'See code in vuetify official document'
    },
    { component: 'code', file: 'components/vuetify/calendar/drag' },
  ]
}