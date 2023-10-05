import React, { useState } from 'react';

function Avatar() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
console.log("This"+imageUrl)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div >
      <h1>Фото загрузчик</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {imageUrl && (
        <div>
          <h2>Загруженное фото:</h2>
          <img src={imageUrl} alt="Загруженное фото" />
         
        </div>
      )}
    </div>
  );
}

export default Avatar;