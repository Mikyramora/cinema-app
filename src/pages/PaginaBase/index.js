
import Container from "components/Container"
import Pie from "components/Pie/pie"

import Cabecera from "components/cabecera/cabecera"
import FavoritoProvider from "context/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase() {
    return (
        <main>
            <Cabecera/>
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Pie/>
        </main>
    )
}

export default PaginaBase