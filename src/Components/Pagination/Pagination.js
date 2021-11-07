import React, { Component } from 'react'

export class Pagination extends Component {

    state = {
        userData : [],
        pageNumber: 1,
        
    }

    fetchUserData = async()=>{
       const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,{
           method: 'GET',
           headers: {
               'app-id': '61421a5a6a9b4d3ad64b8cb1',
           }
       })
       const {data} = await response.json();
    //    console.log(data);
    this.setState({userData:data});

    }
    componentDidMount(){
        this.fetchUserData()
    }
    handleClick = (num)=>{
        // console.log(num);
        this.setState({pageNumber:num})
    }
    // If you want to make an API in Updating Phase
    // 3 DOMs
    // Real DOM
    // 1st Virtual DOM (Current state and Current Props)
    // 2nd Virtual DOM (prevsState,prevsProps)
    componentDidUpdate(prevsProps,prevsState){
        // 2 != 3
        // this.fetchUserData()
        if(prevsState.pageNumber!=this.state.pageNumber){
            this.fetchUserData()
        }
        // Update 
        // this.fetchUserData();
    }
    render() {
        console.log('Component Rerender again');
        return (
            <div>
                <h2>Pagination</h2>
                
                        {
                          this.state.userData.map((user)=>(
                            
                            
                            <div className="col-md-6">
                            <div className="card" style={{"width": "18rem"}}>
                              <img src={user.picture} alt="User Picture" />
                              <div className="card-body">
                                <h5 className="card-title">{user.title}</h5>
                                <p className="card-text">{user.firstName}</p>
                                <p className="card-text">{user.lastName}</p>
                              </div>
                            </div>
                            </div>
                            
                            
                          ))
                        }
                    
                <div className="paginationButtons">
                    {
                        [1,2,3,4,5,6,7,8,9].map((num)=>(
                            <button className="btn btn-info" onClick={()=>{this.handleClick(num)}} >{num}</button>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Pagination
