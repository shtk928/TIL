import HomeStyles from '../styles/Home.module.css'

import React, { useEffect, useState } from 'react'

const Home = () => {
  const [todo, setTodo] = useState({title: '', status: ''});
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    const array = todos;
    const newArray = ([...array, todo])
    setTodos(newArray);
    setTodo({title: '', status: ''});
  }

  // title 更新
  const updateTodoTitle = (e) => {
    setTodo({...todo, title: e.target.value});
  }

  // status 更新
  const updateTodoStatus = (e) => {
    setTodo({...todo, status: e.target.value});
  }

  // todo 削除
  const onClickDelete = (index) => {
    const newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray);
  }

  // todo 監視
  useEffect(() => {
    console.log(todo)
  }, [todo])

  // todos 監視
  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
      <div>
        <div>
          {todos.map((todo, index) => (
            <ul key={index}>
              <li>タイトル：{todo.title}</li>
              <li>進捗：{todo.status}</li>
              <button>編集</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </ul>
          ))}
        </div>

        <form>
          <input type='text' value={todo.title} onChange={updateTodoTitle} />
          <select value={todo.status} onChange={updateTodoStatus}>
            <option value=''>進捗を選択</option>
            <option value='未着手'>未着手</option>
            <option value='着手中'>着手中</option>
            <option value='完了'>完了</option>
          </select>
          <button type='button' onClick={createTodo}>作成</button>
        </form>
      </div>
    </>
  )
}

export default Home