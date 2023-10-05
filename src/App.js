import './css/App.css';
import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  const [formInputs, setFormInputs] = useState({
    holderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  });

  const [card, setCard] = useState(null);

  return (
    <div className='app'>
      <div className='card-div'>
        <Card formInputs={formInputs} card={card} />
      </div>
      <div className='form-div'>
        <Form formInputs={formInputs} setFormInputs={setFormInputs} setCard={setCard} />
      </div>
    </div>
  );
}

export default App; 
