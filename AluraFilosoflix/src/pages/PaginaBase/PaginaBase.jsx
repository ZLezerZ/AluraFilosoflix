import { Outlet } from 'react-router-dom';
import Cabecera from '../../Components/Cabecera/Cabecera.jsx';
// import Contenedor from '../../Components/Contenedor/Contenedor';
import ContextoGlobalProvider from '../../Components/ContextoGlobal/ContextoGlobal.jsx';
import Rodapie from './../../Components/Rodapie/Rodapie';

const PaginaBase = () => {
    return (
        <main>
            <Cabecera />
            <ContextoGlobalProvider>
                    <Outlet></Outlet>
            </ContextoGlobalProvider>
            <Rodapie />
        </main >
    )
}
export default PaginaBase;