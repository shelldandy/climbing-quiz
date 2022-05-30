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

const mentalSkills = {
  label: "Mental Skills",
  questions: [
    {
      question: "I visualize myself successfully climbing the route before I leave the ground.",
      options: [
        "seldom or never",
        "occasionally",
        "about half the time",
        "often",
        "almost always",
      ]
    },
    {
      question: "I get anxious, tight, and hesistant as I climb into crux sequences.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "I miss hidden holds or blow a known sequence.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "I make excuses for why I might fail on a route before I even begin to climb.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "When lead climbing a safe route, I push myself to the complete limit, and if I fall, I fall trying.",
      options: [
        "seldom or never",
        "occasionally",
        "about half the time",
        "often",
        "almost always",
      ]
    },
  ],
  analysis: [
    {
      level: 5,
      label: "Your weak mental skills will improve rapidly given a regular schedule of climbing and a willingness to stretch your boundaries and challenge your fears."
    },
    {
      level: 10,
      label: "Your limited mental skills are an Achilles heel that's sabotaging your climbing performance. Desire and discipline to improve in this area will yield huge breakthroughs in climbing ability."
    },
    {
      level: 15,
      label: "Your mental skills are near average; however, significant gains are attainable given a commitment to mental training."
    },
    {
      level: 20,
      label: "Your mental skills are above average."
    },
    {
      level: 23,
      label: "You possess excellent mental skills!"
    },
  ]
}

const generalFitness = {
  label: "General Fitness",
  questions: [
    {
      question: "How many pounds (body fat or excessively bulky muscles) do you estimate you are from your ideal climbing weight?",
      options: [
        "more than 20",
        "10-20",
        "5-10",
        "just a few",
        "zero",
      ]
    },
    {
      question: "How far could you jog (modest-paced steady running) without stopping?",
      options: [
        "less than 0.5 mile",
        "0.5 mile to 1 mile",
        "1 to 2 miles",
        "3 to 5 miles",
        "more than 5 miles",
      ]
    },
    {
      question: "How many pull-ups can you do in a single set?",
      options: [
        "women: 0-1, men: 0-4",
        "women: 2-4, men: 5-9",
        "women: 5-9, men: 10-19",
        "women: 10-20, men: 20-30",
        "women: 21+, men: 31+",
      ]
    },
    {
      question: "How many push-ups can you do in a single set?",
      options: [
        "women: 0-2, men: 0-4",
        "women: 3-6, men: 5-15",
        "women: 7-15, men: 16-25",
        "women: 16-25, men: 26-40",
        "women: 25+, men: 41+",
      ]
    },
    {
      question: "How many abdominal crunches can you do in a single set?",
      options: [
        "Fewer than 10",
        "10-20",
        "21-49",
        "50-75",
        "76+",
      ]
    },
  ],
  analysis: [
    {
      level: 5,
      label: "You possess poor general fitness. It's paramount that you improve in this area before engaging in a regular schedule of climbing. See chapter 4"
    },
    {
      level: 10,
      label: "Your general fitness is below average and is undoubtedly limiting your climbing ability. See chapter 4"
    },
    {
      level: 15,
      label: "Your general fitness is near average. Improvement in this area will facilitate better movement and improved stamina and reduce injury risk"
    },
    {
      level: 20,
      label: "Your general fitness is above average."
    },
    {
      level: 23,
      label: "You possess excellent general fitness!"
    },
  ]
}

const climbingFitness = {
  label: "Climbing-Specific Fitness",
  questions: [
    {
      question: "On overhanging routes with large holds, I pump out quickly and need to hang on the rope.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "I have difficulty hanging on small, neccesary-to-use holds.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "I find it difficult to hold a lock-off with one arm when I let go to advance the other hand.",
      options: [
        "almost always",
        "often",
        "about half the time",
        "occasionally",
        "seldom or never",
      ]
    },
    {
      question: "Given a marginal mid-climb rest, I can shake out and recover enough to complete the route.",
      options: [
        "seldom or never",
        "occasionally",
        "about half the time",
        "often",
        "almost always",
      ]
    },
    {
      question: "My maximum bouldering ability is:",
      options: [
        "V0-V1",
        "V2-V3",
        "V4-V6",
        "V7-V9",
        "V10+",
      ]
    },
  ],
  analysis: [
    {
      level: 5,
      label: "You possess a poor level of conditioning. Engage in a general training program for at least a year before initiating a climbing-specific training program."
    },
    {
      level: 10,
      label: "Your climbing-specific fitness is a major constraint in climbing performance. If you are an intermediate or advanced climber, vow to increase you commitment to this type of training. If you are a novice, however, continue general training for another year or so before beginning climbing-specific training."
    },
    {
      level: 15,
      label: "Your climbing-specific fitness is near average; however, a program of targeted training will quickly elevate you to the next level."
    },
    {
      level: 20,
      label: "Your climbing-specific fitness is above average."
    },
    {
      level: 23,
      label: "You possess excellent climbing-specific fitness!"
    },
  ]
}

const quizData = [
  climbingExperience,
  technicalSkills,
  mentalSkills,
  generalFitness,
  climbingFitness,
]

export default quizData
