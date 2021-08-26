import { Button, Card, TextField } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { useAuth } from './AuthContext';

type UserInfo = {
  username: string;
  password: string;
};

function Login(): React.ReactElement {
  const [, setAuth] = useAuth();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: '',
    password: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUserInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  }

  async function handleSubmit() {
    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(userInfo),
    });
    if (response.ok) {
      const data = await response.text();
      setAuth(data);
    }
  }

  return (
    <div>
      <Card style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="username"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
            style={{ width: 200 }}
          />
          <TextField
            label="password"
            name="password"
            type="password"
            value={userInfo.password}
            onChange={handleChange}
            style={{ width: 200 }}
          />
          <Button onClick={handleSubmit} style={{ width: 200 }}>
            anmelden
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Login;
