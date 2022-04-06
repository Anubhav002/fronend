import Login from "./Pages/Login";
import Header from "./Components/Header";
import Contacts from "./Components/Contacts";
import Suggestions from "./Components/Suggestions";
import Feed from "./Components/Feed";


function App() {
  return (
      <div>
        <Header/>
        <Login/>
        <Contacts/>
        <Suggestions/>
        <Feed />
      </div>
  );
}

export default App;
