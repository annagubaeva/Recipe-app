function AppFilter(props) {

  const buttonData = [
    {name: 'all', label: 'All recipes'},
    {name: 'vegan', label: 'Vegan'},
    {name: 'healthy', label: 'Healthy'},
  ]

  const buttons = buttonData.map(({name, label}) => {
    const active = props.filterCategory === name;
    const clazz = active ? 'btn__bold' : 'btn__light';
    return (
        <button 
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onCategoryFilterSelected(name)}>
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