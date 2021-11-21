const initialState = {//для разработки
  base: 'EUR',
  rates: {
    EUR: 1,
    USD: 1.135609,
    RUB: 83.04369
  },
  isLoading: false, //при переписывании на получение с API заменить
};

const reducer = (state = initialState, action) => {
switch (action.type) {
  case 'GET_RUB': 
    if (state.base === 'EUR'){
      state.rates.USD = state.rates.EUR / (state.rates.RUB * state.rates.USD); //верно
      state.rates.EUR = state.rates.EUR / state.rates.RUB; //верно
      state.rates.RUB = 1;
    } else if (state.base === 'USD') {
      state.rates.USD = 1 / (state.rates.USD * state.rates.RUB);
      state.rates.EUR = 1 / (state.rates.EUR * state.rates.RUB);
      state.rates.RUB = 1;
    }

    return {
      ...state,
      base: 'RUB',
    };

  case 'GET_EURO': 
    if (state.base === 'RUB') {
      state.rates.RUB = state.rates.RUB / state.rates.EUR; //верно
      state.rates.USD = state.rates.EUR / state.rates.USD;
      state.rates.EUR = 1;
    } else if (state.base === 'USD') {
      state.rates.RUB = state.rates.RUB * state.rates.EUR; // верно
      state.rates.USD = state.rates.USD / state.rates.EUR; //верно
      state.rates.EUR = 1;
    }

    return {
      ...state,
      base: 'EUR',
    };
  
  case 'GET_USD': 
    if (state.base === 'RUB') {
      state.rates.RUB = state.rates.RUB / state.rates.USD; //верно
      state.rates.EUR = state.rates.USD / state.rates.EUR;
      state.rates.USD = 1;
    } else if (state.base === 'EUR') {
      state.rates.RUB = state.rates.RUB * state.rates.USD; // верно
      state.rates.EUR = state.rates.EUR / state.rates.USD; //верно
      state.rates.USD = 1;
    }

    return {
      ...state,
      base: 'USD',
    };

  default:
  return {...state};
};
};

export default reducer;
