import { inject, injectable } from 'inversify'
import type { TodoRepository } from '../data/repositories/todoRepository'

@injectable()
export default class GetAllTodosUseCase {
  #repository: TodoRepository

  constructor(@inject('TodoRepository') repository: TodoRepository) {
    this.#repository = repository
  }

  async call() {
    return this.#repository.getAll()
  }
}
