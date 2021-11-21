import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Calculator from './Calculator/Calculator';
import Currency from './Currency/Currency';
import styles from './App.module.css'

const rates = {//для разработки
  base: 'EUR',
  rates: {
    EUR: 1,
    USD: 1.135609,
    RUB: 83.04369
  },
  isLoading: false, //при переписывании на получение с API заменить
}

function App() {

  const [currency, setCurrency] = useState(rates.rates);
  const [base, setBase] = useState(rates.base);
  const [isLoading, setLoading] = useState(rates.isLoading); //потом поменять 

 console.log(currency)

  /*async function getCurrency() {
    try {
      let res = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=d321fdf04ce1e1689d6861314e28a54b&format=1")
      res = await res.json()
      console.log(res)
      setCurrency(res.rates)
      setBase(res.base)
      setLoading(false)
    } catch { 
      console.log('Error')
    } 
  }*/

  /*const getRub = () => {
    switch(base) {
      case 'EUR':
        setBase('RUB');
        currency.USD = currency.EUR / (currency.RUB * currency.USD); //верно
        currency.EUR = currency.EUR / currency.RUB; //верно
        currency.RUB = 1;
        break
      case 'USD':
        setBase('RUB');
        currency.USD = 1 / (currency.USD * currency.RUB);
        currency.EUR = 1 / (currency.EUR * currency.RUB);
        currency.RUB = 1;
        break
    }
  }

  const getEuro = () => {
    switch(base) {
      case 'RUB':
        setBase('EUR');
        currency.RUB = currency.RUB / currency.EUR; //верно
        currency.USD = currency.EUR / currency.USD;
        currency.EUR = 1;
        break
      case 'USD':
        setBase('EUR');
        currency.RUB = currency.RUB * currency.EUR; // верно
        currency.USD = currency.USD / currency.EUR; //верно
        currency.EUR = 1;
        break
    }
  }

  const getUsd = () => {
    switch(base) {
      case 'RUB':
        setBase('USD');
        currency.RUB = currency.RUB / currency.USD; //верно
        currency.EUR = currency.USD / currency.EUR;
        currency.USD = 1;
        break
      case 'EUR':
        setBase('USD');
        currency.RUB = currency.RUB * currency.USD; // верно
        currency.EUR = currency.EUR / currency.USD; //верно
        currency.USD = 1;
        break
    }
  }*/

  return (
    <div className={styles.wrapper}>
      <div className={styles.border}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      <div className={styles.inner}>
        <Router>
          <nav className={styles.nav}>
            <NavLink to="/" className={styles.link}>
              Курс валют
            </NavLink>
            <NavLink to="/calculator" className={styles.link}>
              Калькулятор
            </NavLink>
          </nav>
          <Routes>
            <Route path="/" index element={<Currency
            />} />
            <Route path="/calculator" element={<Calculator
            currency={currency}
            //getEuro={getEuro}
            //getRub={getRub}
            //getUsd={getUsd}
            isLoading={isLoading}
            base={base}
            />} />
          </Routes>
        </Router>
      </div>
      </div>
    </div>
  );
}

export default App;