import { inject, injectable } from 'inversify'
import type { TodoRepository } from 'app/data/repositories/todoRepository'
import TYPES, { SaveTodoType, TodoType } from 'app/core/types'

@injectable()
export default class AddTodoUseCase {
  private readonly repository: TodoRepository

  constructor(@inject(TYPES.TodoRepository) repository: TodoRepository) {
    this.repository = repository
  }

  async call(todo: SaveTodoType): Promise<TodoType> {
    return await this.repository.add(todo)
  }
}
