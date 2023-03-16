import React from "react";


const ScaleNames = {
    c: 'Celsurs',
    f: 'Fahrengeit'
}

export default function TemparatureInput ({temparature, scale, onTemperatureChange}) {
        return (
            <fieldset>
                <legend>Enter temparature in {ScaleNames[scale]}:</legend>
                <input 
                type='text'
                value={temparature}
                onChange={(e)=>onTemperatureChange(e, scale)}/>
            </fieldset>
        )
    }