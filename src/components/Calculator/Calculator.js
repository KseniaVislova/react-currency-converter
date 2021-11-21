import { React } from "react";
import styles from './Calculator.module.css'
import classnames from "classnames";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import  * as actions from '../../store/actions/actions';


const Calculator = ({counts, outputRub, outputEuro, outputUsd, inputRub, inputEuro, inputUsd}) => {
  console.log(counts)
  function handleChange(e) {
    if (counts.outputCurrency === counts.inputCurrency) {
      counts.count1 = counts.count2
    }
  }

  return (
    <div>
      {counts.isLoading ? 'Загрузка данных' :
        (<div>
          <div className={styles.inputs}>
            <div>
              <div className={styles.btns}>
                <button className={classnames([styles.btn], {[styles.active]: counts.inputCurrency === 'RUB'})} onClick={inputRub}>RUB</button>
                <button className={classnames([styles.btn], {[styles.active]: counts.inputCurrency === 'EUR'})} onClick={inputEuro}>EUR</button>
                <button className={classnames([styles.btn], {[styles.active]: counts.inputCurrency === 'USD'})} onClick={inputUsd}>USD</button>
              </div>
              <input className={styles.input}
                value={counts.count1}
                onChange={handleChange} />
            </div>
            <div>
              <div className={styles.btns}>
                <button className={classnames([styles.btn], {[styles.active]: counts.outputCurrency === 'RUB'})} onClick={outputRub}>RUB</button>
                <button className={classnames([styles.btn], {[styles.active]: counts.outputCurrency === 'EUR'})} onClick={outputEuro}>EUR</button>
                <button className={classnames([styles.btn], {[styles.active]: counts.outputCurrency === 'USD'})} onClick={outputUsd}>USD</button>
              </div>
              <input className={styles.input}
              value={counts.count2}
              onChange={handleChange} />
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({ counts: state.reducer_2 })

const mapDispatchToProps = dispatch => bindActionCreators(
  actions,
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
