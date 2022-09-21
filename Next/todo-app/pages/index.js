import Link from 'next/link';
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { todosState } from '../components/atoms';

const Home = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  // todo 削除
  const onClickDelete = (index) => {
    const newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray);
  }
  // filter メソッドで削除 実装

  // todos 監視
  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
      <Link href='/create'><button>作成する</button></Link>
      <div>
        <div>
          {todos?.map((todo, index) => (
            <ul key={todo.id}>
              <li>タイトル：<Link href={`/${todo.id}`}>{todo.title}</Link></li>
              <li>進捗：{todo.status}</li>
              <Link href='/edit'><button index='1'>編集</button></Link>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home