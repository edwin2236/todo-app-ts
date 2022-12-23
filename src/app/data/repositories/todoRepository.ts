import Todo from '../models/todo'

export interface TodoRepository {
  getAll(): Promise<Todo[]>
  add(todo: JsonTodoType): Promise<Todo>
  update(todo: Todo): Promise<Todo>
  delete(todo: Todo): Promise<Todo>
}
