# Karate Term quiz 

A simple, multiple-choice quiz focused on improving the user's knowledge of Japanese terms used within martial arts - and specifically wihtin Karate - and their English translation/ equivalent. 

Created by Gavin, Prabin & Maja. 


## Table of Contents
* [Introduction/ Purpose](#Introduction/Purpose)
* [Agile Practice/ Development](#AgilePractice/Development)
* [Design](#Design)
* [Features](#Features)
* [Deployment](#Deployment)
* [Validation](#Validation)
* [Issues & Bugs](#Issues&Bugs)
* [Future Improvements](#FutureImprovements)
* [Acknowledgements](#Acknowledgements)

## Introduction/ Project Proposal 

For this hackathon project, the aim was to develop an interactive, web-based multiple-choice quiz application focused on Karate terminology. 
With its current features and any future developments, we hope this quiz will become a valuable educational tool for the karate community while showcasing modern web development techniques.

The educational/ language learning app was built using HTML, CSS, and JavaScript, ensuring wide accessibility & responsiveness across various devices and platforms.

The quiz itself includes two game modes: Training & Grading. While both modes are designed to be accessible for adults and younger learners, the modes themselves were designed for children (training) and adults (grading) respectively. 

#### Training

The training mode allows users to continue the game even when they chose the incorrect answer. They recieve feedback ("Correct!" or "Incorrect!"), however they are not immedietly terminated from that game round, allowing them to continue practicing until the quiestions finish or to serve as a 'refresher' round. 

This was created with younger learners in mind, as repeated game termination with every incorrect answer may serve as a source of frustration, annoyance and a deterrant to learning. Therefore, allowing a 'lower stakes' game mode ensures this is accessible for them to complete and learn from appropriately. 

#### Grading

The grading mode was designed with adults in mind, with the quiz terminating once an incorrect asnwer is given. 

Unlike the training mode which offers feedback but allows the user to complete the quiz regardless of an incorect answer being given, the grading mode was desinged to encourage focus, attention and memorization through 'higher stakes' gaming (immediete termination and a 'loss of progress' in that particular game round). 

The player is given a visual belt award in desktop mode.


## Objectives
* Create an engaging learning tool for karate students and enthusiasts
* Provide a user-friendly interface for testing knowledge of karate terms
* Implement an icon-based scoring system for a more visually appealing experience
* Ensure responsiveness across different screen sizes


## Technologies

This project was created using the following technologies:

* Javascript for functionality and interactivity
* HTML5 for structure
* CSS3 for styling and responsiveness (Flexbox)

This ensured the project was in line with the project requirements as set out by Code Institute but also ensured that our project was responsive, functional and accessible to our target audience. 

### AI

To further supplement our website design, we included the following AI technology and websites to aid in the creation of our user stories, initial design ideas and to debug any issues within our code (more on this in the 'Agile Practice' section). 

* [Perplexity.ai](#https://www.perplexity.ai) 
* [Chat GPT](#https://chatgpt.com/)
* [Google Gemini](#https://gemini.google.com)
* Co-pilot (Github)


### Websites

* [Favicon](#https://favicon.io/)
* [Font Awesome](#https://fontawesome.com/)
* [FreePik](#https://www.freepik.com/premium-vector/karate-logo-with-red-sunset_24779702.htm)


## Agile Practice

#### User Stories

The user stories for this project were generated by Perplexity.ai using the prompt:
"I'm creating a multiple choice quiz on Japanese vocab in Karate using html, css and javascript. Could you create user stories for this quiz". 

This prompt generated the necessary user stories applicable to our project design, and it was further clarified to include the must-have, should-have and could-have labels. 

* As a user, I want to start the quiz when I'm ready so that I can prepare myself before beginning.
* As a user, I want to be able to choose difficulty levels so that I can challenge myself as I improve.
* As a user, I want to be able to pause and resume the quiz so that I can take breaks if needed.
* As a user, I want a progress bar to show how far I am in the quiz so that I know how much is left.
* As a user, I want to see clear instructions on how to take the quiz so that I understand the process.
* As a user, I want to see one question at a time so that I can focus on each question individually.
* As a user, I want the option to retake the quiz so that I can improve my score and knowledge.
* As a user, I want immediate feedback on whether my answer is correct or incorrect so that I can learn from my mistakes.
* As a user, I want to select my answer from multiple choice options so that I can easily input my response.
* As a user, I want to be able to access and practice the quiz at any point and on any device (laptop or mobile).

#### Web design 

For the design of the project, we initially created a functioning Javascript code and based the HTML and CSS around that code. We then based our design and layout using our inital wireframes and selected color scheme.  Inspiration for certain design improvements or adjustments was taken from ChatGPT, using the prompt "How can I make this multiple choice quiz better in terms of front-end development i.e. how it looks appearance-wise using html, css, javascript and flexbox?" (with a screenshot of the current page). 
Ultimately the suggestions were not included in the final project due to conflicts with the javascript, which resulted in issues with the running of the code. 

### Wireframes

#### Prospective Wireframes 

Prior to starting the project, we designed prospective wireframes using [Balsamiq](#https://balsamiq.com/wireframes/) to have an idea of the quiz's design, layout and feature placement. As the quiz was desinged to be accessible on a mobile device first rather than on a laptop/desktop, the initial design included a dropdown icon with the start, restart and instruction buttons, alongside a progress bar at the top of the page. 

[screenshot!]. 

On a desktop/laptop, the design was similar. However, for future project implementations, a starting page was included in the laptop/ desktop design, which would've meant that the users were not immedietly taken to the game page but could take the time to read the instructions, prepare themselves etc. 

[screenshots!]

#### Final Wireframes 

Throughout the project, the wireframe deviated from the inital wireframe design. 

[screenshots!]

## Design

### Color Reference

The color scheme for this project was a combination of red, white and black. While it may appear to be quite a strong and bold colour combination, after extensive research, this color scheme appeared most commonly amongst martial art communities (i..e Koryu Uchinadi, Taekwondo etc.).

Therefore, in order to remain in line with the design choices of most martial arts schools, we opted for the bolder color scheme and simplified layout. 

Furthermore, it was decided that the background would be changed from white to black/licorice to redcue any eye strain. Some users would most likely be repeating the quiz multiple times, and to make our quiz more efficient, it was agreed that the screen layout shouldn't be causing any fatigue or strain on the user after only being used for a short amount of time (as was the likelihood with the white backgound).

[snapshot here!!] 


The Martial Artist color palette we used was generated using the [Coolors image picker](#https://coolors.co/image-picker) derived from our logo and favicon. 

[insert snapshot!] 

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Cornell-red |#B50613ff|
| Gray| #7A7A7Aff |
| White | #FBFEFEff |
| White 2 |  #FDFEFFff|
| Licorice |  #0E0304ff|
| Licorice |  #0E0304ff|
| Licorice |  #0E0304ff|

| CSS             | HSL                                                               |
| ----------------- | ------------------------------------------------------------------ |
| Cornell-red |hsla(356, 94%, 37%, 1);|
| Gray| hsla(0, 0%, 48%, 1);|
| White | hsla(180, 60%, 99%, 1); |
| White 2 | hsla(210, 100%, 100%, 1);|
| Licorice | hsla(355, 65%, 3%, 1);|


### Icons & Images

The logo and favicon for this project were found on [FreePik](#https://www.freepik.com/premium-vector/karate-logo-with-red-sunset_24779702.htm)
and converted into the appropriate file using Favicon conversion. 

{enter image here! }

One issue we encountered at this stage was finding an appropriate icon which was free - we initially found an icon which suited the project design however it was only available via subscription and it could not be converted from a png to a css image online, which limited us to finding a free option instead. 

[Font Awesome](#FontAwesome.com) was initially meant to be used for adding icongraphy to our scoring system rather than using the common number system. While the icon did appear to work with the code generated by Perplexity.ai, the issues we later encountered meant that this idea was not used (more in the Issues section). 


## Features

The key features of the quiz included:
* Multiple-choice questions on karate terminology
* Randomized question order for each quiz attempt
* Immediate feedback on correct/incorrect answers ("Correct!" or "Incorrect!" comments)
* Final score display ("Your score is ..")
* Option to restart the quiz
* Difficulty levels 

We additionally wished to include an icon-based scoring system (e.g., karate belts or fists), immediete feedback through highlighted answer options and a progress bar however this was not accomplished due to bugs and time contraints - therefore these are included within the Future Improvements section. 

[add screenshots] 

## Validation

Testing and validation of this quiz was carried out throughout the course of the project.

This included regular debugging and testing using the Dev Tools provided within Chrome Browser, utilizing Copilot & Perplexity alongside using validation testing to address any code lines which needed fixing.

### Validator Testing

#### HTML
No errors were returned when passing our code through the official [W3C validator](#https://validator.w3.org/).

![quiz html pass!](https://github.com/user-attachments/assets/d560359a-b541-479d-b996-ca208ff9f82f)


#### CSS

When passing through the official [Jigsaw validator](#https://jigsaw.w3.org/), our code returned no bugs or errors. 

![css validated](https://github.com/user-attachments/assets/80c2d643-e141-4d98-9800-7b6767327ec9)


#### Javascript 

The validation for javascript for our quiz returned no issues. 

![jsHintPass](https://github.com/user-attachments/assets/6bc3e457-2c86-43bb-a249-4f343edc72ab)


### Lighthouse testing
Official lighthouse testing of our quiz revealed a ..... 

![Lighthouse score](https://github.com/user-attachments/assets/047b4c43-5630-4115-93dd-64e41c8593ff)


## Issues

Some of the issues we faced were integrating front end layout with the original javascript. 

The original javascript included two forms of the game (for children & adults), however once the initial front-end additions were added, the javascript no longer worked. 
* This issue stemmed from the inclusion of Bootstrap grids, when the initial code was designed with Flexbox in mind. 

To improve this, we reverted to the initial javascript code, and reverse-engineered our front-end design without altering the Javascript too much. 


## Deployment

This GitHub project was created within the designated workspace on the Gitpod Desktop IDE (Code Institute).

The site was deployed to GitHub pages.
The steps to deploy are as follows:

* In the GitHub repository, navigate to the Settings tab

* From the source section drop-down menu, select the Master Branch ['Main']

* Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live website for this project can be found at: https://gavjam80.github.io/Hackathon1/ 

Additional information on the deployment process can be found on the official GitHub Docs. 

## Future Improvements

Due to the groups relative inexperience with using Javascript and the time constraints, the developed project does not include all the features we would've wished to include. 

Therefore in future developments of this quiz, we would like to further develop and implement:
* The icon-based scoring system 
* A progress bar to keep users informed of thier progress
* A modal-pop up with instructions
* Immediete feedback througy highlighted answer boxes (correct highlighted in green, incorrect answers highlighted in red).
* 
## Acknowledgements

Code and Content Project and primary learning supplied by Code Institute, with support throughout the project from:
* Lancs Group Facilitator Dillon
* SME facilitator Mark 

Supplemental learning resources directly used / referenced within this project:
* [Perplexity.ai](#https://www.perplexity.ai) 
* [Chat GPT](#https://chatgpt.com/)
* [Google Gemini](#https://gemini.google.com)
* Co-pilot (Github)
* [Favicon](#https://favicon.io/)
* [Font Awesome](#https://fontawesome.com/)
* [FreePik](#https://www.freepik.com/premium-vector/karate-logo-with-red-sunset_24779702.htm)
* [Coolors](#https://coolors.co/image-picker)
* [AI images](https://designer.microsoft.com/) 
