

import './App.css';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import AvgRating from './components/AvgRating';
import SentimentList from './components/SentimentList';
//import WebSiteBox from './components/WebSiteBox';
import WebSiteVisitor from './components/WebSiteVisitor';



function App() {
  return (
    <div className="App">
     
      <Sidebar/>
      
    
      <Reviews number={"1,281"}></Reviews>
      
      
      <AvgRating rating={"4.6"} />
     
      
      <SentimentList />
      
     
      <WebSiteVisitor list={'821'}/>
      
    </div>
  );
}

export default App;
