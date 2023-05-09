import logo from './logo.svg';
import './App.css';
import {grabData} from './fetchdata.js'

import * as React from 'react'

function Element({value}){
  console.log('from element')
  console.log(value)
  const [isActive, setActive] = React.useState(false);
  const title = "hello"//value.title;
  const description = "world"//value.body;
  return (
    <div className="Element" onClick={
        () => {
          setActive(!isActive)
        }
      }>
      <div className="El-header">
        <p>{title}</p>
      </div>
      <div className={isActive ? 'content-active': 'content-hidden'} >
        <p>{description}</p>
      </div>
    </div>
  )
}

function UserInput({count, onCountChange, createDisplay}){
  const [canSubmit, setCanSubmit] = React.useState(false);

  function onButtonClick(){

  }
  function onValueChange(){
    console.log('value changed')
    console.log(count)
  }

  return (
    <div className="App">
      <form>
        <label htmlFor="count">How many: </label>
        <input value={count} onChange={onValueChange} id="count" />
      </form>
      <button disabled={canSubmit} value={count} onClick={onButtonClick}>
        Create Display
      </button>
    </div>
  )
}
function App({initialCount = 1}) {

  const [count, setCount] = React.useState(initialCount)

  //var dataArray = [];
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
  ;

  function createDisplay() {
    //dataArray = tempArray.slice(0, count);
    dataArray = grabData('https://jsonplaceholder.typicode.com/posts', 3).then(
      console.log('promise returned'),
      console.log(dataArray),
      elements = dataArray.map( (item, index) => {
        console.log('building elements')
        return (<Element key={ index } value={ item } />)
      }),
    )


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
