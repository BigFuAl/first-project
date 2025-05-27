// smart-daily-dashboard/script.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOM loaded. JS running.');

  // ─── Dark-Mode Toggle Setup ───
  const themeToggle = document.getElementById('themeToggle');
  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.innerText = savedTheme === 'dark' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.innerText = next === 'dark' ? '☀️' : '🌙';
  });

  // ─── Your Existing Greeting & Advice Logic ───
  const nameInput     = document.getElementById('nameInput');
  const moodSelect    = document.getElementById('moodSelect');
  const emotionSelect = document.getElementById('emotionSelect');
  const messageArea   = document.getElementById('messageArea');
  const adviceArea    = document.getElementById('adviceArea');
  const greeting      = document.getElementById('greeting');
  const startBtn      = document.getElementById('startBtn');
  const greetingTitle = document.querySelector('h1');

  // Time-based greeting
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    greetingTitle.innerText = 'Good morning!';
  } else if (currentHour < 17) {
    greetingTitle.innerText = 'Good afternoon!';
  } else {
    greetingTitle.innerText = 'Good evening!';
  }

  // Restore saved name
  const savedName = localStorage.getItem('username');
  if (savedName) {
    nameInput.value = savedName;
    greeting.innerText = `Welcome back, ${savedName}.`;
  }

  // Advice map for emotions
  const adviceMap = {
    anxious:
      'Breathe in through nose for 4 seconds…',
    sad:
      'It is okay to feel sadness…',
    angry:
      'Remove yourself…: 5 things you see, 4 things you feel…',
    happy:
      'This is awesome! Remember to write down this feeling…'
  };

  startBtn.addEventListener('click', () => {
    const name  = nameInput.value.trim();
    const mood  = moodSelect.value;
    const emotion = emotionSelect.value;

    if (!name) {
      alert('Please enter your name.');
      return;
    }

    localStorage.setItem('username', name);
    greeting.innerText = `Good day, ${name}!`;

    // Mood message
    let msg = {
      happy:   'Keep shining — your vibe is contagious!',
      tired:   'Take a deep breath. You’ve got this.',
      focused: 'Laser focus — stay locked in.',
      meh:     'Even the meh days pass. Proud of you.'
    }[mood] || 'Pick a mood first.';
    messageArea.innerText = msg;

    // Emotion advice
    adviceArea.innerText = adviceMap[emotion] || '';
  });

  // ─── Chart.js Bar-Chart Setup ───
  const canvas = document.getElementById('productivityChart');
  if (canvas && window.Chart) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
          label: 'Tasks Completed',
          data: [3, 2, 4, 5, 3, 1, 0],
          backgroundColor: 'rgba(197, 160, 222, 0.6)',
          borderColor: 'rgba(197, 160, 222, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: { y: { beginAtZero: true } },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  } else {
    console.error('⚠️ Chart.js not loaded or canvas missing');
  }
});