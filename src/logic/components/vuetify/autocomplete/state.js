export default {
  data() {
    return {
      isEditing: false,
      model: null,
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
      ],
      hint: 'Click the icon to edit',
      isReadonly: true,
      label: `State - Readonly`,
      appendOuterIcon: 'mdi-circle-edit-outline',
      appendOuterIconColor: 'info'
    }
  },
  methods: {
    clickIcon () {
      this.isEditing = !this.isEditing
      this.isReadonly = !this.isEditing
      this.appendOuterIcon = this.isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'
      this.appendOuterIconColor = this.isEditing ? 'success' : 'info'
      this.label = `State - ${this.isEditing ? 'Editable' : 'Readonly'}`
    }
  }
}