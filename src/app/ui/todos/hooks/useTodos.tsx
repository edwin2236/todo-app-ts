import { useEffect, useState } from 'react'
import { TodoRepository } from 'app/data/repositories/todoRepository'
import container from 'app/di/inversify.config'
import AddTodoUseCase from 'app/domain/AddTodoUseCase'
import GetAllTodosUseCase from 'app/domain/GetAllTodosUseCase'
import TYPES, { SaveTodoType, TodoType } from 'app/core/types'

type UseTodosReturnType = {
  todos: TodoType[]
  addTodo: (todo: SaveTodoType) => Promise<void>
  deleteTodo: (todoId: number) => void
}

export default function useTodos(): UseTodosReturnType {
  const [todos, setTodos] = useState<TodoType[]>([])
  const getAllTodosUseCase = new GetAllTodosUseCase(
    container.get<TodoRepository>(TYPES.TodoRepository)
  )
  const addTodoUseCase = new AddTodoUseCase(
    container.get<TodoRepository>(TYPES.TodoRepository)
  )

  const sortDesc = (a: TodoType, b: TodoType): number => {
    if (a.id > b.id) return -1
    if (a.id < b.id) return 1
    return 0
  }

  useEffect(() => {
    getAllTodosUseCase
      .call()
      .then((resp) => {
        resp.sort(sortDesc)
        setTodos(resp)
      })
      .catch(() => {
        console.log('error..')
      })
  }, [])

  const addTodo = async (todo: SaveTodoType): Promise<void> => {
    await addTodoUseCase.call(todo).then((todo) => {
      const list = [...todos, todo]
      list.sort(sortDesc)
      setTodos(list)
    })
  }

  const deleteTodo = (todoId: number): void => {
    setTodos(todos.filter((item) => item.id !== todoId))
  }

  return {
    todos,
    addTodo,
    deleteTodo,
  }
}
