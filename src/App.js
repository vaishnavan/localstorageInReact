import React, {Component} from 'react';

export const mybutton = {
    color:"blue",
    backgroundColor:"black"
}

class App extends Component {
    constructor(){
      super();
      var testObject = [
        {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]},
        {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]},
        {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
      ];
  
    localStorage.setItem('testObject', JSON.stringify(testObject));
  
      this.state = {
        apple:localStorage.getItem('testObject')
      }
      alert(JSON.parse(localStorage.getItem('testObject')));
  }
  
    render() {
      return (
        <div className="App">
        </div>
      );
    }
  }
  
  export default App;