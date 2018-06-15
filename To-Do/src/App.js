import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	componentDidMount(){document.title = "To-Do"}
  constructor (props) {
    super();
    
    this.state = {
    buyItesms:[],
    message: ' '
  
  }

}

addItem(e){
  e.preventDefault();
  const{buyItesms}=this.state;
  const newItem=this.newItem.value;

  const isOnTheList=buyItesms.includes(newItem);

  if((newItem==0)){
    // this.setState({
    //   message:"This item is already on the list"
    // })

    // alert(this.setState({
    //    message:"This item is already on the list"
    //  }));
  	alert("Please Add Items to the List");
  }
  else{

  newItem !=="" && this.setState({
    buyItesms:[...this.state.buyItesms, newItem],
    message: ' '
  })
}
  this.addForm.reset();
}

removeItem(item){
  const newBuyItems=this.state.buyItesms.filter(buyItesms=>{
    return buyItesms !==item;
  });

 this.setState({
  buyItesms: [...newBuyItems]
 })
 if(newBuyItems.length == 0){
  this.setState({
    message: "no Item on your list, add some"
  })
 }

}

clearAll(){
  this.setState({
    buyItesms: [],
    message: "no items on your list, add some"
  })
}
render(){
	document.body.style = 'background: orange;';
  const{buyItesms, message} = this.state
  return (

      <div>
      <header>

        <h1>To-Do List</h1>
        <form ref={input=>this.addForm=input} className ="form-inline" onSubmit={(e) => {this.addItem(e)}} >
          <div className="form-group">
            <label className="sr-only" htmlFor="newItemInput"> Add Item To List   </label>
            <input ref={input=>this.newItem=input} type="text" placeholder="List" className="form-control" id="newItemInput" />

          </div>
          <br></br>

          <button type="submit" className="btn btn-primary"> Add </button>
        
        </form>

      </header>
      <div className="content">
        {
          (message !== '' || buyItesms.length == 0 )&& <p className="message text-danger">{message}</p>
        }
        {
          buyItesms.length>0 &&
          <table className= "table">
            
            <tbody>
            {
            buyItesms.map((item,index) =>{
              
              return (

                <tr key={index}>
                  <th scopp="row">{index+1}</th>
                  
                  <td>{item}</td>
                  <td className="text-right">
                    <button onClick={(e)=>this.removeItem(item)} type ="button " className="btn btn-default btn-sm">
                      remove
                    </button>
                  </td>
                </tr>
                )
                })
              } 
              
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">&nbsp;</td>
              <td className="text-right">
              <br></br>
                <button onClick={(e)=>this.clearAll()} className="btn btn-default btn-sm">clearlist</button>
              </td>
            </tr>
          </tfoot>  
        </table>
        }
          

          
        </div>
      </div>
    )
  }
}
  

export default App;
