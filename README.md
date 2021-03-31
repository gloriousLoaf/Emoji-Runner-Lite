# 😄 Emoji Runner Lite

A simplified, locally run version of **Emoji Runner**.

## Skip to the fun?

Play [Emoji Runner Lite](https://gloriousloaf.github.io/Emoji-Runner-Lite/)

## What is this?

Emoji Runner is a group project from the full stack development boot camp I
completed last year. The original project uses Handlebars on the frontend and
MySQL on the back. As a group project in the middle of a crazy fast-paced boot
camp, there are features that were never completed. Still, it is quite fun!

You can view the repo for the full version
[here](https://github.com/gloriousLoaf/Emoji-Runner),  
and you can play the original game deployed on
[Heroku](http://emoji-runner.herokuapp.com/).

## Why did I make a Lite version?

The intent here was not to complete any of the unfinished stretch goals of the
original. On the contrary, I wanted to strip away all the login and extra stuff
to make it just about the game. A fairly common complaint I got about Emoji
Runner was that logging in should not be required to play. So that is gone, and
score tracking is just handled via `localStorage` so it will obviously go away
if you clear your storage.

**It is still a desktop-only game.** For now, at least.

This version is still in **beta** but the core game is fully functional. The
HTML & CSS are based on the Handlebars and styles of Emoji Runner. The JS
remains largely the same, and the game engine is still [P5.js](https://p5js.org).
I even left most of the beginner-coder (// this is a function) style of comments
in place, because why not?! That was all part of the journey. I do think I'll
clean it up further from here in due time, but for now enjoy!

## Fun Facts

While I don't use much Bootstrap outside of React projects or quick demos, I
left it in place here. Same for the touch of jQuery. And as for 'Liteness', the
original files are 30MB prebuild (excluding node_modules), and the Heroku Slug
size is ~35MB. This version is about 10.5MB, requires no server and is deployed
on GitHub Pages.

## Credit where due!

This Lite version would not be possible without the contributions of my original
team mates:

- [Kimya Fallah](https://github.com/kimyaf)
- [Maurice Chouamou](https://github.com/mauricechouam)
- [Chase Johnson](https://github.com/chaseyb)

## Questions?

- **David Metcalf**
- **GitHub:** [gloriousLoaf](https://github.com/gloriousLoaf)
- <hello@metcalf.dev>

<img src="https://github.com/gloriousLoaf.png" alt="GitHub Profile Pic" width="125" height="125">
