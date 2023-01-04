import { inject, injectable } from 'inversify'
import type { TodoRepository } from 'app/data/repositories/todoRepository'
import { TodoType } from 'app/core/types'

@injectable()
export default class GetAllTodosUseCase {
  private readonly repository: TodoRepository

  constructor(@inject('TodoRepository') repository: TodoRepository) {
    this.repository = repository
  }

  async call(): Promise<TodoType[]> {
    return await this.repository.getAll()
  }
}
