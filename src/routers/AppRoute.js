import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
//import { ResponsiveScrollContainer } from "./components/testComp";
import Header from "../components/Header";


const AppDashboard = () => (
    <div>This is the dashboard</div>
  );
  
  const AddExprense = () => (
    <div>This is add expense page</div>
  )
  
  const EditExpense = () => {
    return <div>This is edit expense page</div>
  }
  
  const Help = () =>{
    return <div>This is the help page</div>
  }
  
  const NotFoundPage = () =>{
    
    return(  
    <div style={{display:'flex' , justifyContent:'center'}}>
      <div style={{alignItems:'center' , justifyContent:'center' , color:'red' , height:'100vh',display:"flex" , flexDirection:'column' , fontSize:'30px'}}>
      404 Page not found ! <Link style={{color:'black'}} to ='/' >Go Home</Link>
      </div> 
    </div>
    )
  }
  
  
  
  const AppRoutes = () => (
    <BrowserRouter>
      <div>
        <Header/> {/* the header component will be available on all the pages */}
      <Routes>
        <Route path="/" element={<AppDashboard />} exact = {true}/>
        <Route path="/add" element={<AddExprense />}/>
        {/*       <Route path="/test" element={<ResponsiveScrollContainer/>}/> */}
        <Route path="/edit" element={<EditExpense />} />
        <Route path="/help" element={<Help/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      </div>
  
    </BrowserRouter>
  );
  
  export default AppRoutes;
  