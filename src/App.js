import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const moneda = {
  MXN: {
    MXN: 1,
    USD: 0.055,
    EUR: 0.052,
    BTC: 0.0000016,
    ETH: 0.00003,
    DOGE: 0.828203,
    },
  USD:{
    USD:1,
    MXN: 18.26,
    EUR: 0.95,
    BTC: 0.000029,
    ETH: 0.00057,
    DOGE: 15.2157,
  },
  EUR: {
    EUR:1,
    MXN: 19.34,
    USD: 1.0587,
    BTC: 0.00003139,
    ETH: 0.000598,
    DOGE: 16.1074,
  },
  BTC: {
    BTC:1,
    MXN: 615300.83,
    USD: 33666.63,
    EUR: 31801.55,
    ETH: 19.0435,
    DOGE: 512301.82,
  },
  ETH: {
    ETH:1,
    MXN: 32274.94,
    USD: 1766.18,
    EUR: 1669.12,
    BTC: 0.05251,
    DOGE: 26909.31,
  },
  DOGE: {
    DOGE:1,
    MXN: 1.19,
    USD: 0.0656,
    EUR: 0.0619,
    BTC: 0.000001954,
    ETH: 0.00003723,
  },
};


function App() {
  const currencyOptions = ['MXN', 'USD', 'EUR', 'BTC', 'ETH', 'DOGE'];

  const [fromCurrency, setFromCurrency] = useState('MXN');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setResult] = useState(0);

  const Convert = () => {
    const rate = moneda[fromCurrency][toCurrency];
    setResult((amount * rate).toFixed(2));
  };

  return (
    <div>
      <h1>Calculadora de Divisas</h1>
      <h2>Ingrese cantidad</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="1"/>
      <div className="de">
        <h2>De:</h2>
        <select value={fromCurrency} onChange={(e) =>{setFromCurrency(e.target.value)}}>
             {currencyOptions.map((currency) => (
               <option key={currency} value={currency}>
                 {currency}
               </option>
             ))}
           </select>
      </div>

      <div className='a'>
        <h2>a:</h2>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <button onClick={Convert}>Convertir</button>

      <h1>{convertedAmount} {toCurrency}</h1>

    </div>
  );
}

export default App;
