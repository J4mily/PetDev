import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import GatoAngoraObj from "../../../../jsObjects/gatoAngoraObj";

export const Angora = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {GatoAngoraObj}/>
        </div>
    )
}

export default Angora;