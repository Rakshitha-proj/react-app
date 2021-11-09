import React from "react";
class Contact extends React.Component {
    state={
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        firstNameErr : '',
        lastNameErr : '',
        emailErr : '',
        passwordErr : '',
    }
   
    handleChange = (e)=>{
        // console.dir(e.target)
        const {name,value} = e.target;
       
        this.setState({[name]:value})
     

    }
      
    validate = ()=>{
        let firstNameErr = "";
        let lastNameErr = "";
        let emailErr = "";
        if(this.state.firstName.length<4){
            firstNameErr = "First Should be minimum 4 character";
        }
       if(this.state.lastName.length<4){
           lastNameErr = "Last Should be mimimum 4 characters";
       }
       if(!this.state.email.includes('@')){
           emailErr = "Enter a valid email";
       }

       if(firstNameErr || lastNameErr || emailErr){
           this.setState({firstNameErr,lastNameErr,emailErr})
       }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(this.state)
            this.validate()
    }
  render() {
    return (
      <div className="mt-4 ms-4">
        <form className="form-group" noValidate onSubmit={this.handleSubmit}>
          <input
            className="form-control w-50 mb-3"
            type="text"
            name="firstName"
            placeholder="Enter your First Name"
            onChange={this.handleChange}
          />
          <p className="text-danger"> {this.state.firstNameErr} </p>
          <input
            className="form-control w-50 mb-3"
            type="text"
            name="lastName"
            placeholder="Enter your last Name"
            onChange={this.handleChange}
          />
           <p className="text-danger"> {this.state.lastNameErr} </p>
          <input
            className="form-control w-50 mb-3"
            type="text"
            name="email"
            placeholder="Enter your Email"
            onChange={this.handleChange}
          />
           <p className="text-danger"> {this.state.emailErr} </p>
          <input
            className="form-control w-50 mb-3"
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={this.handleChange}
          />
          

          <button className="btn btn-info px-3 py-2">Register</button>
          
        </form>
      </div>
    );
  }
}

export default Contact;
