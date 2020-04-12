import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Activities from "./components/Activities.js";
import Custom from "./components/Custom.js";
import MyActivities from "./components/MyActivities.js";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => {
        if(user){
        setUser(user);
        console.log("Seteó al usuario ", user);
        }
      });
  }, []);

  return (
    <div className="App">
      {user ? (
        <Navbar autenticado={true} username={user.username} />
      ) : (
        <Navbar autenticado={false} />
      )}
      <BrowserRouter>
        <Switch>
         <Route exact path='/' component={About}/>
         <Route exact path='/About' component={About}/>
         <Route exact path='/Activities' component={()=>(<Activities user={user}/>)}/>
         <Route exact path='/MyActivities' component={()=>(<MyActivities user={user}/>)}/>
         {user ? (
         <Route exact path='/Custom' component={()=>(<Custom user={user} userId={user._id} />)}/>
         ) : (
           <h1>loggese mijo</h1>
         )
         }
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
