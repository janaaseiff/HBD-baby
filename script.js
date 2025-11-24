



// ====== LOVE LETTER POPUPS ======
const envelopes = document.querySelectorAll('.envelope-btn');
const letters = document.querySelectorAll('.letter-popup');
const closes = document.querySelectorAll('.close-btn');

envelopes.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    letters[index].style.display = 'flex';
  });
});

closes.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    letters[index].style.display = 'none';
  });
});


const showLetterBtn = document.getElementById('showLetterBtn');
const loveLetterContent = document.getElementById('loveLetterContent');

showLetterBtn.addEventListener('click', () => {
  loveLetterContent.classList.toggle('hidden');
  if (!loveLetterContent.classList.contains('hidden')) {
    showLetterBtn.textContent = "Close Love Letter 💌";
  } else {
    showLetterBtn.textContent = "Open Love Letter 💌";
  }
});



// Close popup by clicking outside the letter content
letters.forEach((popup) => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});

// ====== PLAY SONGS ======
function playSong(url) {
  window.open(url, '_blank'); // يفتح لينك الأغنية في تبويب جديد
}



// ====== TIMER ======
function updateTimer() {
  const startDate = new Date(2021, 10, 26); // 26/11/2021 (شهر نوفمبر = 10)
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);

  const days = Math.floor(diff / 86400);
  diff -= days * 86400;
  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff - minutes * 60;

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

const heartBox = document.querySelector('.heart-container');
const heartPopup = document.querySelector('.heart-popup');
const closeHeartPopup = document.querySelector('.close-heart-popup');

heartBox.addEventListener('click', () => {
  heartPopup.style.display = 'flex';
});

closeHeartPopup.addEventListener('click', () => {
  heartPopup.style.display = 'none';
});

// إغلاق عند الضغط بره الرسالة
heartPopup.addEventListener('click', () => {
  if(e.target === heartPopup){
    heartPopup.style.display = 'fixed';
  }
});


document.getElementById("submitCode").onclick = () => {
  const correct = "JA";
  if (document.getElementById("secretInput").value === correct) {
    document.getElementById("secretPage").style.display = "none";
  } else {
    alert("Wrong code baby 😘");
  }
};



