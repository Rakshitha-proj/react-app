import React, { Component } from 'react'

 class FlightData extends Component{
     constructor(){
         super();
         //console.log("Constructor Called [FlightData.js]")
     }
   state = {
    FlightData : []
   }


     getFlightData = async()=>{
         const response = await fetch("https://jsonmock.doselect.com/api/domestic_flights/domestic_flights");
         const data = await response.json();


         //console.log(FlightData);
        this.setState({FlightData: data})
     }
     componentDidMount(){
            //console.log("Component Did Mount [FlightData.js]");
            this.getFlightData();
     }
     render() {
         //console.log("Render Methode Called [FlightData.js]");
         return (
             <div>
                 <h2>Data</h2>
                 <table className="table">
                     <thead>
                     <th>Id</th>
                     <th>Takeoff</th>
                     <th>landing</th>
                     <th>Duration</th>
                     <th>departure</th>
                     <th>arrival</th>
                     <th>price</th>
                     </thead>
                     <tbody>
                         {this.state.FlightData.map((airBusData)=>(
                             <tr>
                                 <td>{airBusData.id}</td>
                                 <td>{airBusData.takeoff_timestamp}</td>
                                 <td>{airBusData.landing_timestamp}</td>
                                 <td>{airBusData.duration}</td>
                                 <td>{airBusData.departure_from}</td>
                                 <td>{airBusData.arrival_at}</td>
                                 <td>{airBusData.flight_ticket_price}</td>
                                 </tr>
                         ))
                         }
                     </tbody>
                 </table>
             </div>
         )
     }
 }

export default FlightData

