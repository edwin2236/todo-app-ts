import { Container } from '@mui/material'
import useTodos from 'app/ui/todos/hooks/useTodos'
import TodoForm from 'app/ui/todos/TodoForm'
import TodoItem from 'app/ui/todos/TodoItem'

export default function TodoPage(): JSX.Element {
  const { todos, addTodo, deleteTodo } = useTodos()

  return (
    <Container maxWidth="sm">
      <TodoForm onSubmit={addTodo} />
      <div>
        {todos.map((item) => (
          <TodoItem key={item.id} initialValue={item} onDelete={deleteTodo} />
        ))}
      </div>
    </Container>
  )
}
