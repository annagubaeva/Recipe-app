import preloader from './Preloader.gif';

const Spinner = () => {
    return (
            <img src={preloader} alt="Loading..." style={{margin: '0 auto', background: 'none', width: '150px', height: '150px'}}/>
    )
}

export default Spinner;

