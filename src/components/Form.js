import { useState } from 'react';
import '../css/Form.css'
import PropTypes from 'prop-types';

const Form = ({ formInputs, setFormInputs, setCard }) => {
    const currentYear = (new Date().getFullYear().toString()).substring(2);
    const currentMonth = (new Date().getMonth()) + 1;

    const [errorMessage, setErrorMessage] = useState(
        {
            name: '',
            cardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            cvc: ''
        }
    );

    const validateHolderName = () => {
        const holderName = formInputs.holderName;
        if (holderName.length < 5 && !(/^[a-zA-Z]+ [a-zA-Z]+$/.test(holderName))) {
            setErrorMessage(prevMessage => ({ ...prevMessage, name: 'Valid cardholder name required' }));
            return false;
        } else {
            setErrorMessage(prevMessage => ({ ...prevMessage, name: '' }));
            return true;
        }
    }

    const validateCardNumber = () => {
        const cardNumber = formInputs.cardNumber.replace(/\s/g, '');
        setFormInputs(prevInputs => ({ ...prevInputs, cardNumber }));
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            setErrorMessage(prevMessage => ({ ...prevMessage, number: 'Valid card number required' }));
            return false;
        } else {
            setErrorMessage(prevMessage => ({ ...prevMessage, number: '' }));
            return true;
        }
    }

    const validateMonth = () => {
        const month = formInputs.expiryMonth;
        const monthRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        if (month.length !== 2 || isNaN(month) || !monthRange.includes(parseInt(month)) || (currentYear === formInputs.expiryYear && currentMonth > parseInt(month))) {
            setErrorMessage(prevMessage => ({ ...prevMessage, expiryMonth: 'Invalid month' }));
            return false;
        } else {
            setErrorMessage(prevMessage => ({ ...prevMessage, expiryMonth: '' }));
            return true;
        }
    }

    const validateYear = () => {
        const year = formInputs.expiryYear;

        if (isNaN(year) || (year < currentYear || year > 99)) {
            setErrorMessage(prevMessage => ({ ...prevMessage, expiryYear: 'Invalid year' }));
            return false;
        } else {
            setErrorMessage(prevMessage => ({ ...prevMessage, expiryYear: '' }));
            return true;
        }
    }

    const validateCvc = () => {
        const cvc = formInputs.cvc;
        if (cvc.length !== 3 || isNaN(cvc)) {
            setErrorMessage(prevMessage => ({ ...prevMessage, cvc: 'Invalid CVC' }));
            return false;
        } else {
            setErrorMessage(prevMessage => ({ ...prevMessage, cvc: '' }));
            return true;
        }
    }

    const validation = () => {
        const nameValidation = validateHolderName();
        const cardNumberValidation = validateCardNumber();
        const monthValidation = validateMonth();
        const yearValidation = validateYear();
        const cvcValidation = validateCvc();
        if (nameValidation && cardNumberValidation && monthValidation && yearValidation && cvcValidation)
            return true;
        else
            return false;
    }

    const setCardDetails = (event) => {
        event.preventDefault();
        const validationResult = validation();
        if (validationResult) {
            setCard(true);
        }
    }

    return (
        <form className='card-details-form'>
            <div>
                <label htmlFor='holder-name'>CARDHOLDER NAME</label>
                <input
                    type='text' placeholder='ex. Jane Appleseed'
                    name='holder-name' id='holder-name'
                    value={formInputs.holderName}
                    onChange={(event) => event.target.value.length <= 60 && setFormInputs(prevValues => ({ ...prevValues, holderName: event.target.value }))}
                />
                {errorMessage.name && <p className='error-msg-p'>{errorMessage.name}</p>}
            </div>
            <div>
                <label htmlFor='card-number'>CARD NUMBER</label>
                <input
                    type='text' placeholder='ex. 1234 8765 9123 9201'
                    name='card-number' id='card-number'
                    value={formInputs.cardNumber}
                    onChange={(event) => event.target.value.length <= 16 && setFormInputs(prevValues => ({ ...prevValues, cardNumber: event.target.value }))}
                />
                {errorMessage.number && <p className='error-msg-p'>{errorMessage.number}</p>}
            </div>
            <div className='date-cvc-div'>
                <div className='exp-div'>
                    <label htmlFor='expiry-month'>EXP DATE (MM/YY)</label>
                    <div className='exp-date-div'>
                        <div>
                            <input
                                type='text' placeholder='MM'
                                name='expiry-date' id='expiry-month'
                                value={formInputs.expiryMonth}
                                onChange={(event) => event.target.value.length <= 2 && setFormInputs(prevValues => ({ ...prevValues, expiryMonth: event.target.value }))}
                            />
                            {errorMessage.expiryMonth && <p className='error-msg-p'>{errorMessage.expiryMonth}</p>}
                        </div>
                        <div>
                            <input
                                type='text' placeholder='YY'
                                name='expiry-date' id='expiry-year'
                                value={formInputs.expiryYear}
                                onChange={(event) => event.target.value.length <= 2 && setFormInputs(prevValues => ({ ...prevValues, expiryYear: event.target.value }))}
                            />
                            {errorMessage.expiryYear && <p className='error-msg-p'>{errorMessage.expiryYear}</p>}
                        </div>
                    </div>
                </div>
                <div className='cvc-div'>
                    <label htmlFor='cvc'>CVC</label>
                    <input
                        type='password' placeholder='ex. 213'
                        name='cvc' id='cvc'
                        value={formInputs.cvc}
                        onChange={(event) => event.target.value.length <= 3 && setFormInputs(prevValues => ({ ...prevValues, cvc: event.target.value }))}
                    />
                    {errorMessage.cvc && <p className='error-msg-p'>{errorMessage.cvc}</p>}
                </div>
            </div>
            <button type='submit' onClick={(event) => setCardDetails(event)}>Confirm</button>
        </form>
    )
}

Form.propTypes = {
    formInputs: PropTypes.object,
    setFormInputs: PropTypes.func
}

export default Form
