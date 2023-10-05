import './success.css'
import PropTypes from 'prop-types';

const Success = ({ setFormInputs, setCard }) => {

    const handleSubmit = () => {
        setFormInputs({
            holderName: '',
            cardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            cvc: ''
        })
        setCard(false)
    }
    
    return (
        <div className='success-div'>
            <h3>Validation Complete!</h3>
            <p>We've added your card details</p>
            <button onClick={handleSubmit}>Add Another Card</button>
        </div>
    )
}

Success.propTypes = {
    setCard: PropTypes.func,
    setFormInputs: PropTypes.func
}

export default Success
