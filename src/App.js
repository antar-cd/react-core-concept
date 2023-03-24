import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const products=[
  //   {name:'laptop',price:50000},
  //   {name:'phone',price:5000},
  //   {name:'watch',price:500},
  //   {name:'tablet',price:30000}
  // ]
  return (
    <div className="App">
      <ExternelUsers></ExternelUsers>

      {/* <Counter></Counter> */}
      {/* {
        products.map(product =><Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Product name="Laptop" price="76000"></Product>
      <Product name="Phone" price='35000'></Product>
      <Product name="Watch" price='3500'></Product> */}
    </div>
  );
}

function ExternelUsers(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>setUsers(data))
  } , []);
  return(
    <div>
      <h2>External Users </h2>
      <p>{users.length}</p>
      {
        users.map(user =><User name={user.name} email={user.email} ></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border: '2px solid red',margin:"20px"}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter(){
  const [count,setCount] = useState(43);

  const IncreaseCount =() => setCount(count + 1);
  const DecreaseCount =() => setCount(count-1);

  // const IncreaseCount =() =>{
  //   const newCount= count + 1;
  //   setCount(newCount);
  // }
  
  return(
    <div>
      <h2>count:{count} </h2>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}

function Product (props){
  return(
    <div className='product'>
      <h3>Name:{props.name} </h3>
      <p>Price:{props.price} </p>
    </div>
  )
}

export default App;
