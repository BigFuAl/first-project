document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ JavaScript is running");
  
    const nameInput = document.getElementById("nameInput");
    const moodSelect = document.getElementById("moodSelect");
    const messageArea = document.getElementById("messageArea");
    const greeting = document.getElementById("greeting");
    const startBtn = document.getElementById("startBtn");
  
    // Console check if inputs were found
    console.log("nameInput:", nameInput);
    console.log("moodSelect:", moodSelect);
    console.log("startBtn:", startBtn);
  
    // Restore saved name from localStorage
    const savedName = localStorage.getItem("username");
    if (savedName) {
      nameInput.value = savedName;
      greeting.innerText = `Welcome back, ${savedName}.`;
    }
  
    startBtn.addEventListener("click", () => {
      console.log("▶ Button clicked");
  
      const name = nameInput.value.trim();
      const mood = moodSelect.value;
  
      console.log("name:", name);
      console.log("mood:", mood);
  
      if (!name) {
        alert("Please enter your name.");
        return;
      }
  
      localStorage.setItem("username", name);
      greeting.innerText = `Good day, ${name}!`;
  
      let message = "";
  
      switch (mood) {
        case "happy":
          message = "Keep shining — your vibe is contagious!";
          break;
        case "tired":
          message = "Take a deep breath. You’ve got this, one step at a time.";
          break;
        case "focused":
          message = "Dialed in — let nothing break your stride today.";
          break;
        case "meh":
          message = "Even the meh days pass. You still showed up for yourself!";
          break;
        default:
          message = "Pick a mood, superstar.";
      }
  
      messageArea.innerText = message;
    });
  });