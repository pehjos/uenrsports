
import React,{useEffect,useState} from 'react';
import Home from './component/Home';
import Login from './component/Auth/Login';
import Signup from './component/Auth/Signup';
import Ball from './component/ROUTECOMPONENT/news/Football';
import Volley from './component/ROUTECOMPONENT/news/Volley';
import Basket from './component/ROUTECOMPONENT/news/Basket';
import MessageRoute from './component/ROUTECOMPONENT/Messageroute'
import Schedule from './component/ROUTECOMPONENT/match/Schedule';
import News from './component/ROUTECOMPONENT/match/News';
import Highlights from './component/ROUTECOMPONENT/match/Highlights';
import About from './component/about/About';
import Temposts from './component/ROUTECOMPONENT/Tempost'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePlayers from './component/players/HomePlayers';
import Dashboard from './component/Dashboard/DashboardHome';
import Statistics from './component/statistics/Statistics';
import SettigsHome from './component/Settings/SettingsHome';
import Post from './component/Post/Post';
import Form from './component/Post/Form';
import Coachform from './component/Coach/Coachform'
import AddPlayer from './component/Settings/Addplayer'
import AddStats from './component/statistics/Addstats'
import  PlayerDetails from './component/statistics/PlayerDetails'
import Homecomponent from './component/ROUTECOMPONENT/Home'
import BottomNav from './component/pagination/BottomNav/BottomNav'
import Updateplayer from './component/ROUTECOMPONENT/Updateplayer';
import PlayerDel from './component/ROUTECOMPONENT/DeletePlayer';
import UpdateCoach from './component/ROUTECOMPONENT/UpdateCoach'
import Football from './component/ROUTECOMPONENT/Football'
import Volleyball from './component/ROUTECOMPONENT/Volleyball'
import Basketball from './component/ROUTECOMPONENT/Basketball'
import Atlete from './component/ROUTECOMPONENT/Atlete'
import Decipline from './component/ROUTECOMPONENT/Decipline'
import Unit from './component/ROUTECOMPONENT/Unit'
import Rent from './component/rent/Rent'
import DeleteCoach from './component/ROUTECOMPONENT/DeleteCoach'
import Contact from './component/contact/Contact'
import Search from './component/search/Search';
function App() {
  const [currentId, setCurrentId] = useState(0);
  return (
    <div className="App">
 
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/players" element={<HomePlayers/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/stats" element={<Statistics/>} />
      <Route path="/settings" element={<SettigsHome/>} />
      <Route path="/playerupdate" element={<Updateplayer/>} />
      <Route path="/coachupdate" element={<UpdateCoach/>} />
      <Route path="/coachdelete" element={<DeleteCoach/>} />
      <Route path="/playerdelete" element={<PlayerDel/>} />
      <Route path="/settings" element={<SettigsHome/>} />
      <Route path="/football" element={<Football/>} />
      <Route path="/atlete" element={<Atlete/>} />
      <Route path="/unit" element={<Unit/>} />
      <Route path="/rent" element={<Rent currentId={currentId} setCurrentId={setCurrentId}/>} />
      <Route path="/decipline" element={<Decipline/>} />
      <Route path="/volleyball" element={<Volleyball/>} />
      <Route path="/basketball" element={<Basketball/>} />
      <Route path="/ball" element={<Ball/>} />
      <Route path="/volley" element={<Volley/>} />
      <Route path="/basket" element={<Basket/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/messages" element={<MessageRoute/>} />
      <Route path="/highlights" element={<Highlights/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/schedule" element={<Schedule/>} />
      <Route path="/posts" element={<Temposts/>} />
      <Route path="/home" element={<Homecomponent/>} />
      <Route path="/details/:id" element={<PlayerDetails/>}/>
      <Route path="/contact" element={<Contact  currentId={currentId} setCurrentId={setCurrentId}/>} />
      <Route path="/post" element={<Post  currentId={currentId} setCurrentId={setCurrentId}/>} />
      <Route path="/coach" element={<Coachform  currentId={currentId} setCurrentId={setCurrentId}/>} />
      <Route path="/addplayer" element={<AddPlayer  currentId={currentId} setCurrentId={setCurrentId}/>} />
      <Route path="/article" element={<Form  currentId={currentId} setCurrentId={setCurrentId}/>} />
      <Route path="/addstats" element={<AddStats  currentId={currentId} setCurrentId={setCurrentId}/>} />
    </Routes>
    <BottomNav/>
  </BrowserRouter>

    </div>
  );
}

export default App;
