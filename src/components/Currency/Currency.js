import { useState } from 'react';
import styles from './Currency.module.css'
import classnames from "classnames";

const rates = {//для разработки
    base: 'EUR',
    rates: {
      EUR: 1,
      USD: 1.135609,
      RUB: 83.04369
    }
  }

function Currency() {
  const [currency, setCurrency] = useState(rates.rates);
  const [base, setBase] = useState(rates.base);
  const [isLoading, setLoading] = useState(false); //потом поменять 

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

  /*
Корректные значения: 
Евро = 83.04369
Доллар = 94.30516175721

Евро: 1
Доллар: 1.135609

Доллар: 1
Евро: 0.8805847787398655

Рубль: 1
Евро: 0.012041854113178256
Доллар: 0.010603873439870815

Евро: 1
Доллар: 1.135609
Рубль: 83.04369

Евро: 0.8805847787398655
Доллар: 1
Рубль: 94.30516175721

Евро: 0.012041854113178256
Доллар: 0.010603873439870815
Рубль: 1
  */

  const getRub = () => {
    switch(base) {
      case 'EUR':
        setBase('RUB');
        currency.EUR = currency.EUR / currency.RUB;
        currency.USD = 1 / (currency.RUB * currency.USD);
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
        currency.RUB = currency.RUB / currency.EUR;
        currency.USD = currency.EUR / currency.USD;
        currency.EUR = 1;
        break
      case 'USD':
        setBase('EUR');
        currency.RUB = currency.RUB * currency.EUR;
        currency.USD = currency.USD / currency.EUR;
        currency.EUR = 1;
        break
    }
  }

  const getUsd = () => {
    switch(base) {
      case 'RUB':
        setBase('USD');
        currency.RUB = currency.RUB / currency.USD;
        currency.EUR = currency.EUR / currency.RUB;
        currency.USD = 1;
        break
      case 'EUR':
        setBase('USD');
        currency.RUB = currency.RUB * currency.USD;
        currency.EUR = currency.EUR / currency.USD;
        currency.USD = 1;
        break
    }
  }
  

  return (
    <div>
      <h2 className={styles.title}>Текущий курс валют</h2>
      {isLoading ? 'Загрузка данных' :
       ( <div>
          <div className={styles.btns}>
            <button className={classnames([styles.btn], {[styles.active]: base === 'RUB'})} onClick={getRub}>RUB</button>
            <button className={classnames([styles.btn], {[styles.active]: base === 'EUR'})} onClick={getEuro}>EUR</button>
            <button className={classnames([styles.btn], {[styles.active]: base === 'USD'})} onClick={getUsd}>USD</button>
          </div>
          <ul className={styles.list}>
            <li className={classnames([styles.item], {[styles.none]: base === 'EUR'})}>Евро: {currency.EUR}</li>
            <li className={classnames([styles.item], {[styles.none]: base === 'USD'})}>Доллар: {currency.USD}</li>
            <li className={classnames([styles.item], {[styles.none]: base === 'RUB'})}>Рубль: {currency.RUB}</li>
          </ul>
        </div>
       )
      }

    </div>
  );
}

/*<li className={classnames([styles.item], {[styles.none]: base === 'EUR'})}>Евро: {currency.EUR.toFixed(3)}</li>*/

export default Currency;
