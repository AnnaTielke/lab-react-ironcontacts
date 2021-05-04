import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

class App extends Component {
   state = {
      contacts: contacts.slice(0, 5),
   };

   render() {
      const { contacts } = this.state;
      return (
         <ul>
            {contacts.map((singleContact) => {
               return (
                  <>
                     <li>
                        <img src={singleContact.pictureUrl}></img>
                     </li>
                     <li>{singleContact.name} </li>
                     <li>{singleContact.popularity} </li>
                  </>
               );
            })}
         </ul>
      );
   }
}

export default App;
