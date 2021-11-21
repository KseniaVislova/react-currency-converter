import {React, useState} from "react";
import styles from './Calculator.module.css'
import classnames from "classnames";

const Calculator = (props) => {
  const [count, setCount] = useState(0);

  function handleChange(e) {
    setCount(e.target.value)
  }

  console.log(props)

  return (
    <div>
      {props.isLoading ? 'Загрузка данных' :
        (<div>
          <div className={styles.btns}>
            <button className={classnames([styles.btn], {[styles.active]: props.base === 'RUB'})} >RUB</button>
            <button className={classnames([styles.btn], {[styles.active]: props.base === 'EUR'})} >EUR</button>
            <button className={classnames([styles.btn], {[styles.active]: props.base === 'USD'})} >USD</button>
          </div>
        <fieldset>
          <legend>Введите число:</legend>
          <input
            value={count}
            onChange={handleChange} />
          <div>{parseFloat(count)}</div>
        </fieldset>
        </div>
      )}
    </div>
  );
}

//<button className={classnames([styles.btn], {[styles.active]: props.base === 'USD'})} onClick={props.getUsd}>USD</button>

export default Calculator;