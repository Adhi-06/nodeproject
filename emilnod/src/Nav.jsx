import React from "react";
const Nav = () =>{
    
        const [count,setCount]=useState(0);
          return (
            <BrowserRouter>
            <h1>Count:{count}</h1>
            <button onClick={()=> setCount(count+1)}>
              Increase</button>
            <Routes>
        
            <Route path='/home' element={<Nav/>}></Route>
        
            </Routes>
            </BrowserRouter>
          )
        /*<div>
        <ul>
        <li>Home</li>
        <li>About</li>
        <Link to="/about"></Link>
        <li>Contact</li>


        </ul></div>*/
    
}
export default Nav;