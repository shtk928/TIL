import Link from 'next/link';
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todosState } from '../components/atoms'
import db from '../src/firebase';
import { addDoc, collection, getDocs, serverTimestamp} from 'firebase/firestore'

const Create = () => {
  const [title, setTitle] = useState('');
  const setTodos = useSetRecoilState(todosState)

  // const createTodo = () => {
  //   setTodos((oldTodos) => [
  //     ...oldTodos,
  //     {
  //       id: getId(),
  //       title: title,
  //       isComplete: false
  //     }
  //   ]);
  //   setTitle('');
  // }

  // const createTodo = () => {
  //   const todoData = collection(db, 'todos');
  //   setDoc(todoData, {
  //     id: getId(),
  //     title: title,
  //   });
  //   setTitle('');
  // }

  const createTodo = () => {
    addDoc(collection(db, "todos"), {
      title: title,
      timestamp: serverTimestamp()
    });
  }

  const updateTodoTitle = (e) => {
    setTitle(e.target.value);
  }
  
  return (
    <>
      <form>
        <input type='text' value={title} onChange={updateTodoTitle} />
        <button type='button' onClick={createTodo}>作成</button>
      </form>
      <Link href='/'><button>Home Back</button></Link>
    </>
  )
}

export default Create

// 一意のid
let id = 1;
const getId = () => {
  return id++;
}