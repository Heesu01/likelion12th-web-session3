import React, { useState } from 'react';
import './login.css';
import Introduction from './Introduction.jsx';

const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

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
    <div>
      {isLogin ? (
        <Introduction />
      ) : (
        <div className="contain">
          <h1>Login</h1>
          <div className="inputbox">
            <input onChange={saveId} type="text" className="login_input" placeholder="ID" />
            <input onChange={savePw} className="login_input"  type="password" placeholder="Password" />
            <button onClick={handleLogin} type="button">로그인</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
