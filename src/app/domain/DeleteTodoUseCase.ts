import { inject, injectable } from 'inversify'
import type { TodoRepository } from 'app/data/repositories/todoRepository'
import TYPES, { TodoType } from 'app/core/types'

@injectable()
export default class DeleteTodoUseCase {
  private readonly repository: TodoRepository

  constructor(@inject(TYPES.TodoRepository) repository: TodoRepository) {
    this.repository = repository
  }

  async call(todo: TodoType): Promise<TodoType> {
    return await this.repository.delete(todo)
  }
}
