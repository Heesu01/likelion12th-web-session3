import React, { Fragment, useState } from 'react';
import './login.css';
import Introduction from './Introduction.jsx';
import { UserInfo } from './user.info.js';

localStorage.setItem('UserInfo', JSON.stringify(UserInfo));
const storedUserInfo = JSON.parse(localStorage.getItem('UserInfo'));

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const saveId = (e) => {
    setId(e.target.value);
  };

  const savePw = (e) => {
    setPw(e.target.value);
  };

  const handleLogin = () => {
    if (id === storedUserInfo.id && pw === storedUserInfo.password) {
      setIsLogin(true); 
    } else {
      alert('ID 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <Fragment>
      {isLogin ? (
        <Introduction />
      ) : (
        <div className="contain">
          <h1>Login</h1>
          <form className="inputbox">
            <input onChange={saveId} type="text" className="login_input" placeholder="ID" />
            <input onChange={savePw} className="login_input"  type="password" placeholder="Password" />
            <button onClick={handleLogin} type="button">로그인</button>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default Login;
