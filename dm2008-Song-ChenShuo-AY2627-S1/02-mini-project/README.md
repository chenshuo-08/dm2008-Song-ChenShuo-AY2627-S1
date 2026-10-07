# Mini Project — Mibi Project - FlappyBird

<!-- Replace "Title" with the name of your project, e.g. "Mini Project — Pong Remix" -->

---

### The Project

<!-- What did you build and what makes it yours? A few sentences is enough.
     What did you change, add, or push beyond the scaffold? -->

---

### Output

![screenshot1](https://drive.google.com/file/d/1_QNdM7d_jz5IvEB3E_y0Wl4t4zacxIgq/view?usp=sharing)
![screenshot2](https://drive.google.com/file/d/14GtoZgkRdRSPThRIDAVxn6LQihbZ4ZzS/view?usp=sharing)
![screenshot3](https://drive.google.com/file/d/1JfH4wjVwLngW5IpPwp-LbVMRwgqN2I12/view?usp=sharing)

<!-- Drop a screenshot or GIF of your finished project.
     Save it to a readme-assets/ folder inside this project folder.
     Got more than one good screenshot? Add them. -->

[Watch Online](https://drive.google.com/file/d/1AlB9-rg4AhoAcOjwzwr-3dKCoFFlEM1t/view?usp=sharing)

<!-- Replace the link above with a URL to a screen recording or video of your project.
     ⚠️ Make sure the file or page is set to public before submitting. -->

---

### ✍️ Reflection

At first we had to choose between Pong and Flappy Bird. I actually thought Flappy Bird would be harder because of the gravity part, but after reading the prof's guided code, I realised a lot of the structure was already there, and some parts just needed me to uncomment them and it worked. I also felt Flappy Bird, I could draw my own bird, pipes, background and ground assets.

That said, I ran into a lot of problems along the way. At first, I had a background-image bug that made the bird leave a weird trail every time it jumped, which turned out to be because I forgot the background needed to fully redraw and cover the canvas. Another issue was mixing up which class a piece of code belonged to, which caused confusing syntax errors that took a while for me to trace, I had to read the code alot of time to understand it better. Another peoblem, was to understanding the order things get drawn in, my score text and ground image kept getting hidden behind the pipes because I didn't realise p5.js draws everything in the order you write it 

Getting through these mostly came down to, checking the console for errors, testing one small change at a time instead of changing everything at once, and reading the error messages properly.

If I had more time, I'd want to improve the collision detection between the bird and pipes to feel more precise, and make the bird image rotate up when flapping and down when falling, instead of staying static.

<!-- 200–300 words on your process. Write freely — this isn't an essay.
     Some prompts to get you started:
     — What did you set out to make, and how did the result compare?
     — What inputs does your sketch respond to, and how did you approach that?
     — What was your biggest challenge, and how did you work through it?
     — What would you push further if you had more time? -->

---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — want to document more? Try any of these:

     ### ✨ What I Changed
     A short list of the additions and modifications you made to the scaffold.
     - Changed the paddle to use mouse tracking instead of keyboard
     - Redesigned the visual language with a retro CRT aesthetic

     ### 🔍 Code Structure
     Briefly explain how your files are organised.
     - `sketch.js` — main game loop
     - `Ball.js` — ball class with collision logic
     - `assets/` — sprites and sounds

     ### 🧩 Something I'm Proud Of
     A snippet of code, a design decision, a moment where it clicked.
     ```js
     // your code here
     ```

     ### 🔗 References
     Anything that helped or inspired you — tutorials, artworks, tools.
     ───────────────────────────────────────────────────── -->
