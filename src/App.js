import logo from './logo.svg';
import './App.css';

import * as React from 'react'

function Element({value}){
  const title = value.title;
  const description = value.description;
  console.log("element initiated");
  return (
    <div className="Element">
      <div className="El-header">
        <p>{title}</p>
        <p>"placeholder"</p>
      </div>
      <div className="El-content">
        <p>{description}</p>
      </div>
    </div>
  )
}

function UserInput({count, onCountChange, createDisplay}){

  return (
    <div className="App">
      <form>
        <label htmlFor="count">How many: </label>
        <input value={count} onChange={onCountChange} id="count" />
      </form>
      <button value={count} onClick={createDisplay}>
        Create Display
      </button>
    </div>
  )
}
/*
function Accordion({elements}){

  console.log(...elements);
  return <div>{`This many: ${elements.length}`}</div>

}
*/
function App({initialCount = 1}) {
  const [count, setCount] = React.useState(
    window.localStorage.getItem('count') ?? initialCount
  )
  var dataArray = [tempObj,tempObj,tempObj,tempObj,tempObj,tempObj,tempObj];

  var tempObj = {title:"Here's the title", description:"this is the content"};
  var tempArray = new Array(tempObj, tempObj, tempObj, tempObj, tempObj);

  var elements = [];

  // const [elements, setElements] = React.useState(
  //   window.localStorage.getItem('elements') ?? []
  // )

  React.useEffect(() => {
    window.localStorage.setItem('count', count);
    //window.localStorage.setItem('elements', elements);
  })

  function createDisplay() {
    dataArray = tempArray.slice(0, count);
    console.log("creating display ");
    console.log(dataArray);

    elements = dataArray.map( (item, index) => {
      console.log("elements rendering");
      console.log(item);
      console.log("for index")
      console.log(index)
      //return (<div key={index} >Hello world</div>)
      return (<Element value={ item } />)
    });
    console.log("elements");
    console.log(elements);
  }

  createDisplay();

  return (
      <div className="App-header">
        <UserInput
          count={count}
          onCountChange={event => setCount(event.target.value)}
          createDisplay={createDisplay}
        />
        <div className="App-list">
        {elements}
        </div>
      </div>

  );
}

export default App;
