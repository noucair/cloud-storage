import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'
import React from "react";
import ReactDOM from "react-dom"
import cloudLogo from './media/téléchargement (1).png'

import { auth, provider } from "./firebase";
import { useState } from 'react';


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
function App() {

  const createOrder=(data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  }

   const [user, setUser] = useState()
   

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  const onApprove=(data, actions) => {
    return actions.order.capture();
  }


  return (
    <div className="app">
           {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
          <div className="wrapper">
          <img src={cloudLogo} alt="cloud storage" />
    
                  <PayPalButton
                      createOrder={(data, actions) => createOrder(data, actions)}
                      onApprove={(data, actions) => onApprove(data, actions)}
                 />
                 <hi>Store and share your files and folders, and work collaboratively from the mobile device, tablet or computer of your choice. only 1$</hi>
                 <button onClick={handleLogin}>Log in to cloud Storage</button>
          </div>
          )
        }

             
            </div>
  );
}

export default App;