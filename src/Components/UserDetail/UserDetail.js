import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Moment from 'moment';

function UserDetail() {
  const [userDetail, setUserDetail] = useState({});
  const { id } = useParams();

  const getUserDetails = async () => {
    const { data } = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: {
        "app-id": "61421a5a6a9b4d3ad64b8cb1",
      },
    });
    console.log(data);
    setUserDetail(data);
  };

  useEffect(() => {
    getUserDetails();
  });

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div>
              <p><strong>ID:&nbsp;</strong>{userDetail.id}</p>
              <img
                className="img-fluid"
                src={userDetail.picture}
                alt={userDetail.firstName}
              />
            </div>
          </div>
          <div className="col-md-4">
            <section>
              <div>
                <p>
                  {" "}
                 <strong> {userDetail.title} {userDetail.firstName}{" "} </strong>
                </p>
                <p>
                  {" "}
                  <strong>Gender:&nbsp;</strong> {userDetail.gender}
                </p>
                
                <p> <strong>Date Of Birth:&nbsp; </strong>{Moment(userDetail.dateOfBirth).format('MMM d YYYY')}</p>
                <p> <strong>Register Date:&nbsp; </strong>{Moment(userDetail.registerDate).format('MMM d YYYY')}</p>
              </div>
              <div className="mt-3">
                <p> <strong>Email:&nbsp; </strong> {userDetail.email}</p>
                <p> <strong>Phone Number:&nbsp; </strong> {userDetail.phone}</p>
              </div>
            </section>
          </div>
          <div className="col-md-4">
            <section>
              <section>
                <h3>Address</h3>
                <p>
                  <strong>State:&nbsp;</strong>
                  {userDetail?.location?.state}
                </p>
                <p> 
                  <strong>Street:&nbsp;</strong>
                  {userDetail?.location?.street}
                </p>
                <p>
                  <strong>City:&nbsp;</strong>
                  {userDetail?.location?.city}
                </p>
                <p>
                  <strong>Country:&nbsp;</strong>
                  {userDetail?.location?.country}
                </p>
                <p>
                  <strong>Timezone:&nbsp;</strong>
                  {userDetail?.location?.timezone}
                </p>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;