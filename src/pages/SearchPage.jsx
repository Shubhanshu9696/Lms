import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs } from "../service/api-client";
import { Player } from "../components/Player";

export const SearchPage = ()=>{
  const [allSongs, setSongs] = useState([]);
   //Component Life Cycle
   const [flag, setFlag] = useState(false);
   const [song, setPlayerSong] = useState(null);
   
   const loadSongs = async ()=>{
     setSongs(await getSongs('Latest Songs'));
   } 
   useEffect( ()=>{
     loadSongs();
   },[])

   const togglePlayer = (flag, songarg)=>{
    setPlayerSong(songarg);
    setFlag(flag);
   }

  const getArtistName = async (artistName)=>{
    console.log('Rec Artist Name',artistName);
    setSongs (await getSongs(artistName));
  }
   const jsx = <> <Search fn = {getArtistName}/>
          <Songs fn ={togglePlayer} allsongs = {allSongs}/>                   
   </>;
  return (
   <div className="container">
    {/* <h1 className="alert alert-info text-center mt-3">Music Store</h1> */}
      
      {flag?<Player fn={togglePlayer} song = {song}/>:jsx}
  
   </div>);
}