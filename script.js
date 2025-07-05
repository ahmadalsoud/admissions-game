// script.js
function choose(path) {
  let dialogue = document.getElementById('dialogue');
  let sound = new Audio('audio/click.wav');
  sound.play();

  if (path === 'start') {
    dialogue.innerHTML = "Step 1: Submit your application online. Need help? Email admissions@yourcollege.edu!";
  } else if (path === 'submitted') {
    dialogue.innerHTML = "Awesome! Keep an eye on your email for updates. You can also track your status online.";
  } else if (path === 'accepted') {
    dialogue.innerHTML = "Congratulations! 🎉 Now it's time to review your financial aid and housing options.";
  } else if (path === 'orientation') {
    dialogue.innerHTML = "Get ready for Orientation! Check your email for the schedule and prep tips.";
  }
}
