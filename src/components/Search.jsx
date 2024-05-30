import { useRef } from "react";

export const Search = ({fn})=>{
  const artist = useRef();
  return(
    <>
        <label >Artist Name</label>
    <input ref = {artist} type = 'text' className = "form-control" placeholder = " Search Artist wise Song"/>
    <button className="bg-green-400 mt-2 mb-2 px-2  rounded-md hover:bg-green-600" onClick={()=>{
        fn(artist.current.value);
    }}>Search It</button>
  </>
  );
}