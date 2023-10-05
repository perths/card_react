import './css/App.css';
import { useState } from 'react';
import Form from './components/Form';

const App = () => {
  const [formInputs, setFormInputs] = useState({
    holderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  });

  return (
    <div className='App'>
      <div className='card-div'>
      </div>
      <div className='form-div'>
        <Form formInputs={formInputs} setFormInputs={setFormInputs} />
      </div>
    </div>
  );
}

export default App; 
