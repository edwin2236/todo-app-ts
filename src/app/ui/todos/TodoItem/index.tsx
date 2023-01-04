import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import TYPES, { TodoType } from 'app/core/types'
import { TodoRepository } from 'app/data/repositories/todoRepository'
import container from 'app/di/inversify.config'
import DeleteTodoUseCase from 'app//domain/DeleteTodoUseCase'
import UpdateTodoUseCase from 'app/domain/UpdateTodoUseCase'
import { StyledCard, StyledTypography } from './styles'

type TodoItemProps = {
  initialValue: TodoType
  onDelete: (todoId: number) => void
}

function TodoItem({ initialValue, onDelete }: TodoItemProps): JSX.Element {
  const [todo, setTodo] = useState(initialValue)
  const label = { inputProps: { 'aria-label': todo.title } }

  const updateTodoUseCase = new UpdateTodoUseCase(
    container.get<TodoRepository>(TYPES.TodoRepository)
  )
  const deleteTodoUseCase = new DeleteTodoUseCase(
    container.get<TodoRepository>(TYPES.TodoRepository)
  )

  const handleChange = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const newValue = { ...todo, completed: event.target.checked }
    await updateTodoUseCase.call(newValue).then(() => {
      setTodo(newValue)
    })
  }

  const handleDelete = async (): Promise<void> => {
    await deleteTodoUseCase.call(todo).then(() => {
      onDelete(todo.id)
    })
  }

  return (
    <StyledCard elevation={0}>
      <Checkbox
        {...label}
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<CheckBoxIcon />}
        checked={todo.completed}
        onChange={handleChange}
        sx={{
          color: '#fc76a1',
          '&.Mui-checked': {
            color: '#fc76a1',
          },
        }}
      />
      <StyledTypography
        variant="body1"
        completed={todo.completed ? 'completed' : null}
      >
        {todo.title}
      </StyledTypography>
      <IconButton color="error" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </StyledCard>
  )
}

export default TodoItem
