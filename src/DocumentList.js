import React, { useState } from 'react';

function DocumentList() {
  const [documents, setDocuments] = useState([]);

  // Función para agregar un documento a la lista
  const addDocument = (file) => {
    setDocuments([...documents, file]);
  };

  // Manejo de subida y almacenamiento en lista
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      addDocument(selectedFile);
    }
  };

  return (
    <div>
      <h2>Documentos Subidos</h2>
      <input type="file" onChange={handleFileChange} />
      <ul>
        {documents.map((doc, index) => (
          <li key={index}>
            {doc.name}
            <button onClick={() => {
              const link = document.createElement('a');
              link.href = URL.createObjectURL(doc);
              link.download = doc.name;
              link.click();
            }}>
              Descargar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentList;
