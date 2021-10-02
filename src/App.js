import React, { useState} from 'react'
import './App.css';
import { Button } from './Component/Button/Button';
import { Display } from './Component/Display/Display';
import Big from 'big.js';

const App = () => {
  const [value, setValue] = useState("0");
  const [history, setHistory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(true)
  const [sight, setSight] = useState("")
  
  const handleButtonPress = (content)=>()=>{
     if(sight ===""&&content==='%') return
     if(sight ===""&&content==='=') return
     if (sight ===""){
          setSight(content)
      }
      else if (total===true){
           setSight(value + content)
      }  
      else if ((sight[sight.length-1] ==="." ) && (content==="." )){
          setSight(sight)
      }
      else if (operator && content==="."){
          setSight(sight + '.')
      }
     else if(operator && content==="+"){
          return
     }
     else if(operator && content==="÷"){
          return
      }
      else if(operator && content==="−"){
           return
      }
      else if(operator && content==='×'){
        return
       }   
      else setSight(sight + content)

    const num = parseFloat(value)
    const operatorCheck = ()=>{
      if(operator){
        if(operator ==='+'){
          setHistory((history + num))
        }else if (operator === "−"){
          setHistory((history - num))
        }else if (operator === "×"){
          setHistory((history * num))
        }else if (operator === "÷"){
          setHistory((history / num))
        }
      }else{
        setHistory(num)
        setTotal(false)
      }
    }
    
    switch (content) {
      case "#":  
          setTotal(false)
          if(value.length!==1){
            setSight(sight.substr(0,sight.length-1))
            setValue(value.substr(0,value.length-1))
          }
          else if(value.length===1){
            setValue("")
            setSight(sight.substr(0,sight.length-1))
          }
          else{
            setValue(value.substr(0,value.length-1))
            setSight(sight.substr(0,sight.length-1))
          }

          if(operator && value===""){
            setValue(history.toString())
            setHistory(null)
            setOperator(null)
          }
          else if(operator && value!=="") {
            setValue(value.substr(0,value.length-1))
          }
          if(total===true){
            setSight(value.substr(0,value.length-1))
          }
         
        return 
      case "C":
        setValue("0")
        setHistory(null)
        setOperator(null)
        setSight("")
        return 
      case "%":
        setValue((num/100).toString())
        setHistory(null)
        setOperator(null)
        setTotal(true)
        setSight(value + "%")
        return
      case '+':
        operatorCheck()
        setValue("")
        setOperator('+')
        
        return
      case '×':
        operatorCheck()
        setValue("")
        setOperator("×")
        return
      case '÷':
        operatorCheck()
        setValue("")
        setOperator('÷')
        return
      case '−':
        operatorCheck()
        setValue("")
        setOperator('−')
        return
      case '.':
        if(value.includes("."))return;
        setValue(value + ".")
        return
      case '=':
        if( sight ==="")return
        if(!operator)return
        if(operator ==='+'){
          setValue((Big(history).plus(num)).toString())
        }else if (operator === "−"){
          setValue((Big(history).minus(num)).toString())
        }else if (operator === "×"){
          setValue((Big(history).times(num)).toString())
        }else if (operator === "÷"){
          setValue((Big(history).div(num)).toString())
        }
        setOperator(null)
        setHistory(null)
        setTotal(true)
        setSight(sight)
        return 
      default:
        break;
    }
    if(value[value.length-1]=== "."){
      setValue(value + content)
    }else{
      setValue(parseFloat(value + content).toString())
    }
    }
    
    return (
        <div>
            <div className="box">
                <div className="container">
                    <div className="wrapper">
                        <div className="part1">
                            <div className="header">
                                <span className="clock">
                                  <i className="fa fa-history" ></i>
                                </span>
                            </div>
                            <div className="display">
                                <div className="display-port"> 
                                    <Display value={value} total={total} sight={sight}/>     
                                </div>
                            </div>
                            <div className="swipe">
                                <span className="swipper" ></span>
                            </div>
                        </div>
                        <div className="keypad">
                                <div className="buttons">
                                    <Button onButtonClick ={handleButtonPress} content ="C" type = "function"/>
                                    <Button onButtonClick ={handleButtonPress} content ="#" type = "function"/>
                                    <Button onButtonClick ={handleButtonPress} content ="÷" type = "operator"/>
                                    <Button onButtonClick ={handleButtonPress} content ="×" type = "operator"/>
                                    <Button onButtonClick ={handleButtonPress} content ="7"/>
                                    <Button onButtonClick ={handleButtonPress} content ="8"/>
                                    <Button onButtonClick ={handleButtonPress} content ="9"/>
                                    <Button onButtonClick ={handleButtonPress} content ="−" type = "operator"/>
                                    <Button onButtonClick ={handleButtonPress} content ="4"/>
                                    <Button onButtonClick ={handleButtonPress} content ="5"/>
                                    <Button onButtonClick ={handleButtonPress} content ="6"/>
                                    <Button onButtonClick ={handleButtonPress} content ="+" type = "operator"/>
                                    <Button onButtonClick ={handleButtonPress} content ="1"/>
                                    <Button onButtonClick ={handleButtonPress} content ="2"/>
                                    <Button onButtonClick ={handleButtonPress} content ="3"/>
                                    <Button onButtonClick ={handleButtonPress} content ="="/>
                                    <Button onButtonClick ={handleButtonPress} content ="%" type = "function"/>
                                    <Button onButtonClick ={handleButtonPress} content ="0"/>
                                    <Button onButtonClick ={handleButtonPress} content ="."/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
