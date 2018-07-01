import moment from 'moment'

export default [{
  id: '1',
  title: 'How to React',
  body: 'Post #1 body',
  createdAt: '0'
}, {
  id: '2',
  title: '10 React Basics Every Developer Should Know',
  body: 'Post #2 body',
  createdAt: moment(0).subtract(7, 'days').valueOf()
}, {
  id: '3',
  title: 'A Day in the Life of a Developer',
  body: 'Post #3 body',
  createdAt: moment(0).add(7, 'days').valueOf()
}]