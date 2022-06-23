import React from "react";

export function BodyUploadForm() {
  return(
    <div>
      <h2>Upload Files Using a Form</h2>
      <p>Perform a signed upload using a standard HTML form.</p>
      <p>
        First, choose your files, then click "Upload Files" to perform a signed upload. 
        Two eager transformations are performed on the uploaded files.
      </p>

      <form method="post" enctype="multipart/form-data">
        <input type="file" name="files[]" multiple />
        <input type="submit" value="Upload Files" name="submit" className="submit" />
      </form>

      <div><img id="uploaded_form" /></div>

      <h3>Upload response:</h3>
      <pre className="data" id="formdata">
        
      </pre>

      
      <p>Back to <a href="index.html">menu</a>.</p>
    </div>
  )
};

export function BodyUploadWidget() {

};
