import { useEffect, useState } from 'react'
import TYPES from '../../../core/types'
import Todo from '../../../data/models/todo'
import { TodoRepository } from '../../../data/repositories/todoRepository'
import container from '../../../di/inversify.config'
import AddTodoUseCase from '../../../domain/AddTodoUseCase'
import GetAllTodosUseCase from '../../../domain/GetAllTodosUseCase'

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const getAllTodosUseCase = new GetAllTodosUseCase(
    container.get<TodoRepository>(TYPES.TodoRepository)
  )
  const addTodoUseCase = new AddTodoUseCase(
    container.get<TodoRepository>(TYPES.TodoRepository)
  )

  const sortDesc = (a: Todo, b: Todo) => {
    if (a.id > b.id) return -1
    if (a.id < b.id) return 1
    return 0
  }

  useEffect(() => {
    getAllTodosUseCase.call().then((resp) => {
      resp.sort(sortDesc)
      setTodos(resp)
    })
  }, [])

  const addTodo = async (todo: JsonTodoType) => {
    addTodoUseCase.call(todo).then((todo) => {
      const list = [...todos, todo]
      list.sort(sortDesc)
      setTodos(list)
    })
  }

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter((item) => item.id !== todoId))
  }

  return {
    todos,
    addTodo,
    deleteTodo,
  }
}
