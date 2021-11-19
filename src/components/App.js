import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Calculator from './Calculator/Calculator';
import Currency from './Currency/Currency';
import styles from './App.module.css'

function App() {

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
            <Route path="/" index element={<Currency />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </Router>
      </div>
      </div>
    </div>
  );
}

export default App;