const climbingExperience = {
  label: "Climbing Experience",
  questions: [
    {
      question: "How long have you been climbing?",
      options: [
        "less than six months",
        "six to twelve months",
        "one to four years",
        "five to ten years",
        "more than ten years",
      ]
    },
    {
      question: "On average how may days per month do you climb (both indoors and outdoors)",
      options: [
        "one day or less",
        "two or three days",
        "four to eight days",
        "nine to twelve days",
        "more than twelve days",
      ]
    },
    {
      question: "How many different climbing areas and gyms have you visited in the last year?",
      options: [
        "1",
        "2-4",
        "5-9",
        "10-15",
        "16+",
      ]
    },
    {
      question: "How many of the following styles of climbing have you been active in over the last year: bouldering, roped gym climbing, outdoor sport climbing, follow trad climbs, leading trad climbs, big wall",
      options: [
        "1",
        "2",
        "3",
        "4",
        "5 or 6",
      ]
    },
    {
      question: "How many of the following types of climbing have you engaged in onver the last three months: slab climbing, face climbing, crack climbing, overhanging face climbing, pocket climbing, roofs?",
      options: [
        "1 or 2",
        "3",
        "4",
        "5",
        "6",
      ]
    },
  ],
  analysis: [
    {
      level: 5,
      label: "As a novice climber you possess tremendous potential to improve. A regular schedule of climbing and a willingness to stretch your boundaries will yield rapid gains in ability."
    },
    {
      level: 10,
      label: "Your experience is limited or narrow in scope, but huge gains await you given a commitment to climb more often and explore new types of climbing."
    },
    {
      level: 15,
      label: "Your experience is average."
    },
    {
      level: 20,
      label: "Your experience is above average."
    },
    {
      level: 23,
      label: "You are well on your way to mastery!"
    },
  ]
}

const technicalSkills = {
  label: "Technical Skills",
  questions: [
    {
      question: "My footwork and overall technique deteriorate during the hardest part of a climb.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "Cracks, slabs and roofs fell hard for the grade compared with a similarly graded face climb.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "I have difficulty finding mid-route rest positions and shakeouts.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "On the typical climb, I feel like my body weight is hanging on my arms.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "On overhanging routes and roofs, I have difficulty finding the optimal body position or keeping my feet from cutting loose",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
  ],
  analysis: [
    {
      level: 5,
      label: "You are at the beginning of the learning curve. With a consistent schedule of climbing, you will see rapid gains in ability."
    },
    {
      level: 10,
      label: "You possess some fundamental flaws in climbing technique. Make improving your technique a top priority. Consider employing a coach to provide technical instruction and tips for improvement."
    },
    {
      level: 15,
      label: "Your technical skills are near average; however, the next level is attainable given a focused effort to improve in weak areas."
    },
    {
      level: 20,
      label: "Your technical skills are above average."
    },
    {
      level: 23,
      label: "You possess excellent technical skills!"
    },
  ]
}

const quizData = [
  climbingExperience,
  technicalSkills
]

export default quizData
