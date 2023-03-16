import React from "react";
import { convert, toCelsius, toFarhenei } from "../lib/converter";
import TemparatureInput from "./Temparature";
import BoillingVardict from "./BoillingVardict";

export default class Calculator extends React.Component {
    state = {temparature: '', scale: 'c'}

    handleChange = (e, scale) => {
        this.setState({
            temparature: e.target.value,
            scale: scale
        })
    }
    
    render() {
        const {temparature, scale} = this.state
        const celsius = scale === 'f' ? convert(temparature, toCelsius) : temparature
        const fahreneit = scale === 'c' ? convert(temparature, toFarhenei) : temparature
        return (
            <div>
                <TemparatureInput 
                scale='c'
                temparature={celsius}
                onTemperatureChange={this.handleChange}
                />
                <TemparatureInput 
                scale='f'
                temparature={fahreneit}
                onTemperatureChange={this.handleChange}
                />
            <BoillingVardict celsius={parseFloat(temparature)}/>
            </div>
        )
    }
}

