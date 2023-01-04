import { Container } from 'inversify'
import { TodoRepository } from 'app/data/repositories/todoRepository'
import { TodoRepositoryImpl } from 'app/data/repositories/todoRepositoryImpl'
import TYPES from 'app/core/types'

const container = new Container()
container.bind<TodoRepository>(TYPES.TodoRepository).to(TodoRepositoryImpl)

export default container
