import { Container } from 'inversify'
import { TodoRepository } from '../data/repositories/todoRepository'
import { TodoRepositoryImpl } from '../data/repositories/todoRepositoryImpl'
import TYPES from '../core/types'

let container = new Container()
container.bind<TodoRepository>(TYPES.TodoRepository).to(TodoRepositoryImpl)

export default container
