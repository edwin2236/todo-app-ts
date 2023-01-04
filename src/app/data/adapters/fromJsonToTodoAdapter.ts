import { TodoType } from 'app/core/types'

export default function fromJsonToTodoAdapter(json: TodoType): TodoType {
  return {
    id: json.id,
    userId: json.userId,
    title: json.title,
    completed: json.completed,
  }
}
