import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import ContentComponent from "./components/ContentComponent";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";
import { MapDemo6 } from "./components/MapDemo6";
import { MapDemo7 } from "./components/MapDemo7";
import { MapDemo8 } from "./components/MapDemo8";
import { MapDemo9 } from "./components/MapDemo9";
import { MapDemo10 } from "./components/MapDemo10";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixAnime } from "./components/NetflixAnime";
import { NetflixShow } from "./components/NetflixShow";
import { Navbar } from "./components/Nevbar";
import { HomeComponent } from "./components/HomeComponent";
import { NetflixAction } from "./components/NetflixAction";
import { NetflixHorror } from "./components/NetflixHorror";
import { Watch } from "./components/Watch";
import { Teams } from "./components/Team";
import { TeamDetail } from "./components/TeamDetail";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";



function App() {


  return (
     <>
     <Navbar /> 

      <div >
        <Routes>
          <Route path="/netflixhome" element={<NetflixHome />} />
          <Route path="/netflixanime" element={<NetflixAnime />} />
          <Route path="/netflixshow" element={<NetflixShow />} />
          <Route path="/" element = {<HomeComponent/>}></Route>
          <Route path="*" element={<h1 style={{textAlign:"center"}}>404 Not Found</h1>}></Route>
          <Route path="/netflixaction" element={<NetflixAction />} />
          <Route path="/netflixhorror" element={<NetflixHorror />} />
          <Route path="/watch/:name" element={<Watch />} />
          <Route path="/netflixmovies" element={<NetflixMovies />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teamdetail/:teamName" element={<TeamDetail />} />
          <Route path="/usestatedemo1" element ={<UseStateDemo1 />} />
          <Route path="/usestatedemo2" element ={<UseStateDemo2 />} />
          <Route path="/usestatedemo3" element ={<UseStateDemo3 />} />
        </Routes>
       </div>

      
    </>
  );
}

export default App;