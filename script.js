const btn = document.getElementById('btn');
const toasts = document.getElementById('toasts');

const messages = [
  'Battlecruiser operational!',
  'Good day, commander!',
  'Hailing frequencies open.',
  'Receiving transmission.',
  'All crews reporting.',
  'Make it happen.',
  'Take it slow.',
  'Set the course.',
];

btn.addEventListener('click', () => createNotification());

function createNotification() {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.innerText = getRandomMsg();
  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3300);
}

function getRandomMsg() {
  return messages[Math.floor(Math.random() * messages.length)];
}
