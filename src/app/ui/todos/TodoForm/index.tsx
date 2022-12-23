import { AddCircle as AddCircleIcon } from '@mui/icons-material'
import { IconButton, InputBase } from '@mui/material'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { StyledPaper } from './styles'

type TodoFormProps = {
  onSubmit: (todo: JsonTodoType) => void
}

const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [name, setName] = useState('')

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()

    if (name.trim() !== '') {
      setName('')
      onSubmit({
        userId: 1,
        id: undefined,
        title: name.trim(),
        completed: false,
      })
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <StyledPaper
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="add" type="submit">
        <AddCircleIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add a task"
        inputProps={{ 'aria-label': 'Add a task' }}
        value={name}
        onChange={handleChange}
      />
    </StyledPaper>
  )
}

export default TodoForm
