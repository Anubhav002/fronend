import "./box.css";
import img1 from "../../images/shreya.jpg";
import img2 from "../../images/background.jpg"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Box()
{
    const {user} = useContext(AuthContext)

    
    return(
        <div className="main">

            <div className="first"> 
              <img className="background" src={img2} alt="" /> 
              <img className="firstf"src={user.imageUrl} alt=" "/>
             </div>
            <div className="second">
                   <h3>{user.givenName+' '+user.familyName}</h3>
                <p>Newly Recruit at TTN</p>
            </div>
            <div className="third">
                <div className="forth">
                    <h4> 234</h4>
                    <p>Profile Views</p>
                </div>
                <div className="fifth">
                    <h4>10</h4>
                    <p>Posts</p>
                </div>

            </div>
        </div>
    )
}