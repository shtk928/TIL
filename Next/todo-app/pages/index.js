import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import db from '../src/firebase';
import { collection, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  // useEffectを使用 リロード時に、一度だけデータを取得
  useEffect(() => {
    const todoData = collection(db, 'todos');
    getDocs(todoData).then((snapShot) => {
      setTodos(snapShot.docs);
    });
    
    // リアルタイムでデータを取得・監視
    onSnapshot(todoData, (todo) => {
      setTodos(todo.docs);
    });
  }, []);

  const onClickEdit = (editTodo) => {
    setIsEdit(true);
  }

  const onClickDelete = async (deleteTodo) => {
    await deleteDoc(doc(db, 'todos', `${deleteTodo.id}`));
  }

  return (
    <>
      <Link href='/create'><button>作成する</button></Link>
      <div>
        <div>
          {todos?.map((todo) => {
            return (
              <ul key={todo.id}>
                <li>title : {todo.data().title}</li>
                <li>status : {todo.data().status ? '完了' : '未完了'}</li>
                <button type='button'>編集</button>
                <button type='button' onClick={() => onClickDelete(todo)}>削除</button>
              </ul>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home