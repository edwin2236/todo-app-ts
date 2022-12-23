import { inject, injectable } from 'inversify'
import Todo from '../data/models/todo'
import type { TodoRepository } from '../data/repositories/todoRepository'
import TYPES from '../core/types'

@injectable()
export default class DeleteTodoUseCase {
  #repository: TodoRepository

  constructor(@inject(TYPES.TodoRepository) repository: TodoRepository) {
    this.#repository = repository
  }

  async call(todo: Todo) {
    return this.#repository.delete(todo)
  }
}
