
const backendURL = "http://192.168.0.215:4000/";

function fetchBackendData() {
  fetch(backendURL)
    .then(response => response.json())
    .then(data => {
      console.log("Olingan ma'lumot:", data);
      displayCards(data.data);
    })
    .catch(error => {
      console.error("Xatolik:", error);
    });
}

function displayCards(data) {
  const container = document.getElementById('cardContainer');
  container.innerHTML = '';

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    // Add card content
    card.innerHTML = `
        <img src="${item.sertificateImageUrl}" alt="O'quvchi rasmi">
      <h3>${item.studentLastName}</h3>
      <p><strong>id:</strong> ${item._id}</p>
      <p><strong>studenLasttName:</strong> ${item.studentEngLastName}</p>
      <p><strong>studentName:</strong> ${item.studentName}</p>
      <p><strong>"studentEngName:</strong> ${item.studentEngName}</p>
      <p><strong>studentFatherName:</strong> ${item.studentFatherName}</p>
      <p><strong>studentFatherEngName:</strong> ${item.studentFatherEngName}</p>
      <p><strong>studentPassportSeries:</strong> ${item.studentPassportSeries}</p>
      <p><strong>studentPassportNumber:</strong> ${item.studentPassporNumber}</p>
      <p><strong>studentWorkPlace:</strong> ${item.studentWorkPlace}</p>
      <p><strong>sertificatePrinted:</strong> ${item.sertificatePrinted}</p>
      <p><strong>JSHSHIR:</strong> ${item.studentPassportJSHSHIR}</p>
      <p><strong>sertificate Number:</strong> ${item.sertificateRegistrationNumber}</p>
      <p><strong>sertificatePrinted:</strong> ${item.sertificatePrinted}</p>
      <p><strong>sertificate Date:</strong> ${item.sertificateDate}</p>
      
      <div class="data">
    `;
    card.addEventListener('click', () => {
      alert(`Ma'lumotlar:\nid: ${item._id}\nstudenLasttName : ${item.studentEngLastName}\nstudentName : ${item.studentName}\nstudentEngName${item.studentEngName}\nstudentFatherName${item.studentFatherName}\nstudentFatherEngName${item.studentFatherEngName}\nstudentPassportSeries${item.studentPassportSeries}\n${item.studentPassporNumber}\nstudentWorkPlace${item.studentWorkPlace}\n${item.sertificatePrinted}\n${item.studentPassportJSHSHIR}\n${item.sertificateRegistrationNumber}\n${item.sertificatePrinted}\n${item.sertificateDate}`);
    });

    container.appendChild(card);
  });
}


fetchBackendData();
