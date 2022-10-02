import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import db from '../src/firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

const Detail = () => {
  const router = useRouter();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoData = collection(db, 'todos');
    getDocs(todoData).then((snapShot) => {
      setTodos(snapShot.docs.map((doc) =>  ({ ...doc.data() })));
    });

    // リアルタイムでデータを取得
    onSnapshot(todoData, (todo) => {
      setTodos(todo.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  const todo = todos.filter((todo) => {
    return todo.id === router.query.id
  })

  return (
    <>
      <div>
        <ul>
          <li>タイトル：{todo[0]?.title}</li>
          <li>進捗：{todo[0]?.status ? '完了' : '未完了'}</li>
        </ul>
      </div>

      <Link href='/'><button>Home Back</button></Link>
    </>
  )
}

export default Detail