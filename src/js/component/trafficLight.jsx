import React, { useState } from "react";

export const TrafficLight = ()=>{

    const [red, setRed] = useState('')
    const [yellow, setYellow] = useState('')
    const [green, setGreen] = useState('')
    function shadowRed(){
        if(red==''){
            setRed('shadowRed')
            setYellow('')
            setGreen('')
        }else{
            setRed('')
        }
    }
    function lightYellow(){
        if(yellow==''){
            setYellow('shadowYellow')
            setRed('')
            setGreen('')
        }else{
            setYellow('')
        }    
    }
    function lightGreen(){
        if(green==''){
            setGreen('shadowGreen')
            setYellow('')
            setRed('')
        }else{
            setGreen('')
        }
    }
    return (
        <div className="container col-2 bg-black d-flex flex-column justify-content-center align-items-stretch  trafficLight">
            <button className={`btn btn-danger rounded-circle p-3 lh-1 my-1 ${red}`} style={{height: `160px`}} onClick={shadowRed}></button>
            <button className={`btn btn-warning rounded-circle p-3 lh-1 my-1 ${yellow}`} style={{height: `160px`}} onClick={lightYellow}></button>
            <button className={`btn btn-success rounded-circle p-3 lh-1 my-1 ${green}`} style={{height: `160px`}} onClick={lightGreen}></button>
        </div>
    )
}