"use client"
import React from 'react'
import zxcvbn from 'zxcvbn'

const CheckPass = ({ password }) => {
    const testresult = zxcvbn(password)
    const num = testresult.score * 100/4;

    const createPassLabel = ()=>{
        switch(testresult.score){
            case 0:
                return 'No';
            case 1:
                return 'Weak';
            case 2:
                return 'Can be Better';
            case 3:
                return 'All Most There'; 
            case 4:
                return 'Strong';  
            default:
                return 'none';
        }
    }

    const funcProgressColor = ()=>{
        switch(testresult.score){
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#9b1158';
            case 3:
                return '#9bc158'; 
            case 4:
                return '#00b500';  
            default:
                return 'none';
        }

    }    

    

const changePassColor = ()=>({
    width:`${num}%`,
    background : funcProgressColor(),
    height: '7px'
})
      return (
    <>
    <div className='progress' style={{height: '7px'}}>
        <div className='progress-bar ' style={changePassColor()}></div>
    </div>
    <p className='flex justify-end' style={ {color:funcProgressColor()}} >{createPassLabel()}</p>
   
    </>
  )
}

export default CheckPass
