import React, {useState} from "react";
import axios from "axios";
import './App.css'

function App(){
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData);
      setContent(response.data.content)
      console.log(response.data);
    } catch (error){
      console.error(error);
      alert("Error uploading file");
    }
  };

  return(
    <div>
      <h1>Upload a Lecture File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      <h2>Preview:</h2>
      <pre>{content}</pre>
      <div className="bg-blue-500 text-white p-4">
      Tailwind is working!
      </div>
    </div>
    
  );
}

export default App;