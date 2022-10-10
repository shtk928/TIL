import React, { useState } from 'react'

interface Props {
  text: string
}

interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({ id: 1, name: 'dummy' });
  const [inputData, setInputData] = useState('');

  // 引数（e）の型を指定 onChange の箇所にホバーすると自動で出てくるのでコピー
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  }

  return (
    <div>
      <h1>{ props.text }</h1>
      <h1>{ count }</h1>
      <h1>{`id :${user.id} と name :${user.name}`}</h1>
      <input type='text' value={inputData} onChange={handleInputChange} />
      <h1>{inputData}</h1>
    </div>
  )
}

export default TestComponent;