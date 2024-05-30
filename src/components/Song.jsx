import { useState } from "react";

export const Song = ({fn, song})=>{
  console.log(song);
  const[playerFlag, setPLayerFlag] = useState(true);
  const showPlayer = ()=>{
    fn(true, song);
  }
  return(<div className = "row p-3">
    <div className="col-4">
      <img src= {song.artworkUrl100}/>
    </div>
    <div className="col-4">
    {song.artistName} {song.trackName}   
    </div>
    <div className="col-4">
      <button onClick={showPlayer} className="btn btn-primary">Play Song</button>
    </div>
    </div>)
}