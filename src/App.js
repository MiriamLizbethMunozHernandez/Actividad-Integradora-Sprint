import React from 'react';
import UploadDocument from './UploadDocument';  // Importamos el componente de subir documento
import DocumentList from './DocumentList';      // Importamos el componente para ver los documentos
import './App.css';  // Mantén los estilos si los estás usando

function App() {
  return (
    <div className="App">
      <h1>Portal Farmaceutica</h1>
      <UploadDocument />  {/* Aquí se mostrará el formulario para subir documentos */}
      <DocumentList />    {/* Aquí se mostrará la lista de documentos subidos */}
    </div>
  );
}

export default App;
