import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { app } from '../src/firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useAuthContext } from '../src/context/AuthContext';


const Login = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user } = useAuthContext();
  const isLoggedIn = !!user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    router.push('/');
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  // ログインしているユーザーをconsoleに表示
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    }
  })

  return (
    <>
      <div open={!isLoggedIn}>
        <p>ログインしてください</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input type='email' onChange={handleChangeEmail} />
        </div>

        <div>
          <label>パスワード</label>
          <input type='password' onChange={handleChangePassword} />
        </div>

        <div>
          <button type='submit'>ログイン</button>
        </div>

        <div>
          まだ登録していない方は<Link href='/signup'><a style={{color: 'skyblue'}}>こちら</a></Link>
        </div>
      </form>
    </>
  )
}

export default Login