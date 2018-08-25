import Quiz from '../../components/Quiz'
import React from 'react'

const questions = [
  `My footwork (use of feet) deteriorates during the hardest part of a climb`,
  `My forearms balloon and my grip begins to fail even on routes that are easy for me`,
  `On hard sequences, I have difficulty stepping onto critical footholds`,
  `I get anxious and tight as I head into crux sequences`,
  `My biceps (upper arms) pump out before my forearms`,
  `I have difficulty hangin on small neccessary-to-use holds`,
  `I blow sequences I have wired and know by heart`,
  `I stall at the start of crux sequences. I end up having to hang on the rope and rest before I can give it a good, solid try`,
  `I climb 3 or 4 days in a row`,
  `I get sewing-machine leg ("Elvis leg")`,
  `I pump out on overhanging climbs no matter how big the holds`,
  `I get out of breath when I climb`,
  `I make excuses for why I might fail on a route before I even begin to climb`,
  `I miss hidden holds on routes`,
  `I have difficulty hanging on to small sloping holds or pockets`,
  `I grab quick draws, the rope, or other gear instead of risking a fall trying a hard move of which I am unsure`,
  `On a typical climb, I feel like much of my body weight is hanging on my arms`,
  `I get ver sore the day after climbing at the crags`,
  `I have difficulty visualizing myself successfully climbing the route before I leave the ground`,
  `I cannot reach key holds on difficult routes`,
  `On overhanging routes and roofs, I have difficulty keeping my feet from cutting loose and swinging out`,
  `While climbing, I get distracted by activity on the ground and/or I think about whether the belater is paying attention`,
  `I have difficulty reading sequences`,
  `I get a flash pump on the first climb of the day`,
  `I have more difficulty climbing when people are watching`,
  `My feet unexpectedly pop off footholds`,
  `I experience elbow pain when I climb on a regular basis`,
  `When lead climbing a safe route, I have difficulty pushing myself to the complete limit`,
  `I have difficulty finding midroute rest positions and shakeouts`,
  `My first attempt on a hard route is usually better than my second or third attempts of the day`,
]

const QuizContainer = () => <Quiz questions={questions} />

export default QuizContainer
