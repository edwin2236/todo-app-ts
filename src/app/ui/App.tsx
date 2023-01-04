import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'Components/Header'
import TodoPage from 'app/ui/todos/TodoPage'
import AboutPage from 'app/ui/about/AboutPage'
import BlogPage from 'app/ui/blog/BlogPage'
import UserPage from 'app/ui/users/UserPage'
import Router from 'app/core/utils/router'

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path={Router.todos} element={<TodoPage />} />
        <Route path={Router.about} element={<AboutPage />} />
        <Route path={Router.blog} element={<BlogPage />} />
        <Route path={Router.users} element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}
