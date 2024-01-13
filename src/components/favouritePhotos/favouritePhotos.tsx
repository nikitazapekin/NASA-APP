import React, { useEffect, useState } from 'react';
import { useActions } from "../../hooks/useActions";
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import JwtDecode from '../../hooks/jwt-decode.hook';
import "./favouritePhotos.scss"
import Spinner from '../spinner/spinner';
import TrashIcon from "../../asserts/trash.png"
import { removePhotoFromFavourite } from '../../http/addPhotoToFavouritePhotos';

function MyFavouritePhotos() {
  const { fetchUserData, fetchUserDataToken, fetchFavouritePhotos } = useActions();
  const { data, loading, error } = useTypedSelectors(state => state.GetFavouritePhotosReducer);
  const { userData } = JwtDecode();
  useEffect(() => {
    if(userData!=undefined){
  fetchFavouritePhotos(userData.token);
    }
  }, [userData])
  useEffect(()=> {
console.log("DATA" +JSON.stringify(data.data))
  }, [data])
  const handleRemove =(url: string) => {
    if(userData!=undefined){
      if(typeof userData.token=="string"){
        const token=userData.token
        removePhotoFromFavourite({token, url})
        fetchFavouritePhotos(userData.token);
      }
        }
  }
if(loading) {
  return <Spinner />
}
  return (
    <div className='avatarBlock'>
 <h1 className="myFavouritePhotosTitle">
  My favourite photos
 </h1>
 {
data.data.map((item, index)=> (
  <div className='favouritePhotosBlock'>
    <button
    onClick={()=>handleRemove(item.url)}
    className="trashIconButton">

 <img  className="trashIconButtonImage" src={TrashIcon} />
    </button>
    <h1 className="favouritePhotoTitle">{item.title}</h1>
    <h2 className="favouritePhotoDate">{item.date}</h2>
 <img src={item.url} />
 <h2 className="favouritePhotoExplanation">{item.explanation}</h2>

  </div>
))
 }


    </div>
  );
}

export default MyFavouritePhotos;
