$(.button).on('click', function () {
  const serverUrl = 'http://127.0.0.1:8080/'
  $.ajax({
    url: server.js,
    type: 'POST',

    data: new FormData($('form')[0]),
    cache: false,
    contentType: false,
    processData: false,

    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      if (myXhr.upload) {
        // For handling the progress of the upload
        myXhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            $('progress').attr({
              value: e.loaded,
              max: e.total,
            });
          }
        }, false);
      }
      return myXhr;
    }

  })
})

