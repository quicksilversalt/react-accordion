import './App.css';
import { grabData } from './fetchdata.js'
import { useEffect, useState } from 'react'

function Element({ description, title, indx }){
  const [isActive, setIsActive] = useState(false);
  const [isUnseen, setIsUnseen] = useState(true);

  return (
    <div className="Element grey-box" onClick={
        () => {
          setIsActive(!isActive);
          setIsUnseen(false);
        }
      }>
      <div className="El-header">
        <span className={`header-number ${isUnseen ? "" : "item-seen"}`}>{indx}</span><span>{title}</span>
      </div>
      <div className={`El-content ${isActive ? "content-active" : "content-hidden"}`} >
        <span>{description}</span>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0);
  const [dataList, setDataList] = useState([])

  async function createDisplay() {
    const data = await grabData('https://jsonplaceholder.typicode.com/posts', count)
    setDataList(data);
  }

  const onCountChange = (e) => setCount(e.target.value);

  return (
      <div className="App-wrapper ">
        <div className="big-title">Hidden<br />Mystery<br />Accordion</div>
        <div className="App input-block">
          <label htmlFor="count" className="prompt">Show me: </label>
          <input value={count} onChange={onCountChange} id="count" />
          <span className="prompt">items...</span>
          <button onClick={createDisplay}>
            Bring it!
          </button>
        </div>
        <div className="App-list">
          {dataList.map((item) => {
            return <Element key={item.id} description={item.body} title={item.title} indx={item.id} />
          })}
        </div>
      </div>

  );
}

export default App;
