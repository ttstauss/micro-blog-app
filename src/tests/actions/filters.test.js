import {
  setTextFilter,
  sortByDate,
  sortByTitle
} from '../../actions/filters'

describe('FILTERS ACTIONS', () => {
  describe('FILTERS', () => {
    test('should generate set text filter action object with text value', () => {
      const text = 'Test string'
      const action = setTextFilter(text)
      expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
      })
    })

    test('should generate set text filter action object with default text value', () => {
      const action = setTextFilter()
      expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
      })
    })

    test('should generate sort by date action object', () => {
      expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
    })

    test('should generate sort by title action object', () => {
      expect(sortByTitle()).toEqual({ type: 'SORT_BY_TITLE' })
    })
  })
})