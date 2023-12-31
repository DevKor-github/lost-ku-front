import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";


const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0; /* Reset default margin */
    padding: 0; /* Reset default padding */
  }
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: -150px;
`

const Title = styled.h1`
  font-size: 40px; 
  margin: 20px auto;
`

const Box = styled.form`
  width: 300px;
  padding: 20px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Email = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  box-sizing: border-box;
`

const Password = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  box-sizing: border-box;
`

const Name = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  box-sizing: border-box;
`

const Button = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin: 10px 0;
  font-size: 16px;
  text-align: center;
  background-color: rgb(134, 38, 51);
  color: white;
  font-family: 'Pretendard-SemiBold', sans-serif;

  &:hover {
    color: black;
    background-color: #E2E2E2;
    border: 1px solid #ccc;
  }
`

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const [name, setName] = useState('');

  const RegisterFunc = (e) => {
    e.preventDefault();
    if (!email) {
      return alert('이메일을 입력해주세요.')
    } 
    else if (!password) {
      return alert('비밀번호를 입력해주세요.')
    }
    else if (!checkPw) {
      return alert('비밀번호를 확인해주세요.')
    }
    else if (!name) {
      return alert('닉네임을 입력해주세요.')
    }
    else if (password !== checkPw) {
      return alert('비밀번호를 다시 확인해주세요.')
    }
  }

  return (
    <>
      <GlobalStyle />
      <Background>
        <Container>
          <Title>회원가입</Title>
          <Box onSubmit={RegisterFunc}>
            <Email type='email' placeholder='(학교) 이메일*' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Password type='password' placeholder='비밀번호*' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Password type='password' placeholder='비밀번호 확인*' value={checkPw} onChange={(e) => setCheckPw(e.target.value)} />
            <Name type='text' placeholder='닉네임*' value={name} onChange={(e) => setName(e.target.value)}/>
            <Button type="submit">회원가입</Button>
          </Box>
        </Container>
      </Background>
    </>
  )
}

export default Register;