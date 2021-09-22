import './App.css';
import {Display} from './component/Display/Display';
import {Buttons} from "./component/Buttons/Buttons";
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("0");
  const [history, setHistory] = useState(null);
  const [operator, setOperator] = useState(null);


  
  const handleButtonPress = (content)=>()=>{
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
      }
    }

    switch (content) {
      case "AC":
        setValue("0")
        setHistory(null)
        setOperator(null)
        return 
      case "C":
        setValue("0")
        setHistory(null)
        setOperator(null)
        return 
      case "±":
        setValue((num* -1).toString())
        return
      case "%":
        setValue((num/100).toString())
        setHistory(null)
        setOperator(null)
        return
      case '+':
        operatorCheck()
        setValue("0")
        setOperator('+')
        return
      case '×':
        operatorCheck()
        setValue("0")
        setOperator("×")
        return
      case '÷':
        operatorCheck()
        setValue("0")
        setOperator('÷')
        return
      case '−':
        operatorCheck()
        setValue("0")
        setOperator('−')
        return
      case '.':
        if(value.includes("."))return;
        setValue(value + ".")
        return
      case '=':
        if(!operator)return
        if(operator ==='+'){
          setValue((history + num).toString())
        }else if (operator === "−"){
          setValue((history - num).toString())
        }else if (operator === "×"){
          setValue((history * num).toString())
        }else if (operator === "÷"){
          setValue((history / num).toString())
        }
        setOperator(null)
        setHistory(null)
        return 
      default:
        break;
    }
    if(value[value.length-1]=== "."){
      setValue(value + content)
    }else{
      setValue(parseFloat((num + content)).toString())
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <Display value={value} setValue={setValue}/>
        <div className="buttons">
          <Buttons onButtonClick = {handleButtonPress} content = {parseFloat(value)>0?'C':'AC'} type = "function"/>
          <Buttons onButtonClick = {handleButtonPress} content ="±" type = "function"/>
          <Buttons onButtonClick = {handleButtonPress} content ="%" type = "function"/>
          <Buttons onButtonClick = {handleButtonPress} content ="÷" type = "operator"/>
          <Buttons onButtonClick = {handleButtonPress} content ="7"/>
          <Buttons onButtonClick = {handleButtonPress} content ="9"/>
          <Buttons onButtonClick = {handleButtonPress} content ="8"/>
          <Buttons onButtonClick = {handleButtonPress} content ="×" type = "operator"/>
          <Buttons onButtonClick = {handleButtonPress} content ="4"/>
          <Buttons onButtonClick = {handleButtonPress} content ="6"/>
          <Buttons onButtonClick = {handleButtonPress} content ="5"/>
          <Buttons onButtonClick = {handleButtonPress} content ="−" type = "operator"/>
          <Buttons onButtonClick = {handleButtonPress} content ="1"/>
          <Buttons onButtonClick = {handleButtonPress} content ="2"/>
          <Buttons onButtonClick = {handleButtonPress} content ="3"/>
          <Buttons onButtonClick = {handleButtonPress} content ="+" type = "operator"/>
          <Buttons onButtonClick = {handleButtonPress} content ="0"/>
          <Buttons onButtonClick = {handleButtonPress} content ="."/>
          <Buttons onButtonClick = {handleButtonPress} content ="="/>
        </div>
      </div>
    </div>
  );
}
 
export default App;
