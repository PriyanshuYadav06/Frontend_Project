import { useState } from 'react'
import './App.css'
import Line from './components/Line'
import Circle from './components/Circle'
import Info from './components/Info'
import Button from './components/Button'
function App() {
  const [step, setStep] = useState(1);
  const HandelNextClick = () => {
    if(step===5) return;
    setStep(step + 1);
  } 
  const HandelPrevClick = () => {
    if(step===1) return;
    setStep(step - 1);
  } 
  return (
    <>
     <div className='container'>
           <Line step={step} />
            <div className="circle-container">
                  <Circle className="first circleCon" text="Contact Details" number={1} 
                   extraClass={`${step === 1 ? 'incomplete' : ''}`} 

                   isCompleted={`${step >1 ? 'complete' : ''}`} 
                  
                   />
                  <Circle className="sec circleCon" text="Shipping Address" number={2}
                  extraClass={`${step === 2 ? 'incomplete' : ''}
                  `}
                  isCompleted={`${step >2 ? 'complete' : ''}`}
                  />
                  <Circle   className="third circleCon" text="Payment" number={3}
                  extraClass={`${step === 3 ? 'incomplete' : ''}`}
                  isCompleted={`${step >3 ? 'complete' : ''}`}
                  />
                  <Circle className="last circleCon" text="Delivered" number={4}
                  extraClass={`${step === 4 ? 'incomplete' : ''}`}
                  isCompleted={`${step >4 ? 'complete' : ''}`}
                  />
          </div>
          <Info innerText={(step===1 && "Add contact details for further communications.") || (step===2 && "Add shipping address for successful delivery.") || (step===3 && "Complete Payment to complete the order.") || (step===4 && "Ready to get delivered!") || (step===5 && "Order Delivered successfully!🎉") }/>
          <div className="btns">
                <Button Text="Previous"  onClick={HandelPrevClick} />
                <Button Text={step<5? "Next" : "Finish" } onClick={HandelNextClick}/>
          </div>
           
     </div>
    </>
  )
}

export default App
