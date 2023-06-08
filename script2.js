function uploadFiles() {
  // Get the files that the user has selected
  var files = document.getElementById("files").files;

  // Loop through the files and upload them to the server
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Create a new FormData object
    var formData = new FormData();

    // Add the file to the FormData object
    formData.append("file", file);

    // Make the Ajax request to upload the file
    $.ajax({
      url: "/upload",
      type: "POST",
      data: formData,
      processData: true,
      contentType: true,
      success: function(response) {
        // Check if the upload was successful
        if (response.success) {
          // If the upload was successful, unzip the file
          if (file.type.indexOf("zip") != -1) {
            var zip = new JSZip(file);
            zip.files.forEach(function(file) {
              file. unzip(file.name);
            });
          }
        } else {
          // If the upload was not successful, show an error message
          alert("Upload failed!");
        }
      } or
      unction uploadFiles(files) {
  // Loop through the files and upload them one by one.
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var formData = new FormData();
    formData.append("file", file);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // The file was successfully uploaded.
      } else {
        // An error occurred while uploading the file.
      }
    };
    xhr.send(formData);
  }
}

// This function will unzip a file and save it to the current directory.
function unzipFile(file) {
  var zip = new JSZip(file);
  for (var i = 0; i < zip.files.length; i++) {
    var file = zip.files[i];
    file.saveAs(file.name);
  }
}

// This function will handle the file upload event.
document.querySelector("#upload").addEventListener("change", function(event) {
  var files = event.target.files;
  uploadFiles(files);
  for (var i = 0; i < files.length; i++) {
    if (files[i].name.endsWith(".zip")) {
      unzipFile(files[i]);
    }
  } or
 function uploadFiles(files) {
  // Loop through the files and upload them one by one.
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var formData = new FormData();
    formData.append("file", file);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // The file was successfully uploaded.
      } else {
        // An error occurred while uploading the file.
      }
    };
    xhr.send(formData);
  }
}

// This function will unzip a file and save it to the current directory.
function unzipFile(file) {
  var zip = new JSZip(file);
  for (var i = 0; i < zip.files.length; i++) {
    var file = zip.files[i];
    file.saveAs(file.name);
  }
}
