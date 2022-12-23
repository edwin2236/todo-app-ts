import { injectable } from 'inversify'
import Router from '../../core/utils/router'
import fromJsonToTodoAdapter from '../adapters/fromJsonToTodoAdapter'
import Todo from '../models/todo'
import { TodoRepository } from './todoRepository'
import 'reflect-metadata'

const BASE_URL = import.meta.env.VITE_TODO_API_BASE_URL

@injectable()
export class TodoRepositoryImpl implements TodoRepository {
  async getAll() {
    return fetch(BASE_URL + Router.todosApi)
      .then((response) => response.json())
      .then((data: JsonTodoType[]) =>
        data.map((item) => fromJsonToTodoAdapter(item))
      )
  }

  async add(todo: JsonTodoType): Promise<Todo> {
    return await fetch(BASE_URL + Router.todosApi, {
      method: 'POST',
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((resp) => {
        todo.id = resp.id
        return fromJsonToTodoAdapter(todo)
      })
  }

  async update(todo: Todo): Promise<Todo> {
    return fetch(
      BASE_URL + Router.todosWithIdApi.replace(':id', todo.id.toString()),
      {
        method: 'PUT',
        body: JSON.stringify(todo),
      }
    ).then(() => todo)
  }

  async delete(todo: Todo): Promise<Todo> {
    return fetch(
      BASE_URL + Router.todosWithIdApi.replace(':id', todo.id.toString()),
      { method: 'DELETE' }
    ).then(() => todo)
  }
}
