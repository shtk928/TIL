import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil';
import { todosState } from '../components/atoms';

const Detail = () => {
  const router = useRouter();
  const todos = useRecoilValue(todosState);

  const todo = todos.filter((todo) => {
    return todo.id === Number(router.query.id)
  })

  return (
    <>
      <div>
        <ul>
          <li>タイトル：{todo[0]?.title}</li>
          <li>進捗：{todo[0]?.status}</li>
        </ul>
      </div>

      <Link href='/'><button>Home Back</button></Link>
    </>
  )
}

export default Detail