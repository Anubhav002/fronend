import "./box.css";
import img1 from "../../images/shreya.jpg";

export default function Box()
{
    return(
        <div className="main">
            <div className="first">  
              <img className="firstf"src={img1} alt=" "/>
             </div>
            <div className="second">
                   <h3>Shreya Tomar</h3>
                <h6>Newly Recruit at TTN</h6>

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