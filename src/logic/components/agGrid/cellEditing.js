export default {
  data () {
    return {
      gridOptions: null,
      rowData: [],
      columnDefs: [],
      defaultColDef: null,
      pinnedTopRowData: null,
      pinnedBottomRowData: null,
    }
  },
  beforeMount() {
    this.gridOptions = {}
    this.rowData = [
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
    ]
    this.columnDefs = [
      { headerName: 'First Name', field: 'firstName' },
      { headerName: 'Last Name', field: 'lastName' },
      { headerName: 'Gender', field: 'gender' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Mood', field: 'mood' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Address', field: 'address', minWidth: 550 }
    ]
    this.defaultColDef = {
      flex: 1,
      minWidth: 110,
      editable: true,
      resizable: true
    }
    this.pinnedTopRowData = getPinnedTopData()
    this.pinnedBottomRowData = getPinnedBottomData()
  },
  mounted() {
  },
  computed: {
    gridApi () {
      return this.gridOptions.api
    },
    columnApi () {
      this.gridOptions.columnApi
    }
  },
  methods: {
    onBtStopEditing() {
      this.gridApi.stopEditing();
    },
    onBtStartEditing(params, event) {
      console.log('onBtStartEdting',params, event)
      let key = params[0]
      let char = params[1]
      let pinned = params[2]
      this.gridApi.setFocusedCell(0, 'lastName', pinned);
      this.gridApi.startEditingCell({
        rowIndex: 0,
        colKey: 'lastName',
        rowPinned: pinned,
        keyPress: key,
        charPress: char,
      });
    },
    onBtNextCell() {
      this.gridApi.tabToNextCell();
    },
    onBtPreviousCell() {
      this.gridApi.tabToPreviousCell();
    },
    onBtWhich() {
      var cellDefs = this.gridApi.getEditingCells();
      if (cellDefs.length > 0) {
        var cellDef = cellDefs[0];
        console.log(
          'editing cell is: row = ' +
          cellDef.rowIndex +
          ', col = ' +
          cellDef.column.getId() +
          ', floating = ' +
          cellDef.rowPinned
        );
      } else {
        console.log('no cells are editing');
      }
    },
    onGridReady() { }
  }
}


function getPinnedTopData() {
  return [
    {
      firstName: '##',
      lastName: '##',
      gender: '##',
      address: '##',
      mood: '##',
      country: '##',
    },
  ]
}

function getPinnedBottomData() {
  return [
    {
      firstName: '##',
      lastName: '##',
      gender: '##',
      address: '##',
      mood: '##',
      country: '##',
    },
  ]
}

function getCharCodeFromEvent(event) {
  event = event || window.event;
  return typeof event.which === 'undefined' ? event.keyCode : event.which;
}

function isCharNumeric(charStr) {
  return !!/\d/.test(charStr);
}
// eslint-disable-next-line
function isKeyPressedNumeric (event) {
  var charCode = getCharCodeFromEvent(event);
  var charStr = String.fromCharCode(charCode);
  return isCharNumeric(charStr);
}
