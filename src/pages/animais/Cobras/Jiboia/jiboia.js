import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import JiboiaObj from "../../../../jsObjects/Cobras/cobrasJiboia.js";

export const Jiboia = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {JiboiaObj}/>
        </div>
    )
}

export default Jiboia;