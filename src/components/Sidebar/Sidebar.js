import './Sidebar.scss';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1>Awesome sause</h1>
            </div>
            <div className="sidebar__content">
                <ul>
                    <li>
                        <a href="#" className="sidebar__item">Breakfast</a>
                    </li>
                    <li>
                        <a href="#" className="sidebar__item active">Lunch</a>
                    </li>
                    <li>
                        <a href="#" className="sidebar__item">Dinner</a>
                    </li>
                    <li>
                        <a href="#" className="sidebar__item">Dessert</a>
                    </li>
                    <li>
                        <a href="#" className="sidebar__item">Appetizers</a>
                    </li>
                </ul>
                <div className="sidebar__decor">
                    <div className="sidebar__decor__circle"></div>
                    <div className="sidebar__decor__circle"></div>
                </div>
            </div>
            
        </div>
    );
}

export default Sidebar;
