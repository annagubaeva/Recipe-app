import './Sidebar.scss';

function Sidebar(props) {

    const buttonData = [
        {name: 'breakfast', label: 'Breakfast'},
        {name: 'lunch', label: 'Lunch'},
        {name: 'dinner', label: 'Dinner'},
        {name: 'dessert', label: 'Dessert'},
        {name: 'appetizers', label: 'Appetizers'},
        ]
    
        const buttons = buttonData.map(({name, label}) => {
        const active = props.filterDishtype === label;
        const clazz = active ? 'sidebar__item active' : 'sidebar__item';
        return (
            <button 
                className={clazz}
                type="button"
                key={name}
                onClick={() => props.onDishFilterSelected(label)}>
                    {label}
                </button>
        )
        })
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1>Awesome sause</h1>
            </div>
            <div className="sidebar__content">
                {buttons}
                <div className="sidebar__decor">
                    <div className="sidebar__decor__circle"></div>
                    <div className="sidebar__decor__circle"></div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
