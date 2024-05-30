import { Song } from "./Song"

export const Songs =({fn,allsongs})=>{
  console.log('All Songs',allsongs);
  //map (JS)
  // allsongs (data) --> convert -->JSX
  return (<>
       {allsongs.map((currentSong,index)=><Song fn = {fn} key ={index} song = {currentSong}/>)}
  </>)
}