import React, { Component } from 'react'
import  './TodoApp.css'
export default class TodoApp extends Component {
    state={
        input: "",
        ItemsArr:[]
    }

    handleChange=(event)=>{
        this.setState({
            input:event.target.value
        })
    }
    storeItems=(event)=>{
        
        event.preventDefault()
        const {input}= this.state
       
        this.setState({
            ItemsArr:[...this.state.ItemsArr,input],
            input:"",
            edit:false
        })
        
    }
    deleteVal=(id)=>{
        
        this.setState({
            ItemsArr:this.state.ItemsArr.filter((data,index)=>index!==id)
         } )
    }

   
    render() {
        console.log(this.state.ItemsArr);
        return (
            <div className="container">
<div className="">


            <div className="wholeDiv col-lg-12">
                <div className="TodoAppmain text-center">
                <form action="" onSubmit={this.storeItems}>
                <h1>Todo App</h1>
                <input type="text"  value={this.state.input}  onChange={this.handleChange} placeholder="Enter items here"/>
                
                </form>
                </div>
                </div>
                <div className="col">


                <ul>
                    {this.state.ItemsArr.map((data,index)=>{
                       return <span><li key={index}>{data}   <span><i  className="fas fa-trash-alt" onClick={()=>{this.deleteVal(index)}}></i></span></li>
                       
                       </span> 
                    })}
                </ul>
                </div>
                
</div>

                

                

            
            </div>
        )
    }
}
