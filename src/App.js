import './index';
import { useState } from 'react'


function App() {
  return (
    <div className='container'>
      <h1>Advanced React</h1>
      <Counter initialValue={0} />
      <Login name="Romario" />
      <Login name="Jane" />
      <Array />
      <Obj firstName="John" />
      <NumberCounter />
    </div>
  );
}

export default App;


const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue)

  const handleCount = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(initialValue)
  }

  return (
    <>
      <div>Count: {count}</div>
      <button type="button" onClick={handleCount}>Increment Count</button>
      <button type='button' onClick={handleReset}>Reset Count</button>

    </>
  )
}

const Login = (props) => {
  const { name } = props
  const [loggedin, setLoggedin] = useState(false)

  const handleLogin = () => {
    setLoggedin(true)
  }

  const handleLoggedOut = () => {
    setLoggedin(false)
  }
  return (
    <>
      {loggedin ?
        <div>
          <button type='button' onClick={handleLoggedOut}>Sign Out</button> <p>Welcome Back {name}</p>
        </div> :
        <div>
          <button type='button' onClick={handleLogin}>Sign in</button>
          <p>sign in if youd like</p>
        </div>}
    </>
  )
}


const Array = () => {
  const data = [
    { id: 1, name: "john" },
    { id: 2, name: "jane" },
    { id: 3, name: "jenny" },
    { id: 4, name: "marko" },
  ]
  const [arr, setArr] = useState(data)

  const clearItems = () => {
    setArr([])
  }

  const restoreItems = () => {
    setArr(data)
  }

  const removeItems = (id) => {
    let newItem = arr.filter(person => person.id !== id)
    setArr(newItem)
  }

  const updateArray = () => {
    setArr((currentArr) => [
      ...currentArr,
      {
        id: 5,
        name: "rocko"
      }
    ])
  }
  return (
    <>
      <ul>
        {arr.map((person) => {
          const { id, name } = person
          return (
            <li className='item' key={id}>{name}
              <button className='remove-btn' onClick={() => removeItems(id)}>Remove item</button>
            </li>
          )
        })}
      </ul>
      <button className='btn' onClick={clearItems}>clear items</button>
      <button onClick={restoreItems}>restore items</button>
      <button onClick={updateArray}>add new item to current arr </button>
    </>
  )
}


const Obj = () => {
  const myObj = {
    firstName: "John",
    lastName: "Doe",
    phone: "+5559027"
  }

  const [obj, setObj] = useState(myObj)
  const updateObj = () => {
    setObj({
      ...obj,
      address: "California new address",
    });
    console.log(obj);
  }
  return (
    <>
      <div>
        <button onClick={updateObj}>update obj {console.log(myObj)}</button>
        <h3>{obj.firstName}</h3>
        <h3>{obj.lastName}</h3>
        <h3>{obj.phone}</h3>
        {obj.address && <h3>{obj.address}</h3>}
      </div>
    </>
  )
}


const NumberCounter = () => {
  const [value, setValue] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const increaseCounter = () => {
    setValue(value + 1)
    setShowMessage(false)

  }

  const resetCounter = () => {
    setValue(0)
    setShowMessage(false)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
          return prevValue + 1
      })
    }, 2000);
  }

  const decreaseValue = () => {
    let currentValue = value
    if (currentValue > 0) {
      setValue(currentValue - 1)
    } else {
      setShowMessage(true)
    }
  }
  return (
    <>
      <section className='counter-section' style={{ margin: '4rem 0' }} >
        <h2>Regular Counter</h2>
        <h1>current value: {value}</h1>
        <button className='btn' onClick={increaseCounter}>Increase</button>
        <button className='btn' onClick={resetCounter}>Reset</button>
        <button className='btn' onClick={decreaseValue}>Decrease</button>
        {showMessage && <ValidationError message="number cannot be below the number 0" />}
      </section>

      <section className='counter-section' style={{ margin: '4rem 0' }} >
        <h2>Complex Counter</h2>
        <h1>current value: {value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase</button>
        <button className='btn' onClick={resetCounter}>Reset</button>
        <button className='btn' onClick={decreaseValue}>Decrease</button>
        {showMessage && <ValidationError message="number cannot be below the number 0" />}
      </section>
    </>
  )
}

const ValidationError = ({ message }) => {
  return <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p>
}