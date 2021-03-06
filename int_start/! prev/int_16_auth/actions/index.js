import {
  FETCH_PHONES_REQUEST,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_REQUEST,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONE_BY_ID_REQUEST,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONE_BY_ID_FAILURE,
  ADD_PHONE_TO_BASKET,
  SEARCH_PHONE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  REMOVE_PHONE_FROM_BASKET,
  CLEAR_BASKET
} from "actions/actionTypes"

import {
  fetchMockPhones as fetchPhonesApi,
  loadMoreMockPhones as loadMorePhonesApi,
  fetchMockPhone as fetchPhoneByIdApi,
  fetchMockCategories as fetchCategoriesApi
} from 'api'

import { getRenderedPhonesLength } from 'selectors'

export const fetchPhones = () => async dispatch => {
  dispatch({
    type: FETCH_PHONES_REQUEST
  })

  try {
    const phones = await fetchPhonesApi()
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const loadMorePhones = () => async (dispatch, setState) => {
  const offset = getRenderedPhonesLength(setState())
  dispatch({
    type: LOAD_MORE_PHONES_REQUEST
  })

  try {
    const phones = await loadMorePhonesApi({ offset })
    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const fetchPhoneById = id => async dispatch => {
  dispatch({
    type: FETCH_PHONE_BY_ID_REQUEST
  })

  try {
    const phone = await fetchPhoneByIdApi(id)
    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONE_BY_ID_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const addPhoneToBasket = id => dispatch => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
  })
}

export const searchPhone = value => dispatch => {
  dispatch({
    type: SEARCH_PHONE,
    payload: value
  })
}

export const fetchCategories = () => async dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_REQUEST
  })

  try {
    const categories = await fetchCategoriesApi()
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories
    })
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const removePhoneFromBasket = id => dispatch => {
  dispatch({
    type: REMOVE_PHONE_FROM_BASKET,
    payload: id
  })
}

export const clearBasket = () => dispatch => {
  dispatch({
    type: CLEAR_BASKET
  })
}

export const phonesCheckout = phones => () => {
  alert(JSON.stringify(phones))
}