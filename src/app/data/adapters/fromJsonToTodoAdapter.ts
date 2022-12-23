import Todo from '../models/todo'

export default function fromJsonToTodoAdapter(json: JsonTodoType): Todo {
  return new Todo(json.id!, json.userId, json.title, json.completed)
}
