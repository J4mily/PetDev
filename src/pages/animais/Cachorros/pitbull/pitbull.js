import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import cachorroPitbullObj from "../../../../jsObjects/cachorroPitbullObj";

export const Pitbull = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {cachorroPitbullObj}/>
        </div>
    )
}

export default Pitbull;