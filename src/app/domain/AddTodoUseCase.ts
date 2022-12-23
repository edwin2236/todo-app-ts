import { inject, injectable } from 'inversify'
import type { TodoRepository } from '../data/repositories/todoRepository'
import TYPES from '../core/types'

@injectable()
export default class AddTodoUseCase {
  #repository: TodoRepository

  constructor(@inject(TYPES.TodoRepository) repository: TodoRepository) {
    this.#repository = repository
  }

  async call(todo: JsonTodoType) {
    return this.#repository.add(todo)
  }
}
