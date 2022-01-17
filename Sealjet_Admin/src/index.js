import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// import React,{useState} from 'react'
// import App from './App';
// import LoginForm from './component/LogIn/Login';



// function index() {
//   const adminUser={
//     email: 'Urjin',
//     password:'1234'
//   }
//   const [user,setUser] = useState({name:'', email:''});
//   const [error,setError] = useState('');

//   const Login =details =>{
//     console.log(details);

//     if(details.email== adminUser.email && details.password == adminUser.password){
//       console.log('Logged in')
//       setUser({
//         name:details.name,
//         email:details.email
//       })
//     }else{
//       console.log('Details do no match');
//       setError('Нэр нууц үг буруу байна');
//     }

//   }
//   const Logout =()=>{
//     setUser({name:'',email:''});
//   }
//   return (

//     <div>
//       {(user.email != '') ? (
//         <div >
//            <App/>
//           {/* <h2>Admin<span>{user.name}</span>
//           <i class="bi bi-person-fill" onClick={Logout}></i>
//            </h2> */}
//         </div>
//       ):(
//         <LoginForm Login={Login} error={error}/>
//       )}
//     </div>
   
//   );
// }

// export default index

