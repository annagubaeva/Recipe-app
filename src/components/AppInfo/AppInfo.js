import './AppInfo.scss';

function AppInfo(props) {
  
  return (
    <div className='app-info'>
        <h1 className='app-info__title'>{props.filterDishType}</h1>
        <div className='app-info__descr'>{`Scumtious recipes for a lite ${props.filterDishType}`}</div>
    </div>
  )
}

export default AppInfo;