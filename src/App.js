import React, { useState } from 'react';
import UploadDocument from './UploadDocument';
import DocumentList from './DocumentList';
import './App.css';

function App() {
  const [documents, setDocuments] = useState([]);

  const handleFileUpload = (file) => {
    setDocuments([...documents, file]);
  };

  return (
    <div className="App">
      <h1>Carga y Gestión de Documentos</h1>
      <UploadDocument onFileUpload={handleFileUpload} />
      <DocumentList documents={documents} />
    </div>
  );
}

export default App;