import React, { useState, useEffect } from 'react'
import './App.css';
import { Button } from './Component/Button/Button';
import { Display } from './Component/Display/Display';
import Big from 'big.js';

const App = () => {
  const [value, setValue] = useState("0");
  const [history, setHistory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [view, setView] = useState("0");
  const [total, setTotal] = useState(true)
  const [sight, setSight] = useState("")
  const [calc, setCalc] = useState("")
  const [clear, setClear]= useState(false)
  

  useEffect(() => {
    setView(value)
  }, [value])

  const handleButtonPress = (content, equiv)=>()=>{
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


    if(calc ===""&&content==='%') return
    if(calc ===""&&content==='=') return
    if ( calc===""){
        setCalc(equiv)
    }
    else if (total===true){
        setCalc(value + equiv)
    }
    else if ((calc[calc.length-1] ==="." ) && (equiv==="." )){
        setCalc(calc)
    }
    else if (operator && equiv==="."){
        setCalc(calc + '.')
    }
    else if((operator && content==="+")){
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
    else setCalc(calc + equiv)
    
     console.log("value:"+value+ "/calc:" + calc + "/sight:" + sight + "/view:" +view)

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
          setSight(sight.substr(0,sight.length-1))
          setCalc(calc.substr(0,calc.length-1))
          
          setClear(true)
          setValue(value.substr(0,value.length-1))
          if((operator===null)&&(value.length===1 || value[value.length-1]==="0")){
            setTotal(true)
          }
          else if(value.length===1 && operator!==null){
            setOperator(null)
            setValue(history.toString())
            setHistory(null)
          }
          else if(total===true){
            setSight(value.substr(0,value.length-1))
          }
          console.log(value.length)
          // if(calc[calc.length-2]&&calc[calc.length-2] ==='+'){
          //   setClear(false)
          //   setOperator(true)
          //   setHistory(parseFloat(calc.substring(0, calc.indexOf("+"))))
          //   setValue(calc.substring(calc.indexOf("+")))
          // }else{
          //   setOperator(null)
          //   setHistory(null)
          //   setValue(calc.substr(0,calc.length-1))
          //   setClear(true)
          // }
          
          
        return 
      case "C":
        setValue("0")
        setHistory(null)
        setOperator(null)
        setSight("")
        setCalc("")
        return 
      case "%":
        setValue((num/100).toString())
        setHistory(null)
        setOperator(null)
        setTotal(true)
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
        if(calc==="")return
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
        setCalc(calc)
        return 
      default:
        break;
    }
    if(value[value.length-1]=== "."){
      setValue(value + content)
    }else{
      setValue(parseFloat(value + content).toString())
      // setView(Big(parseFloat(value + content)).toString())
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
                                    <Display value={value} view={view} total={total} sight={sight} calc={calc} history={history}/>     
                                </div>
                            </div>
                            <div className="swipe">
                                <span className="swipper" ></span>
                            </div>
                        </div>
                        <div className="keypad">
                                <div className="buttons">
                                    <Button onButtonClick ={handleButtonPress} content ="C" equiv="C" type = "function"/>
                                    <Button onButtonClick ={handleButtonPress} content ="#" equiv="#"  type = "function"/>
                                    <Button onButtonClick ={handleButtonPress} content ="÷" equiv="/"  type = "operator"/>
                                    <Button onButtonClick ={handleButtonPress} content ="×" equiv="*"  type = "operator"/>
                                    <Button onButtonClick ={handleButtonPress} content ="7" equiv="7" />
                                    <Button onButtonClick ={handleButtonPress} content ="8" equiv="8" />
                                    <Button onButtonClick ={handleButtonPress} content ="9" equiv="9" />
                                    <Button onButtonClick ={handleButtonPress} content ="−" equiv="-"  type = "operator"/>
                                    <Button onButtonClick ={handleButtonPress} content ="4" equiv="4" />
                                    <Button onButtonClick ={handleButtonPress} content ="5" equiv="5" />
                                    <Button onButtonClick ={handleButtonPress} content ="6" equiv="6" />
                                    <Button onButtonClick ={handleButtonPress} content ="+" equiv="+"  type = "operator"/>
                                    <Button onButtonClick ={handleButtonPress} content ="1" equiv="1" />
                                    <Button onButtonClick ={handleButtonPress} content ="2" equiv="2" />
                                    <Button onButtonClick ={handleButtonPress} content ="3" equiv="3" />
                                    <Button onButtonClick ={handleButtonPress} content ="=" equiv="=" />
                                    <Button onButtonClick ={handleButtonPress} content ="%" equiv="%"  type = "function"/>
                                    <Button onButtonClick ={handleButtonPress} content ="0" equiv="0" />
                                    <Button onButtonClick ={handleButtonPress} content ="." equiv="." />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
