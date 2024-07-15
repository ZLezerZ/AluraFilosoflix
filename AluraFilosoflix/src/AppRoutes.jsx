import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBase from './pages/PaginaBase/PaginaBase'
import Inicio from './pages/Inicio/Inicio'
import NuevoVideo from './pages/NuevoVideo/NuevoVideo'
import Player from './pages/Player/Player'
import NoFunciona from './pages/NoFunciona/NoFunciona'

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="nuevoVideo" element={<NuevoVideo />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NoFunciona />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
