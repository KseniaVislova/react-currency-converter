import styles from './Currency.module.css'
import classnames from "classnames";

function Currency(props) {
  console.log(props.getEuro)

  return (
    <div>
      <h2 className={styles.title}>Текущий курс валют</h2>
      {props.isLoading ? 'Загрузка данных' :
      ( <div>
        <div className={styles.btns}>
          <button className={classnames([styles.btn], {[styles.active]: props.base === 'RUB'})} onClick={props.getRub}>RUB</button>
          <button className={classnames([styles.btn], {[styles.active]: props.base === 'EUR'})} onClick={props.getEuro}>EUR</button>
          <button className={classnames([styles.btn], {[styles.active]: props.base === 'USD'})} onClick={props.getUsd}>USD</button>
        </div>
        <ul className={styles.list}>
          <li className={classnames([styles.item], {[styles.none]: props.base === 'EUR'})}>Евро: {props.currency.EUR.toFixed(3)}</li>
          <li className={classnames([styles.item], {[styles.none]: props.base === 'USD'})}>Доллар: {props.currency.USD.toFixed(3)}</li>
          <li className={classnames([styles.item], {[styles.none]: props.base === 'RUB'})}>Рубль: {props.currency.RUB.toFixed(3)}</li>
        </ul>
      </div>
     )}
    </div>
  );
}

export default Currency;
