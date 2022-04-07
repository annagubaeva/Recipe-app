import img from './error.gif'

const ErrorMessage = () => {
    return (
        <img src={img} alt="Error" style={{width: '500px', margin: '0 auto'}}/>
    )
}

export default ErrorMessage;