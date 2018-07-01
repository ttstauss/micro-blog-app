import filtersReducer from '../../reducers/filters'

describe('FILTERS REDUCER', () => {
  test('should set up default filter values', () => {
    const action = { type: '@@INIT' }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
      text: '',
      sortBy: 'date',
    })
  })

  test('should set text filter', () => {
    const text = 'text'
    const action = {
      type: 'SET_TEXT_FILTER',
      text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toEqual(text)
  })

  test('should set sortBy to date', () => {
    const currentState = {
      text: '',
      sortBy: 'title'
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toEqual('date')
  })

  test('should set sortBy to title', () => {
    const action = { type: 'SORT_BY_TITLE' }
    const state = filtersReducer(undefined, action)
    expect(state.sortBy).toEqual('title')
  })
})