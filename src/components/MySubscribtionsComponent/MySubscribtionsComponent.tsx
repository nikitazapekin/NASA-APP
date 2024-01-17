import React, { useEffect, useState } from 'react';
import { useActions } from "../../hooks/useActions";
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import JwtDecode from '../../hooks/jwt-decode.hook';
import "./MySubscribtionsComponent.scss"
import Spinner from '../spinner/spinner';
import TrashIcon from "../../asserts/trash.png"
import { handleRemoveArticle } from '../../http/subscribtions';
import { MyArticleDataState } from '../../types/MyArticlesData';
import { Props } from './Props';
function MySubscribtionsComponent() {
  const { fetchMyArticlesData, fetchArticle } = useActions();
  const [isSelected, setIsSelected] = useState<Boolean>(false)
  const [stateOfDate, setStateOfData] = useState<Props | undefined>()
  const { data, loading, error } = useTypedSelectors(state => state.MyArticlesDataReducer);
  const { data1, loading1, error1 } = useTypedSelectors(state => state.ArticleReducer)
  const [describtion, setDescribtion] = useState({
    date: "",
    title: "",
    describtion: ""
  })
  const [arrayOfPictures, setArrayOfPictures] = useState<String[]>([])
  const [arrayOfSounds, setArrayOfSounds] = useState<String[]>([])
  const [arrayOfVideos, setArrayOfVideos] = useState<String[]>([])
  const [clickedImages, setClickedImages] = useState(false);
  const [clickedSounds, setClickedSounds] = useState(false);
  const [clickedVideos, setClickedVideos] = useState(false);
  const { userData } = JwtDecode();
  useEffect(() => {
    if (userData != undefined) {
      const token = userData.token
      if (typeof token == "string") {
        fetchMyArticlesData(token)
      }
    }
  }, [userData])
  useEffect(() => {
    setStateOfData(data)
  }, [data, stateOfDate])
  useEffect(() => {
    setArrayOfPictures([])
    setArrayOfSounds([])
    setArrayOfVideos([])
    data1.collection.items.forEach(item => {
      if (typeof item.href == "string") {
        if (item.href.includes("mp4")) {
          setArrayOfVideos(prev => [...prev, item.href]);
        }
        if (item.href.includes("mp3") || item.href.includes("m4a")) {
          setArrayOfSounds(prev => [...prev, item.href]);
        }
        if (item.href.includes("png") || item.href.includes("jpg")) {
          setArrayOfPictures(prev => [...prev, item.href]);
        }
      }
    })
  }, [data1])
  const handleDisplay = (event: any) => {
    if (event.target.name == "videos") {
      setClickedVideos(true)
      setClickedImages(false)
      setClickedSounds(false)
    }
    if (event.target.name == "images") {
      setClickedVideos(false)
      setClickedImages(true)
      setClickedSounds(false)
    }
    if (event.target.name == "sounds") {
      setClickedVideos(false)
      setClickedImages(false)
      setClickedSounds(true)
    }
  }
  if (loading || loading1) {
    return <Spinner />
  }
  const handleNavigate = (param: string, describtion: string, date: string, title: string) => {
    setIsSelected(true)
    fetchArticle(param)
    setDescribtion({
      describtion: describtion,
      date: date,
      title: title
    })
  }
  const handleBack = () => {
    setIsSelected(false)
  }
  const handleRemove = (nasa_id: string, index: number) => {
    if (userData != undefined) {
      const token = userData.token
      if (typeof token == "string") {
        handleRemoveArticle(token, nasa_id)
        fetchArticle(token)
        if (stateOfDate != undefined) {
          if (stateOfDate.data != undefined) {
            stateOfDate.data.filter((item, indexx) => indexx != index)
            let clone = stateOfDate
            clone.data = stateOfDate.data.filter((item, indexx) => indexx != index)
            setStateOfData(clone)
          }
        }
      }
    }
  }
  return (
    <div className='subscribtionsBlock'>
      <h1 className="myFavouritePhotosTitle">
        My favourite articles
      </h1>
      {!isSelected && stateOfDate != undefined && stateOfDate.data[0] != undefined && (
        <>
          {stateOfDate.data.map((item, index) => (
            <div className="subscribtionBlockDiv">
              <h1
                className='subscribtionsBlockTitle'
                onClick={() => handleNavigate(item.collection.items[0].data[0].nasa_id, item.collection.items[0].data[0].description, item.collection.items[0].data[0].date_created, item.collection.items[0].data[0].title)}
              >
                {index + 1}. {item.collection.items[0].data[0].title}
              </h1>
              <button
                className="trashIconButton"
              >
                <img className="trashIconButtonImage" src={TrashIcon} onClick={() => handleRemove(item.collection.items[0].data[0].nasa_id, index)} />
              </button>
            </div>
          ))
          }
        </>
      )
      }
      {isSelected && (
        <div className="selectedSubscribtionObject">
          <button
            className='backToListOfSubscribtions'
            onClick={handleBack}
          >➜</button>
          <h1>{describtion.title} {describtion.date}</h1>
          <h2>{describtion.describtion}</h2>
          <div className="blockOfArticleMultimedia">
            <button className="buttonOfMultimedia" name="images" onClick={handleDisplay}>
              Images
            </button>
            <button className="buttonOfMultimedia" name="videos" onClick={handleDisplay}>
              Videos
            </button>
            <button className="buttonOfMultimedia" name="sounds" onClick={handleDisplay}>
              Sounds
            </button>
          </div>
          {clickedImages && arrayOfPictures.map((item, index) => (
            <img key={index} className="imageOfArticle" src={typeof item === "string" ? item : ""} alt="picture" />
          ))}
          {clickedVideos && arrayOfVideos.map((item, index) => (
            <video key={index} className="videoOfArticle imageOfArticle" controls>
              <source src={typeof item === "string" ? item : ""} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          ))}
          {clickedSounds &&
            arrayOfSounds.map((item, index) => (
              <audio key={index} className="audioOfArticle" controls>
                <source src={typeof item === "string" ? item : ""} type="audio/mpeg" />
                Your browser does not support the audio.
              </audio>
            ))}
          {clickedImages && arrayOfPictures.length === 0 && <h1 className="nothingToShow">No images</h1>}
          {clickedVideos && arrayOfVideos.length === 0 && <h1 className="nothingToShow">No videos</h1>}
          {clickedSounds && arrayOfSounds.length === 0 && <h1 className="nothingToShow">No sounds</h1>}
        </div>
      )}
    </div>
  );
}
export default MySubscribtionsComponent;
