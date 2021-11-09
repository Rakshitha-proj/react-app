import React, { Component } from 'react'
// import { Link } from "react-router-dom";

export class Register extends Component {
    state = 
    {
        firstName : '',
        lastName :'',
        email :'',
        password: '',
        firstNameErr:'',
        lastNameErr:'',
        emailErr:'',
        passwordErr:'',
    }
    // btn.addEventListner('change',(e)=>{
        // e.prevent
    // })
    handleChange =(e)=>{
        const {name,value} = e.target;
        this.setState=({[name]:value})

        // const {}
        
        }
            validate = ()=>{
                let firstNameErr = "";
                let lastNameErr = "";
                let emailErr = "";
                let passwordErr ="";
                if( this.state.firstName.length<4){
                    firstNameErr ="first name shoud be 4 characters";
                }
                if( this.state.lastName.length<4){
                    lastNameErr ="last name shoud be 4 characters";
                }
                if( !this.state.email.includes('@')){
                    emailErr ="first name shoud be 4 characters";
                }
                if( this.state.Password.length<8){
                    passwordErr ="first name shoud be 4 characters";
                }
                if(firstNameErr || lastNameErr || emailErr || passwordErr)
                    this.setState({firstNameErr,lastNameErr,emailErr,passwordErr})
                
            }


        handleSubmit = (e)=>{
            e.preventdefault();
            this.validate()
    }
    render() {
        return (
            <div>
                
                <form>
                <div class="form-group">
    <label for="exampleInputfn">First Name</label>
    <input type="text" class="form-control" id="exampleInputfn" aria-describedby="fnHelp" placeholder="Enter First Name" required/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputln">Last Name</label>
    <input type="text" class="form-control" id="exampleInputln" aria-describedby="lnHelp" placeholder="Enter Last Name" required/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        
            </div>
        )
    }
}

export default Register;
