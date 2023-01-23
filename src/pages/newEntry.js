import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import styled from 'styled-components'

export default function NewEntry() {
  const { token } = useContext(UserContext)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const navigate = useNavigate()

  function createEntryMoney(e) {
    e.preventDefault()

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .post(
        `${process.env.REACT_APP_URL}/nova-entrada`,
        { value, description, type: 'input' },
        config
      )
      .then(() => {
        navigate('/home')
      })
      .catch(err => console.log(err.response.data))
  }

  return (
    <Container>
      <Header>
        <h1>Nova Entrada</h1>
      </Header>
      <Inputs>
        <form onClick={createEntryMoney}>
          <input
            data-test="registry-amount-input"
            onChange={e => setValue(e.target.value)}
            value={value}
            type="number"
            step=".01"
            placeholder="Valor"
            required
          ></input>
          <input
            data-test="registry-name-input"
            onChange={e => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Descrição"
            required
          ></input>
          <button data-test="registry-save" type="submit">
            Salvar Entrada
          </button>
        </form>
      </Inputs>
    </Container>
  )
}

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
`

const Header = styled.div`
  margin: 35px 0 0 15px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-weight: 700;
  font-size: 26px;
`

const Inputs = styled.div`
  width: 326px;
  margin: 40px auto;
  text-align: center;
  input {
    margin-top: 13px;
    width: 326px;
    height: 58px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid #d4d4d4;
    padding: 12px;
    font-size: 20px;
    ::placeholder {
      font-size: 20px;
      color: #000000;
    }
  }
  button {
    width: 326px;
    height: 46px;
    font-size: 20px;
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    margin-top: 13px;
    background-color: #a328d6;
    border: none;
    border-radius: 5px;
  }
`
