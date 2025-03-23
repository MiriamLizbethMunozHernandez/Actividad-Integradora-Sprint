import React, { useState } from 'react';

const UploadDocument = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const formatosPermitidos = ['pdf', 'doc', 'docx'];
  const tamañoMaximoMB = 5;

  const validarArchivo = (file) => {
    const extension = file.name.split('.').pop().toLowerCase();
    const tamañoMB = file.size / 1024 / 1024;

    if (!formatosPermitidos.includes(extension)) {
      setError(`Formato no válido. Permitidos: ${formatosPermitidos.join(', ')}`);
      return false;
    }

    if (tamañoMB > tamañoMaximoMB) {
      setError(`El archivo supera el tamaño máximo permitido (${tamañoMaximoMB} MB).`);
      return false;
    }

    setError('');
    return true;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && validarArchivo(file)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null);
      document.getElementById('file-input').value = '';
    }
  };

  return (
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

      {selectedFile && <p>Archivo seleccionado: <strong>{selectedFile.name}</strong></p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={handleUploadClick} disabled={!selectedFile}>
        Subir Documento
      </button>
    </div>
  );
};

export default UploadDocument;