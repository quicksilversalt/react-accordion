import logo from './logo.svg';
import './App.css';
import { grabData } from './fetchdata.js'
import { useEffect, useState } from 'react'

function Element({ description, title }){
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="Element" onClick={
        () => {
          setIsActive(!isActive)
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

function App() {
  const [count, setCount] = useState(0)
  const [dataList, setDataList] = useState([])

  async function createDisplay() {
    const data = await grabData('https://jsonplaceholder.typicode.com/posts', count)
    setDataList(data);
  }

  const onCountChange = (e) => setCount(e.target.value);

  return (
      <div className="App-header">
        <div className="App">
          <label htmlFor="count">How many: </label>
          <input value={count} onChange={onCountChange} id="count" />
          <button onClick={createDisplay}>
            Create Display
          </button>
        </div>
        <div className="App-list">
          {dataList.map((item) => {
            return <Element key={item.id} description={item.body} title={item.title} />
          })}
        </div>
      </div>

  );
}

export default App;

//implement linter
//style - define accordion better
//
