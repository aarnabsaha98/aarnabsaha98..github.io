// function myFunctionDark() {
//   document.body.style.color = "white";
//   document.body.style.backgroundColor = "#28282e";
//   document.getElementById("contact").style.backgroundColor = "#323238";
// }

// function myFunctionLight() {
//   document.body.style.color = "black";
//   document.body.style.backgroundColor = "white";
//   document.getElementById("contact").style.backgroundColor = "#d4d6d2";
// }


function onSubmit(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;
  console.log(name, message);
  // window.open(`mailto:aarnabsaha98@gmail.com?subject=${name}&body=${message}`);
}
function sendEmail() {
  const data = {
    personalizations: [
      {
        to: [{ email: "recipient@example.com" }],
      },
    ],
    from: { email: "sender@example.com" },
    subject: "Test Email",
    content: [{ type: "text/plain", value: "This is a test email." }],
  };

  fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_SENDGRID_API_KEY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

// function getFileIdByName(fileName) {
//   var query = "name='" + fileName + "'";
//   var token = gapi.auth2
//     .getAuthInstance()
//     .currentUser.get()
//     .getAuthResponse().access_token;
//   var url =
//     "https://docs.google.com/document/d/1Y_JPUm4Ba8HvSA-Xhv3s3NxODUQJy401 +
//     encodeURIComponent(query);
//   return fetch(url, {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.files && data.files.length > 0) {
//         return data.files[0].id;
//       } else {
//         return null;
//       }
//     });
// }

// function downloadFile(fileId, accessToken) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(
//     "GET",
//     "https://www.googleapis.com/drive/v3/files/" + fileId + "?alt=media"
//   );
//   xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       // The file contents are in xhr.responseText
//       console.log(xhr.responseText);
//       alert('download complete');
//     } else {
//       console.error("Error downloading file");
//     }
//   };
//   xhr.send();
// }
function download() {
  console.log("download complete");
  axios({
    url: "https://docs.google.com/document/d/1Y_JPUm4Ba8HvSA-Xhv3s3NxODUQJy401/edit",
    method: "GET",
    responseType: "blob",
    header: "Access-Control-Allow-Origin",
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "ArnabResume.doc");
    document.body.appendChild(link);
    link.click();
  });
}
