import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  // useEffect
  // Component Did Mount
  // Component Did Update
  // Component Will un mount

  const getUserData = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "61421a5a6a9b4d3ad64b8cb1",
        },
      }
    );
    const { data } = await response.json();
    // console.log(data);
    setUsers(data);
  };
  // componentDidMount
  useEffect(() => {
    getUserData();
    console.log("Component Did Mount");
  }, [pageNumber]);

  // componentDidUpate

  // useEffect(()=>{
  //     getUserData();
  //     console.log('Component Did Update')
  // },[])

  const handleClick = (num) => {
    setPageNumber(num);
  };
  const isLoginned = true;
  // if(isLoginned){
  //     return (
  //         <div>
  //            <h2>Welcome User</h2>
  //         </div>
  //     )

  // }
  // else{
  //     return(
  //         <div>
  //             <h2>Welcome, Guest User!!!</h2>
  //         </div>
  //     )
  // }

  return (
    //   <div>
    //       {
    //           isLoginned ?  <h2>Welcome User</h2> : <h2>Welcome, Guest User!!!</h2>
    //       }
    //   </div>
    <div>
      <div className="container">
        <div className="row">
          {users.map((user) => (
            <div className="col-md-6">
              <Link to={`/user/${user.id}`}>
                <div className="card m-3">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        className="p-3"
                        src={user.picture}
                        alt={user.firstName}
                      />
                    </div>
                    <div className="col-md-7">
                      <p>{user.id}</p>
                      <p>
                        {user.title}: {user.firstName}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Card Closed Here */}
            </div>
          ))}
        </div>
        <div className="paginationButtons">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              className="btn btn-info"
              onClick={() => {
                handleClick(num);
              }}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;