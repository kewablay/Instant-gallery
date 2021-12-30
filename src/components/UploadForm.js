import React,{ useState } from 'react'
import ProgressBar from './ProgressBar'

function UploadForm() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ["image/jpeg","image/png"];

    const changeHandler = (e) => {
      let selected = e.target.files[0]
      // console.log(selected);

      if (selected && types.includes(selected.type)){
        setFile(selected)
        setError(null)
      }else{
        setFile(null)
        setError("Please select an image file (png or jpeg)")
      }
    }

    return (
      <form className="upload-form">
        <input type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div>{error}</div>}
          {/* {file && <div>{file.name}</div>} */}
          {file && <ProgressBar file={file} setFile={setFile}/>} 
        </div>
      </form>
    );
}

export default UploadForm
