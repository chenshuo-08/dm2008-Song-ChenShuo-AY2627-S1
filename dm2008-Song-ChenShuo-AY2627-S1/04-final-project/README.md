# Final Project — Lantern Keeper

<!-- Replace "Title" with the name of your project -->

---

### The Project
Lantern Keeper is a 3D night-time survival game built in p5.js (WEBGL). You play a small bee carrying a glowing light through a dark world of grass and pine forest under a moonlit sky. Your glow is both your vision and your health: it slowly fades, so you fly between floating lanterns and collect them to make it brighter, while ghosts drift out of the dark and they catch you. The longer you survive. You control the bee with the keyboard, and the world responds through light, sound and growing pressure.
<!-- What is your project and what does it do?
     What experience does it create, and who or what does it respond to?
     A short paragraph is ideal — make it something you'd be happy for anyone to read. -->

---

### Output

![screenshot](readme-assets/screenshot-01.png)


<!-- Drop a screenshot or GIF of your project.
     Got more to show? Add more images — let the work speak for itself.
     Save everything to a readme-assets/ folder inside this project folder. -->

[Watch Online](https://your-link-here)

<!-- Replace the link above with a URL to a screen recording or video of your final project.
     ⚠️ Make sure the file or page is set to public before submitting. -->

---

### ✍️ Reflection

We set out to make a small, atmospheric game where light is the whole mechanic: you only see what your glow touches, and the same glow also draws the ghosts toward you. We moved from our first 2D idea to 3D (p5.js WEBGL) so the light could actually light the world.

We split the work Gogul built the player: free 3D movement, the follow camera and the brightness system that fades over time, plus UI and game states. I built the world and what lives in it: ground, pine forests, night sky, the bee, lantern pickups, ghosts and sound. The code is organised into classes (Lantern, Ghost, Tree) and the game responds to the keyboard.

Visually, we chose a near-black scene lit by warm point lights from the bee and nearby lanterns, a cold night sky, and ghosts that fade from view outside the glow. Sound is only an ambient track, a pickup chime and a hit sound, so the darkness stays the focus.

Our biggest challenges were technical. Hundreds of 3D models made the game lag, so we only draw what is near the bee. Browsers block audio until a key press, and repeated hit sounds crashed the sketch until we added a cooldown and error handling. We were new to 3D in p5.js and used AI as a guide for debugging, then tested and tuned everything ourselves.

With more time we would add tree collisions, flapping wings and more sound effects.

<!-- 200–300 words on your process and outcome. Write freely — this is your story to tell.
     Some prompts to get you started:
     — What did you set out to create, and how did the final result compare to your original vision?
     — How is your project structured — what inputs does it respond to and how did you approach the code?
     — What were your key visual and/or sonic design decisions, and why?
     — What was your biggest challenge, and how did you work through it?
     — What would you change, add, or explore further given more time? -->

---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — want to document more? Try any of these:

     ### ✨ Features
     A short list of what your project does.
     - Responds to mouse position and velocity
     - Generates sound based on particle density

     ### 🔍 Code Structure
     How are your files organised?
     - `sketch.js` — main setup and draw loop
     - `Agent.js` — autonomous agent class
     - `assets/` — images and sounds

     ### 🛠️ Hardware (if applicable)
     List any physical components used.
     - Arduino Uno
     - Sensor type and model

     ### 🧩 Something I'm Proud Of
     A snippet, a decision, a moment where it all came together.
     ```js
     // your code here
     ```

     ### 🔗 References
     Tutorials, libraries, artworks, or research that informed your project.
     ───────────────────────────────────────────────────── -->
