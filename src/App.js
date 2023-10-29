// import './index';
// import { useState, useEffect } from 'react'
// import MultiReturn from './multipleReturns/MultipleReturns';
// const url = 'https://course-api.com/react-tours-project';
// import TravisApp from './travis/TravisApp';

// function App() {
//   return (
//     <div className='container'>
//       <h1>Advanced React</h1>
//       {/* <SumNums /> */}
//       {/* <FormTraining /> */}
//       {/* <ControlledInputs /> */}
//       {/* <Form /> */}
//       {/* <ToggleComponent /> */}
//       {/* <ShortCircuit /> */}
//       {/* <Returns /> */}
//       {/* <Counter initialValue={0} />
//       <Login name="Romario" />
//       <Login name="Jane" />
//       <Array />
//       <Obj firstName="John" />
//       <NumberCounter /> */}
//     </div>
//   );
// }

// export default App;


// const Counter = ({ initialValue }) => {
//   const [count, setCount] = useState(initialValue)

//   const handleCount = () => {
//     setCount(count + 1)
//   }

//   const handleReset = () => {
//     setCount(initialValue)
//   }

//   return (
//     <>
//       <div>Count: {count}</div>
//       <button type="button" onClick={handleCount}>Increment Count</button>
//       <button type='button' onClick={handleReset}>Reset Count</button>

//     </>
//   )
// }

// const Login = (props) => {
//   const { name } = props
//   const [loggedin, setLoggedin] = useState(false)

//   const handleLogin = () => {
//     setLoggedin(true)
//   }

//   const handleLoggedOut = () => {
//     setLoggedin(false)
//   }
//   return (
//     <>
//       {loggedin ?
//         <div>
//           <button type='button' onClick={handleLoggedOut}>Sign Out</button> <p>Welcome Back {name}</p>
//         </div> :
//         <div>
//           <button type='button' onClick={handleLogin}>Sign in</button>
//           <p>sign in if youd like</p>
//         </div>}
//     </>
//   )
// }


// const Array = () => {
//   const data = [
//     { id: 1, name: "john" },
//     { id: 2, name: "jane" },
//     { id: 3, name: "jenny" },
//     { id: 4, name: "marko" },
//   ]
//   const [arr, setArr] = useState(data)

//   const clearItems = () => {
//     setArr([])
//   }

//   const restoreItems = () => {
//     setArr(data)
//   }

//   const removeItems = (id) => {
//     let newItem = arr.filter(person => person.id !== id)
//     setArr(newItem)
//   }

//   const updateArray = () => {
//     setArr((currentArr) => [
//       ...currentArr,
//       {
//         id: 5,
//         name: "rocko"
//       }
//     ])
//   }
//   return (
//     <>
//       <ul>
//         {arr.map((person) => {
//           const { id, name } = person
//           return (
//             <li className='item' key={id}>{name}
//               <button className='remove-btn' onClick={() => removeItems(id)}>Remove item</button>
//             </li>
//           )
//         })}
//       </ul>
//       <button className='btn' onClick={clearItems}>clear items</button>
//       <button onClick={restoreItems}>restore items</button>
//       <button onClick={updateArray}>add new item to current arr </button>
//     </>
//   )
// }


// const Obj = () => {
//   const myObj = {
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+5559027"
//   }

//   const [obj, setObj] = useState(myObj)
//   const updateObj = () => {
//     setObj({
//       ...obj,
//       address: "California new address",
//     });
//     console.log(obj);
//   }
//   return (
//     <>
//       <div>
//         <button onClick={updateObj}>update obj {console.log(myObj)}</button>
//         <h3>{obj.firstName}</h3>
//         <h3>{obj.lastName}</h3>
//         <h3>{obj.phone}</h3>
//         {obj.address && <h3>{obj.address}</h3>}
//       </div>
//     </>
//   )
// }


// const NumberCounter = () => {
//   const [value, setValue] = useState(0)
//   const [showMessage, setShowMessage] = useState(false)
//   const increaseCounter = () => {
//     setValue(value + 1)
//     setShowMessage(false)

//   }

//   const resetCounter = () => {
//     setValue(0)
//     setShowMessage(false)
//   }

//   const complexIncrease = () => {
//     setTimeout(() => {
//       setValue((prevValue) => {
//         return prevValue + 1
//       })
//     }, 2000);
//   }

//   const decreaseValue = () => {
//     let currentValue = value
//     if (currentValue > 0) {
//       setValue(currentValue - 1)
//     } else {
//       setShowMessage(true)
//     }
//   }
//   return (
//     <>
//       <section className='counter-section' style={{ margin: '4rem 0' }} >
//         <h2>Regular Counter</h2>
//         <h1>current value: {value}</h1>
//         <button className='btn' onClick={increaseCounter}>Increase</button>
//         <button className='btn' onClick={resetCounter}>Reset</button>
//         <button className='btn' onClick={decreaseValue}>Decrease</button>
//         {showMessage && <ValidationError message="number cannot be below the number 0" />}
//       </section>

//       <section className='counter-section' style={{ margin: '4rem 0' }} >
//         <h2>Complex Counter</h2>
//         <h1>current value: {value}</h1>
//         <button className='btn' onClick={complexIncrease}>Increase</button>
//         <button className='btn' onClick={resetCounter}>Reset</button>
//         <button className='btn' onClick={decreaseValue}>Decrease</button>
//         {showMessage && <ValidationError message="number cannot be below the number 0" />}
//       </section>
//     </>
//   )
// }

// const ValidationError = ({ message }) => {
//   return <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p>
// }

// const Returns = () => {
//   const [isLoading, setIsLoading] = useState(false)
//   const [isError, setIsError] = useState(false)
//   const [user, setUser] = useState([])

//   const fetchUsers = async () => {
//     setIsLoading(true)
//     try {
//       const users = await fetch(url)
//       if (users.status === 200) {
//         const jsonData = await users.json()
//         setIsLoading(false)
//         setUser(jsonData)
//       } else {
//         setIsLoading(false)
//         setIsError(true)
//         throw new Error('fetch request did not return 200')
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   if (isLoading) {
//     return <div>
//       <h1>Loading...</h1>
//     </div>
//   }

//   if (isError) {
//     return <div>
//       <h1>Error...</h1>
//     </div>
//   }

//   return (
//     <div>
//       {user.map((users) => {
//         <div key={users.id} {...users}></div>
//         { console.log() }
//       })}
//     </div>
//   )
// }

// const ShortCircuit = () => {
//   const [text, setText] = useState('')
//   const [isError, setIsError] = useState(false)
//   // const firstValue = text || 'hello value'
//   // const secondValue = text && 'second value'

//   return (
//     <>
//       {/* <h1>{firstValue}</h1>
//       <h1>Second Value: {secondValue}</h1> */}
//       {/* {(1 + 1 === 2 && 1 - 1 === 0) ? 'true' : 'false'}
//       */}

//       <h1>{text || 'John Doe'}</h1>
//       <button className='btn' onClick={() => setIsError(!isError)}>
//         {isError ? 'Toggle without error' : 'Toggle Error'}
//       </button>
//       {isError ? <h1>Error...</h1> : <h1>No Errors :)</h1>}

//       {/* {!text && <h1>Render</h1>} */}
//     </>
//   )
// }


// const ToggleComponent = () => {
//   const [show, setShow] = useState(false)
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide Component' : 'Show Component'}
//       </button>
//       {show ? <Item /> : <strong>nothing to show here!</strong>}
//     </>
//   )

// }

// const Item = () => {
//   const [size, setSize] = useState(window.innerWidth)

//   const checkSize = () => {
//     setSize(window.innerWidth)
//   }

//   useEffect(() => {
//     window.addEventListener('resize', checkSize)
//     return () => {
//       window.removeEventListener('resize', checkSize)
//     }
//   }, [])

//   return <div style={{ fontWeight: 'bold', color: "green" }}>
//     <h1>you clicked show component!</h1>
//     <h2>good job!</h2>
//     <h3>Window size: {size} px</h3>
//   </div>
// }



// //--------------------------forms-------------------

// const Form = () => {
//   const [firstname, setFirstname] = useState('')
//   const [email, setEmail] = useState('')
//   const [people, setPeople] = useState([])
//   const [age, setAge] = useState('')
//   const [dynamicPerson, setDynamicPerson] = useState({ firstname: '', email: '', age: '' })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (firstname && email && age) {
//       const person = {
//         id: new Date().getTime().toString(),
//         firstname,
//         email,
//         age
//       }
//       setPeople((currentPeopleState) => {
//         return [
//           ...currentPeopleState,
//           person
//         ]
//       })
//       setFirstname('')
//       setEmail('')
//       setAge('')
//     } else {
//       alert('empty values!')
//     }

//   }

//   useEffect(() => {
//     console.log(people);
//   }, [people])

//   return (
//     <>
//       <article>
//         <form className='form' onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor='firstname'>Name:</label>
//             <input type='text' id='firstname' name='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
//           </div>
//           <div>
//             <label htmlFor='email'>Email:</label>
//             <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
//           </div>
//           <div>
//             <label htmlFor='age'>Age:</label>
//             <input type='text' id='age' name='age' value={age} onChange={(e) => setAge(e.target.value)}></input>
//           </div>
//           <button type='submit'>Add Person</button>
//         </form>
//         {
//           people.map((person, index) => {
//             const { id, firstname, email } = person
//             return <div key={id} style={{ marginTop: '12px' }}>
//               <p>{id} {firstname} {email}</p>
//             </div>

//           })
//         }
//       </article>
//     </>
//   )
// }

// const ControlledInputs = () => {
//   const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
//   const [people, setPeople] = useState([]);
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setPerson({ ...person, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (person.firstName && person.email && person.age) {
//       const newPerson = { ...person, id: new Date().getTime().toString() };
//       setPeople([...people, newPerson]);
//       setPerson({ firstName: '', email: '', age: '' });
//     }
//   };
//   return (
//     <>
//       <article className='form'>
//         <form>
//           <div className='form-control'>
//             <label htmlFor='firstName'>Name : </label>
//             <input
//               type='text'
//               id='firstName'
//               name='firstName'
//               value={person.firstName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='form-control'>
//             <label htmlFor='email'>Email : </label>
//             <input
//               type='email'
//               id='email'
//               name='email'
//               value={person.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className='form-control'>
//             <label htmlFor='age'>Age : </label>
//             <input
//               type='number'
//               id='age'
//               name='age'
//               value={person.age}
//               onChange={handleChange}
//             />TH
//           </div>
//           <button type='submit' className='btn' onClick={handleSubmit}>
//             add person
//           </button>
//         </form>
//       </article>
//       <article>
//         {people.map((person) => {
//           const { id, firstName, email, age } = person;
//           return (
//             <div key={id} className='item'>
//               <h4>{firstName}</h4>
//               <p>{email}</p>
//               <p>{age}</p>
//             </div>
//           );
//         })}
//       </article>
//     </>
//   );
// };



// const FormTraining = () => {
//   const [person, setPerson] = useState({ firstname: '', email: '', age: '' })
//   const [people, setPeople] = useState([])

//   const handleChange = (e) => {
//     const name = e.target.name
//     const value = e.target.value
//     setPerson({ ...person, [name]: value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (person.firstname && person.email && person.age) {
//       const newPerson = { ...person, id: new Date().getTime().toString() }
//       setPeople([...people, newPerson])
//       setPerson({ firstname: '', email: '', age: '' })
//     }
//   }

//   return (
//     <article>
//       <form>
//         <label htmlFor='firstname'>Firstname: </label>
//         <input
//           type='text'
//           name='firstname'
//           id='firstname'
//           value={person.firstname}
//           onChange={handleChange}
//         >
//         </input>
//       </form>
//       <form>
//         <label htmlFor='email'>Email: </label>
//         <input
//           type='email'
//           name='email'
//           id='email'
//           value={person.email}
//           onChange={handleChange}
//         >
//         </input>
//       </form>
//       <form>
//         <label htmlFor='age'>Age: </label>
//         <input
//           type='text'
//           name='age'
//           id='age'
//           value={person.age}
//           onChange={handleChange}
//         >
//         </input>
//       </form>
//       <button type='submit' onClick={handleSubmit}>Submit Form</button>
//       <div>
//         {people.map((perSon) => {
//           const { id, firstname, email, age } = perSon
//           return <div>
//             <div key={id}></div>
//             <h1>{firstname}</h1>
//             <p>{email}</p>
//             <p>{age}</p>
//           </div>
//         })}
//       </div>
//     </article>
//   )

// }


// //-----------calculate and sum two numbers via form inputs


// const SumNums = () => {
//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);
//   const [result, setResult] = useState(0);

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = parseFloat(e.target.value);
//     if (name === 'number1') {
//       setNumber1(value);
//     } else if (name === 'number2') {
//       setNumber2(value);
//     }
//   }

//   const handleReset = () => {
//     setNumber1(0);
//     setNumber2(0);
//     setResult(0);
//   }

//   const handleSum = () => {
//     const sum = number1 + number2;
//     setResult(sum);
//   }

//   return (
//     <main>
//       <form>
//         <label htmlFor='number1'>Number 1: </label>
//         <input
//           type='text'
//           name='number1'
//           id='number1'
//           placeholder='number 1'
//           onChange={handleChange}
//           value={number1}
//         />
//       </form>
//       <form>
//         <label htmlFor='number2'>Number 2: </label>
//         <input
//           type='text'
//           name='number2'
//           id='number2'
//           placeholder='number 2'
//           onChange={handleChange}
//           value={number2}
//         />
//       </form>
//       <form>
//         <label htmlFor='result'>Result: </label>
//         <input
//           type='text'
//           name='result'
//           id='result'
//           readOnly={true}
//           placeholder='result'
//           value={result}
//         />
//       </form>
//       <button type='button' onClick={handleSum}>Sum</button>
//       <button type='button' onClick={handleReset}>Reset</button>
//     </main>
//   );
// }
