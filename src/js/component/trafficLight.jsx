import React, { useState } from "react";

export const TrafficLight = ()=>{

    const [red, setRed] = useState('')
    const [yellow, setYellow] = useState('')
    const [green, setGreen] = useState('')
    const [violet, setViolet] = useState('none')
    let random =1;
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

    function initRandom(){
        setInterval(()=>{
           if(random===1){
            setGreen('shadowGreen')
            setYellow('')
            setRed('')
            random=2
           } 
           else if(random===2){
            setYellow('shadowYellow')
            setRed('')
            setGreen('')
            random=3
           }
            else if(random===3){
            setRed('shadowRed')
            setYellow('')
            setGreen('')
            random =1
        }
        },1000)
    }
   function lightViolet(){
    if(violet==='none'){
        alert(`Se agregara violeta`)
        setViolet('flex')
    } else{setViolet(`none`)}
   }
    return (
        <>
            <button className="col-2 btn btnRandom" onClick={initRandom}>Random</button>
            <button className="col-2 btn btnViolet"  onClick={lightViolet}>Violet</button>
            <div className="container col-2 bg-black d-flex flex-column justify-content-center align-items-stretch  trafficLight" style={{width:`170px`}}>
                <button className={`btn btn-danger rounded-circle p-3 lh-1 my-1 ${red}`} style={{height: `160px`}} onClick={shadowRed}></button>
                <button className={`btn btn-warning rounded-circle p-3 lh-1 my-1 ${yellow}`} style={{height: `160px`}} onClick={lightYellow}></button>
                <button className={`btn btn-success rounded-circle p-3 lh-1 my-1 ${green}`} style={{height: `160px`}} onClick={lightGreen}></button>
                <button className={`btn rounded-circle p-3 lh-1 my-1 `} style={{height: `160px`, display: `${violet}`, backgroundColor: `violet`}}></button>
            </div>
        </>
    )
}