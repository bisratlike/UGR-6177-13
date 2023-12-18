
const form = document.querySelector('form');
const messageInput = document.getElementById('message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const message = messageInput.value;

  if (!message) {
    
    return;
  }

  const emailUrl = `mailto:bisratmelak1@gmail.com?subject=${encodeURIComponent('New message')}&body=${encodeURIComponent(message)}`;

  try {
    await window.open(emailUrl);
    
  } catch (error) {
    alert('Error sending message. Please make sure your device can send emails.');
  }
});