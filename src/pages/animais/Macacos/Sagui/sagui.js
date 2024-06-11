import SpeciePageComponent from "../../../../componentes/speciePageComponent/speciePageComponent";
import SaguiObj from "../../../../jsObjects/Macacos/sagui.js";

export const Sagui = ( ) =>{
    return(
        <div>
            <SpeciePageComponent
            specieObject = {SaguiObj}/>
        </div>
    )
}

export default Sagui;