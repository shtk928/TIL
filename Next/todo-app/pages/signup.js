import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { app } from '../src/firebase';
import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useAuthContext } from '../src/context/AuthContext';

const Signup = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user } = useAuthContext();
  const isLoggedIn = !!user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    router.push('/');
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onClickLogout = async () => {
    await signOut(auth);
    await router.push('/login');
  }

  // ログインしているユーザーをconsoleに表示
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    }
  }, [])

  return (
    <>
      <div open={isLoggedIn}>
        <p>すでにログインしています</p>
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
          <button type='submit'>登録</button>
        </div>

        <div>
          すでに登録している人は<Link href='/login'><a style={{color: 'skyblue'}}>こちら</a></Link>
        </div>

      </form>

      <div>
        <button onClick={onClickLogout}>ログアウト</button>
      </div>
    </>
  )
}

export default Signup