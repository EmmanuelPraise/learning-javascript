1. Show & Hide Notification 
Message Goal:
When a button is clicked, display a notification message (like “Saved Successfully”) that fades away after 3 seconds.
Hints:
Use classList.add() and classList.remove() to toggle visibility.
Use setTimeout() to remove the class after 3 seconds.
If clicked again before it disappears, reset the timer using clearTimeout().

<!-- button = true

if button = true:
    onclick switch off
    button = false
else if button = false:
    onclick switch on
    button = on -->

2. Typing Indicator Simulation
Goal:
Simulate a typing indicator (like in chat apps).
When the user types in an input field, show “User is typing…” below.
If the user stops typing for 2 seconds, hide the message.
Hints:
Use input event + setTimeout() + clearTimeout().

3. Countdown Button
Goal:
When the user clicks a “Send Code” button, start a 10-second countdown (e.g., “Resend code in 9s…”).
After the countdown ends, reset the button text to “Send Code.”
Hints:
Use setInterval() and clearInterval()

4. Like Button Animation
Goal:
When clicking the ❤ button, toggle between “liked” and “unliked” states.
Add a CSS animation (like a quick pop or scale effect).
Use classList.toggle() and simple CSS transitions.

5. Auto-Dismiss Alert Box
Goal:
Create an alert box (like “Form Submitted!”) that:
Appears when a form is submitted.
Fades out automatically after 4 seconds.
Cancels fade-out if hovered over (pause timer).
Hints:
Use mouseenter / mouseleave to pause and resume the timeout.