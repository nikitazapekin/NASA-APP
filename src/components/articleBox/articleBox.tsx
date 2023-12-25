
import { fetchArticle } from "../../store/action-creator/article";
import "./articleBox.scss"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import "./articleBox.scss"
import { useActions } from "../../hooks/useActions"
import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner"
import ErrorBoundary from "../ErrorBoundary/errorBoundary";
interface props {
    id: string | undefined,
    idd: string |  undefined
}
const ArticleBox = ({id, idd}: props) => {
    const {data1,loading1, error1} =useTypedSelectors(state=> state.ArticleReducer)
    const {data, error, loading} =useTypedSelectors(state=>state.NasaDatabaseListReducer)
    const [uniqueLinksArray, setUniqueLinksArray] = useState([])
    const [arrayOfPictures, setArrayOfPictures] = useState<String[]>([])
    const [arrayOfSounds, setArrayOfSounds] =useState<String[]>([])
    const [arrayOfVideos, setArrayOfVideos] = useState<String[]>([])
    const [clickedImages, setClickedImages] =useState(false);
    const [clickedSounds, setClickedSounds] =useState(false);
    const [clickedVideos, setClickedVideos] =useState(false);
    const {fetchArticle, fetchNasaDatabase} =useActions()
    useEffect(()=> {
        if(typeof id=="string" && typeof idd=="string"){
            fetchArticle(id)
            fetchNasaDatabase(idd)
        } 
    }, [])
    useEffect(()=> {

    }, [data])
    useEffect(()=> {
        setArrayOfPictures([])
        setArrayOfSounds([])
        setArrayOfVideos([])
console.log("DATA!" + JSON.stringify(data1))
data1.collection.items.forEach(item => {
    if(typeof item.href=="string"){
        if(item.href.includes("mp4")){
            setArrayOfVideos(prev => [...prev, item.href]);
        }
        if(item.href.includes("mp3") || item.href.includes("m4a") ){
            setArrayOfSounds(prev => [...prev, item.href]);
        }
        if(item.href.includes("png") || item.href.includes("jpg") ){
            setArrayOfPictures(prev => [...prev, item.href]);
        }
    }
})
    }, [data1])

    const handleDisplay =(event: any)=> {
        console.log("ev" +event.target.name)
        if(event.target.name=="videos"){
            setClickedVideos(true)
            setClickedImages(false)
            setClickedSounds(false)
        }
        if(event.target.name=="images"){
            console.log("AR"+arrayOfPictures)
            for(let i=0; i<arrayOfPictures.length; i++){
                console.log(arrayOfPictures[i])
            }
            setClickedVideos(false)
            setClickedImages(true)
            setClickedSounds(false)
        }
        if(event.target.name=="sounds"){
            setClickedVideos(false)
            setClickedImages(false)
            setClickedSounds(true)
        }
    }
    if(loading || loading1) {
        return (
            <Spinner />
        )
    }
    return ( 
    <div className="articleBox">
        <div className="imagesOfArticle">
 <h1 className="articleTitle">
            {(() => {
                try {
                    return data.collection.items[0]?.data[0]?.title || '';
                } catch (error) {
                    return '';
                }
            })()} ({(() => {
                try {
                    return data.collection.items[0]?.data[0]?.date_created || '';
                } catch (error) {
                    return '';
                }
            })()})
            </h1>
<br />
<h2 className="subArticleTitle">
  {(() => {
      try {
                    return  `Describtion: ${data.collection.items[0].data[0].description}` || '';
                } catch (error) {
                    return '';
                }
            })()}
            </h2>

<div className="blockOfArticleMultimedia">
    <button  className="buttonOfMultimedia"  name="images" onClick={handleDisplay}>
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
    </div> 
    );
}
 
export default ArticleBox;   