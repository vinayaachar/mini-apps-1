const fileUplaod = (file) => {
  var formData = new FormData();
  formData.append('file', file);
  $.ajax({
    type: 'POST',
    data: formData,
    url: 'http://localhost:8080/' ,
    cache: false,
    contentType: false,
    processData: false,
    success: () => {
      console.log('Succesfully Uploaded File')
    }
  });
};

$('file').on('submit', function(e) {
  e.preventDefault();

  var form = $('form .file')[0];
  var file = form.files[0];
  fileUplaod(file);
});

