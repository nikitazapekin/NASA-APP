import React, { useEffect, useState } from 'react';
import { useActions } from "../../hooks/useActions";
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import JwtDecode from '../../hooks/jwt-decode.hook';
import "./addAvatar.scss"
import { fetchSetUserLogo } from '../../store/action-creator/setUserLogo';
function Avatar() {
  const {fetchUserData, fetchSetUserLogo} = useActions()
  const {data, loading, error} = useTypedSelectors(state=> state.GetUserDataReducer)
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const {userData} = JwtDecode()
useEffect(()=> {
console.log("From jwt "+JSON.stringify(userData))
}, [userData])
  useEffect(()=> {
fetchUserData()
  }, [])
  useEffect(()=> {
    if(typeof data.url=="string"){
      setImageUrl(data.url)
    }
  }, [data])
  /*
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }; */


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Проверяем размер файла
      if (file.size > 100 * 1024 * 1024) { // 100 MB в байтах
        // Если файл больше 100 МБ, обработать это здесь (например, вывести сообщение об ошибке)
        console.log("Файл слишком большой. Выберите файл размером до 100 МБ.");
        return; // Завершаем обработку
      }
  
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  useEffect(()=> {
    if(userData!=undefined){

      const token =userData.token
      if(typeof imageUrl =="string" && typeof token=="string"){
const url=imageUrl
        fetchSetUserLogo({token, url})
      }
    }
  }, [imageUrl, userData])
  return (
    <div className='avatarBlock' >
      <input
      className='inputAddAvatar'
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {imageUrl && (
        <div>
          {typeof imageUrl!= null && (
            <img
            className='loadedAvatar'
            src={imageUrl} alt="Загруженное фото"
            />
          )}
        </div>
      )}
      <div className="boxOfUserData">
   <h1 className='nameOfAutherizedUser'>
{data.firstName +" "+data.secondName}
   </h1>
   <h2 className='emailOfAutherizedUser'>
{data.email}
<span
className='changeEmail'
>Change email</span>
<hr className='lineChangeEmail' />
   </h2>
   <h2 className='emailOfAutherizedUser'>
<input
placeholder='Type new password'
name="password"
className='changePasswordInput'
/>
<span
className='changeEmail'
>Change email</span>
<hr className='lineChangeEmail' />
   </h2>
<button
 className='saveChanges'
 >
  Save
</button>
      </div>
    </div>
  );
}

            
export default Avatar;