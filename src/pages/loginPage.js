import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import StyledLink from '../components/StyledLink'
import StyledButton from '../components/StyledButton'
import StyledInput from '../components/StyledInput'
import AuthContext from '../contexts/AuthContext'
import UserContext from '../contexts/UserContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { setToken } = useContext(AuthContext)
  const { setUser } = useContext(UserContext)

  function handleSubmit(e) {
    e.preventDefault()
    const body = { email, password }

    const promise = api.login(body)
    promise.then(res => {
      setUser({
        name: res.data.name,
        password: res.data.password
      })
      setToken(res.data.token)
      res.data.name === null ? navigate('/subscriptions') : navigate('/home')
    })
    promise.catch(() => {
      alert('Erro, senha ou usário incorreto ou não cadastrado')
    })
  }

  return (
    <LoginPage>
      <h1>MyWallet</h1>
      <form onSubmit={handleSubmit} action="">
        <StyledInput
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <StyledInput
          type="password"
          value={password}
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <StyledButton type="submit">Entrar</StyledButton>
      </form>
      <StyledLink to="/cadastro">Não possuí uma conta? Cadastre-se</StyledLink>
    </LoginPage>
  )
}

const LoginPage = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  h1 {
    font-family: 'Saira Stencil One', cursive;
    display: flex;
    color: #fff;
    margin-bottom: 28px;
    font-size: 32px;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    font-size: 14px;
  }
`
