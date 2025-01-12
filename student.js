document.addEventListener('DOMContentLoaded', () => {
  const checkButton = document.getElementById('checkButton');
  const resultMessage = document.getElementById('resultMessage');
  const codeInput = document.getElementById('codeInput');

  // LocalStorage dan o'qituvchidan saqlangan to'g'ri kodni olish
  const correctCode = localStorage.getItem('teacherCode');

  checkButton.addEventListener('click', function () {
    const enteredCode = codeInput.value.trim();

    // Agar to'g'ri kod mavjud bo'lsa, uni tekshiradi
    if (enteredCode === correctCode) {
      resultMessage.textContent = 'Tabriklayman! Sizning javobingiz to\'g\'ri.';
      resultMessage.style.color = 'green';
      resultMessage.style.display = 'block';
      triggerConfetti(); // Confetti effektini ishga tushurish
    } else {
      resultMessage.textContent = 'Kechirasiz, javobingiz noto\'g\'ri.';
      resultMessage.style.color = 'red';
      resultMessage.style.display = 'block';
    }
  });

  // Confetti effektini ishga tushirish
  function triggerConfetti() {
    if (window.confetti) { // Confetti kutubxonasi mavjudligini tekshiradi
      // Dinamik va boy effekt uchun confetti-ni bir necha marta ishga tushirish
      const duration = 2 * 1000; // 2 soniya davom etadi
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 7, // Har chaqirishda 7 ta zarracha
          angle: randomInRange(55, 125), // Tasodifiy burchak
          spread: randomInRange(50, 100), // Tasodifiy tarqalish
          origin: {
            x: randomInRange(0.1, 0.9), // Boshlanish nuqtasi X
            y: Math.random() - 0.2, // Boshlanish nuqtasi Y
          },
          colors: ['#ff0', '#f0f', '#0ff', '#ff6347', '#40e0d0', '#7fff00'], // Yorqin ranglar
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })(); // Bu yerda anonim funksiya chaqiriladi
    } else {
      console.error("Confetti kutubxonasi mavjud emas.");
    }
  }

  // Tasodifiy qiymatlarni yaratish uchun yordamchi funksiya
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg',
    'https://images.pexels.com/photos/1005324/pexels-photo-1005324.jpeg?cs=srgb&dl=pexels-photo-1005324.jpg&fm=jpg',
    'https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=pexels-photo-34950.jpg&fm=jpg',
    'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?cs=srgb&dl=pexels-photo-414171.jpg&fm=jpg',
    'https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?cs=srgb&dl=pexels-photo-712786.jpg&fm=jpg',
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(${randomImage})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
});
