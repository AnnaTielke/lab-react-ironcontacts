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

   handleSortPop = () => {
      const { contacts } = this.state;
      let clonedContacts = JSON.parse(JSON.stringify(contacts));

      clonedContacts.sort((a, b) => {
         if (a.popularity > b.popularity) {
            return 1;
         } else if (a.popularity < b.popularity) {
            return -1;
         } else {
            return 0;
         }
      });

      this.setState({
         contacts: clonedContacts,
      });
   };

   handleSortName = () => {
      const { contacts } = this.state;
      let clonedContacts = JSON.parse(JSON.stringify(contacts));

      clonedContacts.sort((a, b) => {
         if (a.name > b.name) {
            return 1;
         } else if (a.name < b.name) {
            return -1;
         } else {
            return 0;
         }
      });

      this.setState({
         contacts: clonedContacts,
      });
   };

   handleDelete = (someId) => {
      console.log("Delete works", someId);
      const { contacts } = this.state;
      let filteredContacts = contacts.filter((single) => {
         return single.id !== someId;
      });

      this.setState({
         contacts: filteredContacts,
      });
   };

   render() {
      const { contacts } = this.state;
      return (
         <ul>
            <button onClick={this.handleAdd}>Add</button>
            <button onClick={this.handleSortName}>Sort Alpabetically</button>
            <button onClick={this.handleSortPop}>Sort Popularity</button>

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
                     <button
                        onClick={() => {
                           this.handleDelete(singleContact.id);
                        }}
                     >
                        Delete
                     </button>
                  </>
               );
            })}
         </ul>
      );
   }
}

export default App;
