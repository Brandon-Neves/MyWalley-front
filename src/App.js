import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles'
import { useState } from 'react'
import AuthContext from './contexts/AuthContext'
import UserContext from './contexts/UserContext'
import { Login, SignUp, UserArea, NewEntry, NewExit } from './pages/index'

function App() {
  const [token, setToken] = useState('')
  const [user, setUser] = useState({})
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/home" element={<UserArea token={token} />} />
            <Route path="/nova-entrada" element={<NewEntry token={token} />} />
            <Route path="/nova-saida" element={<NewExit token={token} />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
