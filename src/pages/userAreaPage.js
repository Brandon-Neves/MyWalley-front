import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import styled from 'styled-components'
import AuthContext from '../contexts/AuthContext'
import axios from 'axios'
import logoutImg from '../assets/Vector.png'
import backgroundImg from '../assets/Vector-3.png'
import entryImg from '../assets/Vector-1.png'
import exitImg from '../assets/Vector-2.png'

export default function UserArea() {
  const { user } = useContext(UserContext)
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()

  function logout() {
    navigate('/')
  }

  function payment() {
    navigate('/nova-entrada')
  }

  function downPayment() {
    navigate('/nova-saida')
  }

  return (
    <Container>
      <Header>
        <h1>Olá, {user.name}</h1>
        <Logo>
          <img src={logoutImg} onClick={logout} alt="" />
        </Logo>
      </Header>

      <Main></Main>

      <ContainerButton>
        <button>
          <ContainerImg>
            <img src={backgroundImg} alt="" />
            <img src={entryImg} onClick={payment} alt="" />
          </ContainerImg>
          Nova entrada
        </button>
        <button>
          <ContainerImg>
            <img src={backgroundImg} alt="" />
            <img src={exitImg} onClick={downPayment} alt="" />
          </ContainerImg>
          Nova saída
        </button>
      </ContainerButton>
    </Container>
  )
}

const Container = styled.div`
  color: #fff;
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 18px 20px;
  }
`
const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  img:first-child {
    background-color: #a328d6;
    position: absolute;
    z-index: 0;
  }
  img:last-child {
    background-color: #a328d6;
    position: relative;
    z-index: 1;
  }
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 25px;
  width: 95%;
`
const Logo = styled.div`
  img {
    width: 90%;
  }
`
const Main = styled.div`
  width: 90%;
  height: 446px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 auto;
  overflow-y: hidden;
  overflow-y: scroll;
  position: relative;
  margin-bottom: 15px;
`

const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
`
const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 95%;
  margin-bottom: 8px;
  border-radius: 8px;
  height: 52px;
  font-weight: 700;
  color: #fff;
  background-color: #ff4791;
`

const ContainerButton = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0 15px;
  button {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-start;
    font-size: 17px;
    width: 43%;
    margin: 0 0 8px 0;
    border-radius: 5px;
    height: 114px;
    font-weight: 700;
    color: #fff;
    background-color: #a328d6;
    cursor: pointer;
  }
`
