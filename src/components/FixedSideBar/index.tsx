import * as S from "./styles"
import { useLocation } from "react-router-dom";
export function FixedSideBar(){
    const location = useLocation();
    const isPageHome = location.pathname === "/" || location.pathname === "/titulos";
    return(
        <S.FixedSideBar isPageHome={isPageHome}>
<p>Culinária</p>
<ul>
    <li>
     <a href="/titulos" >Tópicos</a> 
        
    </li>
    <li>
        <a href="/descricao">Descrição</a>
    </li>
</ul>

        </S.FixedSideBar>
    )
}