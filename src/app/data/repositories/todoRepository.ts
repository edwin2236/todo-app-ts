import { SaveTodoType, TodoType } from 'app/core/types'

export interface TodoRepository {
  getAll: () => Promise<TodoType[]>
  add: (todo: SaveTodoType) => Promise<TodoType>
  update: (todo: TodoType) => Promise<TodoType>
  delete: (todo: TodoType) => Promise<TodoType>
}
