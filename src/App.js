import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

class App extends Component {
   state = {
      contacts: contacts.slice(0, 5),
   };

   handleAdd = () => {
      let randomIndex = Math.floor(Math.random() * contacts.length);
      let elem = contacts[randomIndex];
      //this.setState overwrites the contacts with the new Array
      this.setState({
         contacts: [elem, ...this.state.contacts],
      });
   };

   render() {
      const { contacts } = this.state;
      return (
         <ul>
            <button onClick={this.handleAdd}>Add</button>
            {contacts.map((singleContact) => {
               return (
                  <>
                     <li>
                        <img
                           style={{ width: "50px" }}
                           src={singleContact.pictureUrl}
                        ></img>
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
