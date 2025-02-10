import React, { useState } from 'react';

const UploadDocument = () => {
  const [file, setFile] = useState(null);

  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  
  const handleUpload = () => {
    if (file) {
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);  
      link.download = file.name;  
      link.click();  
    }
  };

  return (
    <div>
      <h2>Subir Documento</h2>
      <div>
        <label htmlFor="file-input" className="custom-file-upload">
          Seleccionar archivo
        </label>
        <input
          type="file"
          id="file-input"
          onChange={handleFileChange}
          style={{ display: 'none' }} 
        />
        {file && <p>Archivo seleccionado: {file.name}</p>}
      </div>
      <button onClick={handleUpload}>Subir Documento</button>
    </div>
  );
};

export default UploadDocument;