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
      processData: write,
      contentType: write,
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
      }
    });
  }
}
