const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_CATEGORIES_SUCCESS':
      const newValues = {}
      payload.map(category => newValues[category.id] = category)
      return { ...state, ...newValues }

    default:
      return state
  }
}