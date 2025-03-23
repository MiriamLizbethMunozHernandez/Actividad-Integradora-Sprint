import React from 'react';

const DocumentList = ({ documents }) => {

  const descargarDocumento = (file) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.click();
  };

  return (
    <div>
      <h2>Documentos Subidos</h2>
      <ul>
        {documents.map((doc, index) => (
          <li key={index}>
            {doc.name}
            <button onClick={() => descargarDocumento(doc)}>
              Descargar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;