document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    console.log('✅ DOM loaded. JS running.');

    const nameInput = document.getElementById('nameInput');
    const moodSelect = document.getElementById('moodSelect');
    const messageArea = document.getElementById('messageArea');
    const emotionSelect = document.getElementById('emotionSelect');
    const adviceArea = document.getElementById('adviceArea');
    const greeting = document.getElementById('greeting');
    const startBtn = document.getElementById('startBtn');
    const currentHour = new Date().getHours();
    const greetingTitle = document.querySelector('h1');

    if (currentHour < 12) {
      greetingTitle.innerText = 'Good morning!';
    } else if (currentHour < 17) {
      greetingTitle.innerText = 'Good Afternoon!';
    } else {
      greetingTitle.innerText = 'Good Evening!';
    }

    console.log('Inputs found:', nameInput, moodSelect, startBtn);

    const savedName = localStorage.getItem('username');
    if (savedName) {
      nameInput.value = savedName;
      greeting.innerText = `Welcome back, ${savedName}.`;
    }

    // -- ADVICE MAP FOR EMOTIONS --

    const adviceMap = {
      anxious:
        'Breathe in through nose, 4 second count. Hold for 4 seconds. Exhale through mouth for 8 seconds. Repeat for at least 10 breaths.',
      sad: 'It is okay to feel sadness, embrace this emotion. Write down what is making you feel this emotion, distraction such as music, funny tik toks.',
      angry:
        'Remove yourself from the environment where anger is taking place. Practice groudinng technique: 5 things you see, 4 things you can feel, 3 things you can hear, 2 things you can smell, and finally notice 1 thing you can taste.',
      happy:
        'This is awesome!Remember to write down this feeling  of happiness, and what and how you feel this way. On the days you feel sad, refer back to this mood and do what put you in this mood',
    };

    startBtn.addEventListener('click', () => {
      console.log('▶ Button clicked');

      const name = nameInput.value.trim();
      const mood = moodSelect.value;

      if (!name) {
        alert('Please enter your name.');
        return;
      }

      localStorage.setItem('username', name);
      greeting.innerText = `Good day, ${name}!`;

      let message = '';

      switch (mood) {
        case 'happy':
          message = 'Keep shining — your vibe is contagious!';
          break;
        case 'tired':
          message = 'Take a deep breath. You’ve got this.';
          break;
        case 'focused':
          message = 'Laser focus — stay locked in.';
          break;
        case 'meh':
          message = 'Even the meh days pass. Proud of you.';
          break;
        default:
          message = 'Pick a mood first.';
      }

      messageArea.innerText = message;

      // -- Emotion Advice --

      const emotion = emotionSelect.value; // get chosen emotion
      const advice = adviceMap[emotion] || ''; // lookup, or blank
      adviceArea.innerHTML = advice;
    });
  }, 1000); // <- gives the DOM time to stabilize
  // 3️⃣ Chart.js setup (after DOM elements exist)
const ctx = document
  .getElementById('productivityChart')
  .getContext('2d');

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
    scales: {
      y: { beginAtZero: true }
    },
    responsive: true,
    maintainAspectRatio: false
  }
});
});
