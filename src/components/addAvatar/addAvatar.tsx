import React, { useEffect, useState } from 'react';
import { useActions } from "../../hooks/useActions";
import { useTypedSelectors } from '../../hooks/useTypedSelectors';
import JwtDecode from '../../hooks/jwt-decode.hook';
import "./addAvatar.scss"
import Spinner from '../spinner/spinner';
function Avatar() {
  const { fetchSetUserLogo, fetchSetEmailAndPassword, fetchUserDataToken } = useActions();
  const { data, loading, error } = useTypedSelectors(state => state.GetUserDataTokenReducer);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { userData } = JwtDecode();
  const [personalData, setPersonalData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (userData != undefined) {
      fetchUserDataToken(userData.token);
    }
  }, [userData]);
  useEffect(() => {
    if (data.url && typeof data.url === "string") {
      setImageUrl(data.url);
    }
  }, [data]);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        console.log("Файл слишком большой. Выберите файл размером до 100 МБ.");
        return;
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
  useEffect(() => {
    if (userData !== undefined && imageUrl && typeof imageUrl === "string") {
      const token = userData.token;
      const url = imageUrl;
      if (typeof token == "string") {
        fetchSetUserLogo({ token, url });
      }
    }
  }, [imageUrl, userData]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersonalData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleClick = () => {
    if (userData != undefined) {
      if (typeof userData.token == "string" && userData != undefined) {
        fetchSetEmailAndPassword(personalData, userData.token)
      }
    }
  }
  if (loading) {
    return (
      <Spinner />
    )
  }
  return (
    <div className='avatarBlock'>
      <input
        className='inputAddAvatar'
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {imageUrl && (
        <div>
          {typeof imageUrl !== null && (
            <img
              className='loadedAvatar'
              src={imageUrl}
              alt="Загруженное фото"
            />
          )}
        </div>
      )}
      <div className="boxOfUserData">
        <h1 className='nameOfAutherizedUser'>
          {data.firstName + " " + data.secondName}
        </h1>
        <h2 className='emailOfAutherizedUser'>
          {data.email}
          <input
            onChange={handleChange}
            placeholder='Type new email'
            name="email"
            className='changePasswordInput'
          />
          <span
            className='changeEmail'
          >Change email</span>
          <hr className='lineChangeEmail' />
        </h2>
        <h2 className='emailOfAutherizedUser'>
          <input
            onChange={handleChange}
            placeholder='Type new password'
            name="password"
            className='changePasswordInput'
          />
          <span
            className='changeEmail'
          >Change password</span>
          <hr className='lineChangeEmail' />
        </h2>
        <button
          className='saveChanges'
          onClick={handleClick}
        >
          Save
        </button>
      </div>

    </div>
  );
}

export default Avatar;
