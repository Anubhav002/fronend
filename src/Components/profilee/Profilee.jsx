import "./profilee.css";
import  img1 from "../../images/pics.jpg";
import  img2 from "../../images/water.jpg";


export default function profilee()
{
return(
<div className="mainly">
    <div className= "prime">
              <img className="back" src={img2} alt="" /> 
              <img className="primef"src={img1} alt=" "/>
    </div>
    <div className="secondary">
         <h1>Sarah Wood</h1>
         <h4>Sarah Wood is co-founder and COD of video and tech company</h4>
         <p>London.England.United Kingdom.234 friends</p>
    </div>
     <div className="trio">
         <button className="add">Add Friend</button>
         <button className="visit">Visit Website</button>
     </div>
    
</div>
)
}