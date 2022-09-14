import { useForm } from 'react-hook-form';
import './App.css';

function App() {

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => console.log('onSubmit:', data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input {...register('firstName', { maxLength: 15, required: true })} />
        {errors.firstName?.type === 'required' && <p>名は入力必須です</p>}
        {errors.firstName?.type === 'maxLength' && <p>15文字以内で入力してください</p>}
        <br />
        <label>Last Name</label>
        <input {...register('lastName', { maxLength: 15, required: true })} />
        {errors.lastName?.type === 'required' && <p>姓は入力必須です</p>}
        {errors.lastName?.type === 'maxLength' && <p>15文字以内で入力してください</p>}
        <br />
        <label>Email</label>
        <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/ })} />
        {errors.email?.type === 'required' && <p>メールアドレスは必須です</p>}
        {errors.email?.type === 'pattern' && <p>正しいメールアドレスの形式で入力してください</p>}
        <br />
        <label>nickName</label>
        <input {...register('nickName', { required: true })} />
        {errors.nickName && <p>ニックネームを入力してください</p>}
        <br />
        <label>age</label>
        <input {...register('age', { required: true })} />
        {errors.age && <p>年齢を入力してください</p>}
        <br />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}

export default App;