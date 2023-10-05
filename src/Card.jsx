import './card.css';
import PropTypes from 'prop-types';

const Card = ({ formInputs, card }) => {
    return (
        <div className="card-div">
            <div className='card-front-div'>
                <div className='circles-div'>
                    <div className='circle-filled'></div>
                    <div className='circle-empty'></div>
                </div>
                <div className='ellipses-div'>
                    <div className='ellipse-one'></div>
                    <div className='ellipse-two'></div>
                    <div className='ellipse-three'></div>
                </div>
                {card && formInputs.cardNumber ?
                    <>
                        <div className='card-number-div'>
                            <p>{formInputs.cardNumber.substring(0, 4)}</p>
                            <p>{formInputs.cardNumber.substring(4, 8)}</p>
                            <p>{formInputs.cardNumber.substring(8, 12)}</p>
                            <p>{formInputs.cardNumber.substring(12, 16)}</p>
                        </div>
                    </>
                    :
                    <>
                        <div className='card-number-div'>
                            <p>0000</p>
                            <p>0000</p>
                            <p>0000</p>
                            <p>0000</p>
                        </div>
                    </>}
                <div className='name-date-div'>
                    {card && formInputs.holderName ?
                        <p>{formInputs.holderName.toUpperCase()}</p>
                        :
                        <p>JANE APPLESEED</p>}
                    {card && formInputs.holderName ?
                        <p>
                            <span>{formInputs.expiryMonth}</span>
                            <span>/</span>
                            <span>{formInputs.expiryYear}</span>
                        </p>
                        :
                        <p>
                            <span>00</span>
                            <span>/</span>
                            <span>00</span>
                        </p>}
                </div>
            </div>
            <div className='card-back-div'>
                <div className='mag-strap-div'></div>
                <div className='card-cvc-div'>
                    {card && formInputs.cvc ?
                        <p>{formInputs.cvc}</p>
                        :
                        <p>000</p>}
                </div>
                <div className="lines-div">
                    <div className="upper-div">
                        <div className='line-one'></div>
                        <div className='line-two'></div>
                        <div className='line-three'></div>
                        <div className='line-four'></div>
                    </div>
                    <div className="middle-div">
                        <div className='line-one'></div>
                        <div className='line-two'></div>
                        <div className='line-three'></div>
                        <div className='line-four'></div>
                    </div>
                    <div className="lower-div">
                        <div className='line-one'></div>
                        <div className='line-two'></div>
                        <div className='line-three'></div>
                        <div className='line-four'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    formInputs: PropTypes.object,
    card: PropTypes.bool
}

export default Card