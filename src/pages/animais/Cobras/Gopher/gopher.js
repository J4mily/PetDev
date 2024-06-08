import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import GopherObj from "../../../../jsObjects/Cobras/cobrasCornSnake.js";

export const Gopher = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {GopherObj}/>
        </div>
    )
}

export default Gopher;