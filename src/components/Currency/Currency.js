import styles from './Currency.module.css'
import classnames from "classnames";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import  * as actions from '../../store/actions/actions';

function Currency({rates, getRub, getEuro, getUsd}) {

  return (
    <div>
      <h2 className={styles.title}>Текущий курс валют</h2>
      {rates.isLoading ? 'Загрузка данных' :
      ( <div>
        <div className={styles.btns}>
          <button className={classnames([styles.btn], {[styles.active]: rates.base === 'RUB'})} onClick={getRub}>RUB</button>
          <button className={classnames([styles.btn], {[styles.active]: rates.base === 'EUR'})} onClick={getEuro}>EUR</button>
          <button className={classnames([styles.btn], {[styles.active]: rates.base === 'USD'})} onClick={getUsd}>USD</button>
        </div>
        <ul className={styles.list}>
          <li className={classnames([styles.item], {[styles.none]: rates.base === 'EUR'})}>Евро: {rates.rates.EUR.toFixed(3)}</li>
          <li className={classnames([styles.item], {[styles.none]: rates.base === 'USD'})}>Доллар: {rates.rates.USD.toFixed(3)}</li>
          <li className={classnames([styles.item], {[styles.none]: rates.base === 'RUB'})}>Рубль: {rates.rates.RUB.toFixed(3)}</li>
        </ul>
      </div>
     )}
    </div>
  );
}

const mapStateToProps = (state) => ({ rates: state.reducer })

const mapDispatchToProps = dispatch => bindActionCreators(
  actions,
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currency);
