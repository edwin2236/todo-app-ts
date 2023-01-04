export default {
  TodoRepository: Symbol('TodoRepository'),
}

export interface TodoType {
  id: number
  userId: number
  title: string
  completed: boolean
}

export interface SaveTodoType extends Omit<TodoType, 'id'> {}
