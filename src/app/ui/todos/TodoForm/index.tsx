import { AddCircle as AddCircleIcon } from '@mui/icons-material'
import { IconButton, InputBase } from '@mui/material'
import { ChangeEvent, FormEvent, useState } from 'react'
import { StyledPaper } from './styles'
import { SaveTodoType } from 'app/core/types'

type TodoFormProps = {
  onSubmit: (todo: SaveTodoType) => Promise<void>
}

const TodoForm = ({ onSubmit }: TodoFormProps): JSX.Element => {
  const [name, setName] = useState('')

  const handleSubmit = async (
    event: FormEvent<HTMLInputElement>
  ): Promise<void> => {
    event.preventDefault()

    if (name.trim() !== '') {
      setName('')
      await onSubmit({
        userId: 1,
        title: name.trim(),
        completed: false,
      })
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
