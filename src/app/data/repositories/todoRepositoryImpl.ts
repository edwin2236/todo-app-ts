import { injectable } from 'inversify'
import Router from 'app/core/utils/router'
import { SaveTodoType, TodoType } from 'app/core/types'
import fromJsonToTodoAdapter from 'app/data/adapters/fromJsonToTodoAdapter'
import { TodoRepository } from 'app/data/repositories/todoRepository'

import 'reflect-metadata'

const BASE_URL: string = import.meta.env.VITE_TODO_API_BASE_URL

@injectable()
export class TodoRepositoryImpl implements TodoRepository {
  async getAll(): Promise<TodoType[]> {
    return await fetch(BASE_URL + Router.todosApi)
      .then(async (response) => await response.json())
      .then((data: TodoType[]) =>
        data.map((item) => fromJsonToTodoAdapter(item))
      )
  }

  async add(todo: SaveTodoType): Promise<TodoType> {
    return await fetch(BASE_URL + Router.todosApi, {
      method: 'POST',
      body: JSON.stringify(todo),
    })
      .then(async (response) => await response.json())
      .then((resp) => {
        const newObj = { ...todo, id: resp.id }
        return fromJsonToTodoAdapter(newObj)
      })
  }

  async update(todo: TodoType): Promise<TodoType> {
    return await fetch(
      BASE_URL + Router.todosWithIdApi.replace(':id', todo.id.toString()),
      {
        method: 'PUT',
        body: JSON.stringify(todo),
      }
    ).then(() => todo)
  }

  async delete(todo: TodoType): Promise<TodoType> {
    return await fetch(
      BASE_URL + Router.todosWithIdApi.replace(':id', todo.id.toString()),
      { method: 'DELETE' }
    ).then(() => todo)
  }
}
