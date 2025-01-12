document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('saveButton');
  const teacherCodeInput = document.getElementById('teacherCodeInput');
  const saveMessage = document.getElementById('saveMessage');

  saveButton.addEventListener('click', () => {
    const teacherCode = teacherCodeInput.value.trim();

    if (teacherCode) {
      // Kodni localStorage ga saqlash
      localStorage.setItem('teacherCode', teacherCode);
      saveMessage.textContent = 'Kod muvaffaqiyatli saqlandi!';
      saveMessage.style.color = 'green';
    } else {
      saveMessage.textContent = 'Iltimos, kodni kiriting.';
      saveMessage.style.color = 'red';
    }
    saveMessage.style.display = 'block';
  });
});
// Tasodifiy rasmlar ro'yxati
const images = [
  'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg',
  'https://images.pexels.com/photos/1005324/pexels-photo-1005324.jpeg?cs=srgb&dl=pexels-photo-1005324.jpg&fm=jpg',
  'https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=pexels-photo-34950.jpg&fm=jpg',
  'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?cs=srgb&dl=pexels-photo-414171.jpg&fm=jpg',
  'https://images.pexels.com/photos/712786/pexels-photo-712786.jpeg?cs=srgb&dl=pexels-photo-712786.jpg&fm=jpg'
];

// Tasodifiy rasmni tanlash
const randomImage = images[Math.floor(Math.random() * images.length)];

// Tanlangan rasmni sahifaning orqa foniga o'rnatish
document.body.style.backgroundImage = `url(${randomImage})`;
