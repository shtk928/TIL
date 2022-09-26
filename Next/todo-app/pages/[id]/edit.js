import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { todosState } from '../../components/atoms'
import Link from 'next/link'

const Edit = () => {
  const router = useRouter();
  const [todos, setTodos] = useRecoilState(todosState);
  
  const editTodo = todos.filter((todo) => {
    return todo.id === Number(router.query.id)
  })

  const handleEditTitle = (title) => {
    const foundTodoIndex = todos.findIndex((todo) => todo.id === editTodo[0]?.id)

    const replaceItemAtIndex = (todos, foundTodoIndex, newValue) => {
      return [
        ...todos.slice(0, foundTodoIndex),
        newValue,
        ...todos.slice(foundTodoIndex + 1)
      ];
    }

    setTodos(() => replaceItemAtIndex(todos, foundTodoIndex, {...todos[foundTodoIndex], title: title}))
  }

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
      <div>
        <form>
          <label>title</label>
          <input type='text' value={editTodo[0]?.title} onChange={(e) => handleEditTitle(e.target.value)} />
          <button type='button'>編集完了</button>
          <button type='button'>キャンセル</button>
        </form>
      </div>
      <Link href='/'><button>Home Back</button></Link>
    </>
  )
}

export default Edit