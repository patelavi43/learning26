import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
import { Employees } from "./components/Employees";
import { UserForm } from "./components/UserForm";
import { InputDemo1 } from "./components/input/InputDemo1";
import { InputDemo2 } from "./components/input/InputDemo2";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";
import { FormDemo3 } from "./components/form/FormDemo3";
import { FormDemo4 } from "./components/form/FormDemo4";
import { FormDemo5 } from "./components/form/FormDemo5";
import { FormDemo6 } from "./components/form/FormDemo6";
import { FormDemo7 } from "./components/form/FormDemo7";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { OmdbSearch } from "./components/api/OmdbSearch";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { ApiDemo3 } from "./components/api/ApiDemo3";      // NEW
import { MovieDetail } from "./components/api/MovieDetail";

function App() {


  return (
     <>
     <Navbar /> 

      <div >
        <Routes>
          <Route path="/netflixhome" element={<NetflixHome />} />
          {/* <Route path="/netflixanime" element={<NetflixAnime />} />
          <Route path="/netflixshow" element={<NetflixShow />} /> */}
          <Route path="/" element = {<HomeComponent/>}></Route>
          <Route path="*" element={<h1 style={{textAlign:"center"}}>404 Not Found</h1>}></Route>
          {/* <Route path="/netflixaction" element={<NetflixAction />} />
          <Route path="/netflixhorror" element={<NetflixHorror />} />
          <Route path="/watch/:name" element={<Watch />} />
          <Route path="/netflixmovies" element={<NetflixMovies />} /> */}
          {/* <Route path="/teams" element={<Teams />} />
          <Route path="/teamdetail/:teamName" element={<TeamDetail />} />
          <Route path="/usestatedemo1" element ={<UseStateDemo1 />} />
          <Route path="/usestatedemo2" element ={<UseStateDemo2 />} />
          <Route path="/usestatedemo3" element ={<UseStateDemo3 />} />
          <Route path="/employees" element ={<Employees />} /> */}
          {/* <Route path="/userform" element={<UserForm />} />
          <Route path="/inputdemo1" element = {<InputDemo1/>}></Route>
          <Route path="/inputdemo2" element = {<InputDemo2/>}></Route>
          <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
          <Route path="/formdemo2" element={<FormDemo2 />} />
          <Route path="/formdemo3" element={<FormDemo3 />} />
          <Route path="/formdemo4" element={<FormDemo4 />} />
          <Route path="/formdemo5" element={<FormDemo5 />} />
          <Route path="/formdemo6" element={<FormDemo6 />} />
          <Route path="/formdemo7" element={<FormDemo7 />} /> */}
          <Route path="/apidemodemo1" element={<ApiDemo1 />} />
          <Route path="/apidemo2" element={<ApiDemo2 />} />
          <Route path="/apidemo3" element={<ApiDemo3 />} />      {/* NEW */}
          <Route path="/omdb" element={<OmdbSearch />} />
          <Route path="/movie/:imdbid" element={<MovieDetail />} />
        </Routes>
       </div>

      
    </>
  );
}

export default App;