import Link from 'next/link';
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { todosState } from '../components/atoms';

const Home = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  // splice メソッドで削除
  // const onClickDelete1 = (index) => {
  //   const newArray = [...todos];
  //   newArray.splice(index, 1);
  //   setTodos(newArray);
  // }
  
  // filter メソッドで削除
  const onClickDelete2 = (foundTodo) => {
    const newArray = todos.filter((todo) => {
      return todo.id !== foundTodo.id
    })
    setTodos(newArray)
  }

  // useEffect(() => {
  //   console.log(todos)
  // }, [todos])

  return (
    <>
      <Link href='/create'><button>作成する</button></Link>
      <div>
        <div>
          {todos?.map((todo, index) => (
            <ul key={todo.id}>
              <li>タイトル：<Link href={`/${todo.id}`}>{todo.title}</Link></li>
              <li>進捗：{todo.status}</li>
              <Link href={`/${todo.id}/edit`}><button>編集</button></Link>
              {/* spliceメソッド使用 */}
              {/* <button onClick={() => onClickDelete(index)}>削除</button> */}
              {/* filterメソッド使用 */}
              <button onClick={() => onClickDelete2(todo)}>削除</button>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home