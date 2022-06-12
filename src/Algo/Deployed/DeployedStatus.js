import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../Request/Axios";
import './DeployedStatus.css'
const DeployesStatus = (props) => {
  const [notifications, setNotifications] = useState([]);
  const strategyId=useParams().strategyId;
  const userId=useParams().userId; 
  useEffect(() => { 
    const getdata = async () => {
    let response;
    try{
    response=await Axios.get(`/getnotification/${strategyId}/${userId}`); 
    }catch(err){
      console.log(err);
    }
     setNotifications(response.data.notification);
    } 
    getdata();
  }, []);
  return (
    <> 
      <div className="table-container" >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Price</th>
            <th scope="col">Position</th> 
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification, i) => {
            return (
              <tr key={i}>
                <td>{notification.atPrice}</td>
                <td><div class="frame-5"> <div class="paid">{notification.position}</div></div></td> 
                <td>{notification.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table> 
      </div>
    </>
  );
};

export default DeployesStatus;
