import React, { useState } from 'react';

const UploadDocument = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [categoria, setCategoria] = useState('');
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
    if (!selectedFile || !categoria) {
      setError('Debes seleccionar un archivo y una categoría.');
      return;
    }

    onFileUpload(selectedFile, categoria);
    setSelectedFile(null);
    setCategoria('');
    document.getElementById('file-input').value = '';
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

      <div>
        <label htmlFor="categoria">Categoría:</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="Procedimientos">Procedimientos</option>
          <option value="Manuales">Manuales</option>
          <option value="Políticas">Políticas</option>
          <option value="Informes">Informes</option>
        </select>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={handleUploadClick} disabled={!selectedFile}>
        Subir Documento
      </button>
    </div>
  );
};

export default UploadDocument;