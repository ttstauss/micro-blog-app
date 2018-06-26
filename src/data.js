import uuid from 'uuid'

const data = [{
  id: uuid(),
  title: 'Setting up webpack',
  body: 'Body text for setting up webpack',
  createdAt: 0
}, {
  id: uuid(),
  title: 'Creating a Node Server',
  body: 'Body text for creating a node server',
  createdAt: -1000000
}, {
  id: uuid(),
  title: 'Using JSX in React',
  body: 'Body text for using JSX in React',
  createdAt: 1000000
}]

export default data