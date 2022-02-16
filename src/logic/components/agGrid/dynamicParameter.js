export default {
  data () {
    return {
      gridOptions: null,
      rowData: [],
      columnDefs: [],
      defaultColDef: null
    }
  },
  beforeMount() {
    this.gridOptions = {}
    this.rowData = [
      {
        name: 'Bob Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Bob Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Bob Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Bob Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Bob Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Bob Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Mary Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Sadiq Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        city: 'Dublin',
        country: 'Ireland',
      },
      {
        name: 'Jerry Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        city: 'Dublin',
        country: 'Ireland',
      }
    ]
    this.columnDefs = [
      { field: 'name', headerName: 'Name' },
      {
        field: 'gender', headerName: 'Gender',
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['Male', 'Female'],
        },
      },
      {
        field: 'country', headerName: 'Country',
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          cellHeight: 50,
          values: ['Ireland', 'USA'],
        },
      },
      {
        field: 'city', headerName: 'City',
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: cellCellEditorParams,
      },
      {
        field: 'address', headerName: 'Address',
        cellEditor: 'agLargeTextCellEditor',
        minWidth: 550,
      }
    ]
    this.defaultColDef = {
      flex: 1,
      minWidth: 130,
      editable: true,
      resizable: true,
    }
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
    onCellFocused(params) {
      console.log('onCellFocused', params)
      this.gridApi.startEditingCell({rowIndex: params.rowIndex, colKey: params.column.colId})
    },
    onCellValueChanged(params) {
      var colId = params.column.getId();
      if (colId === 'country') {
        var selectedCountry = params.data.country;
        var selectedCity = params.data.city;
        var allowedCities = countyToCityMap(selectedCountry);
        var cityMismatch = allowedCities.indexOf(selectedCity) < 0;
        if (cityMismatch) {
          params.node.setDataValue('city', null);
        }
      }
    },
    onGridReady() { }
  }
}

function cellCellEditorParams(params) {
  var selectedCountry = params.data.country;
  var allowedCities = countyToCityMap(selectedCountry);
  return {
    values: allowedCities,
    formatValue: function (value) {
      return value + ' (' + selectedCountry + ')';
    },
  };
}

function countyToCityMap(match) {
  var map = {
    Ireland: ['Dublin', 'Cork', 'Galway'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
  };
  return map[match];
}