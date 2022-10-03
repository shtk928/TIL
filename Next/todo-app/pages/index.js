import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import db from '../src/firebase';
import { collection, deleteDoc, doc, getDocs, onSnapshot, serverTimestamp, updateDoc } from "firebase/firestore";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [edittingTodo, setEdittingTodo] = useState({});
  const [editTodoId, setEditTodoId] = useState('');

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
    setEdittingTodo({title: editTodo.data().title, status: editTodo.data().status});
    setEditTodoId(editTodo.id);
  }

  const onClickEditComplete = async (editTodo) => {
    await updateDoc(doc(db, 'todos', `${editTodo.id}`), {
      title: edittingTodo.title,
      status: edittingTodo.status,
      timestamp: serverTimestamp()
    });
    setIsEdit(false);
    setEditTodoId('');
  }

  const onClickEditCancel = () => {
    setIsEdit(false);
    setEditTodoId('');
  }

  const onClickDelete = async (deleteTodo) => {
    await deleteDoc(doc(db, 'todos', `${deleteTodo.id}`));
  }

  useEffect(() => {
    console.log(edittingTodo);
  }, [edittingTodo])

  return (
    <>
      <Link href='/create'><button>作成する</button></Link>
      <div>
        <div>
          {todos?.map((todo) => {
            return (
              <ul key={todo.id}>
                {isEdit && todo.id === editTodoId ? 
                  <>
                    <form>
                      <label>title : </label>
                      <input type='text' value={edittingTodo.title} onChange={(e) => setEdittingTodo({...edittingTodo, title: e.target.value})} />
                      <br/>
                      <label>status : </label>
                      <button type='button' onClick={() => setEdittingTodo({...edittingTodo, status: !edittingTodo.status})}>{edittingTodo.status ? '完了' : '未完了'}</button>
                    </form>
                    <button type='button' onClick={() => onClickEditComplete(todo)}>完了</button>
                    <button type='button' onClick={() => onClickEditCancel()}>キャンセル</button>
                  </>
                  : 
                  <>
                    <li>title : {todo.data().title}</li>
                    <li>status : {todo.data().status ? '完了' : '未完了'}</li>
                    <button type='button' onClick={() => onClickEdit(todo)}>編集</button>
                  </>
                }
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