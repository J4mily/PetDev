import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import CanarioBelgaObj from "../../../../jsObjects/passaroCanarioBelgaObj";

export const CanarioBelga = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {CanarioBelgaObj}/>
        </div>
    )
}

export default CanarioBelga;