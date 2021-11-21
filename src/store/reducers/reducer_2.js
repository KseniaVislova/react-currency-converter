const initialState = {//для разработки
  count1: '',
  count2: '',
  inputCurrency: 'RUB',
  outputCurrency: 'EUR'
};

const reducer = (state = initialState, action) => {
switch (action.type) {
  case 'OUTPUT_RUB': 
    return {
      ...state,
      outputCurrency: 'RUB'
    };

  case 'OUTPUT_USD': 
    return {
      ...state,
      outputCurrency: 'USD'
    };

  case 'OUTPUT_EUR': 
    return {
      ...state,
      outputCurrency: 'EUR'
    };

  case 'INPUT_RUB': 
    return {
      ...state,
      inputCurrency: 'RUB'
    };

  case 'INPUT_USD': 
    return {
      ...state,
      inputCurrency: 'USD'
    };

  case 'INPUT_EUR': 
    return {
      ...state,
      inputCurrency: 'EUR'
    };

  default:
  return {...state};
};
};

export default reducer;
