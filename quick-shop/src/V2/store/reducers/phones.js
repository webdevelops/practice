const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'FETCH_PHONES_SUCCESS':
      return payload;

    default:
      return state
  }
};