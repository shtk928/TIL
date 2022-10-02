import Link from 'next/link';
import { useState } from 'react';
import db from '../src/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Create = () => {
  const [title, setTitle] = useState('');

  // async await による非同期処理で firestore でドキュメントが自動生成されるまで待ち、自動生成された後にドキュメントを取得
  const createTodo = async () => {
    const ref = await addDoc(collection(db, 'todos'), {
      title: title,
      status: false,
      timestamp: serverTimestamp()
    });
    console.log(ref.id)
    setTitle('');
  }

  const handleTodoTitle = (e) => {
    setTitle(e.target.value);
  }
  
  return (
    <>
      <form>
        <input type='text' value={title} onChange={handleTodoTitle} />
        <button type='button' onClick={createTodo}>作成</button>
      </form>
      <Link href='/'><button>Home Back</button></Link>
    </>
  )
}

export default Create