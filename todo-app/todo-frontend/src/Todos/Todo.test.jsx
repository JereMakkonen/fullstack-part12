import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import Todo from './Todo.jsx'

test('renders content', () => {
  const todo = {
    text: 'test content',
    done: false,
  }

  render(<Todo todo={todo} />)

  let element = screen.getByText('test content')
  expect(element).toBeDefined()
  element = screen.getByText('This todo is not done')
  expect(element).toBeDefined()
})
