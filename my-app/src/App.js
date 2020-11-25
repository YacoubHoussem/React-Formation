import './App.css';
import  React from "react"
import Welcome from './welcome';
import WelcomeClass from './welcomeClass';
import Clock from './Clock';
import YellowTime from './YellowTime';
import IncDec from './incDec';



function App() {
  const firstName = 'Houssem'
  const lastName = 'YACOUB'
  const hello = (
    <h1>
      Hello {firstName + ' ' + lastName}
    </h1>
  );

  const hello2 = (
    <h1>
      Hello {firstName + ' ' + lastName}
    </h1>
  )

  const hello3 = (
    <h1>
      Hello {firstName + ' ' + lastName}
    </h1>
  )

  const hello4 = <Welcome firstName="Hous" lastName="YACOUB"> </Welcome>
  const hello5 = <WelcomeClass name="YCB"> </WelcomeClass>
  const result =
    <React.Fragment>
      {hello}
      <hr />
      {hello2}
      <hr/>
      {hello4}
      <hr/>
      {hello5}
      <hr/>
      <Clock/>
      <hr/>
      <YellowTime theDate={new Date()}></YellowTime>
      <hr/>
      <IncDec></IncDec>
      </React.Fragment>
  return (result);
}

export default App;
