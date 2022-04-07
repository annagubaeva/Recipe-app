function AppFilter(props) {

  const buttonData = [
    {name: 'all', label: 'All recipes'},
    {name: 'vegan', label: 'Vegan'},
    {name: 'low-carb', label: 'Low-Carb'},
  ]

  const buttons = buttonData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn__bold' : 'btn__light';
    return (
        <button 
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
                {label}
          </button>
    )
  })

  return (
      <div className="btn-group">
          {buttons}
      </div>
  )
}

export default AppFilter;