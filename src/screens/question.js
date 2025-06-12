const questionsData = {
  JavaScript: {
    normal: [
      {
        question: "What is JavaScript?",
        answer: "JavaScript is a scripting language used to create and control dynamic website content."
      },
      {
        question: "What is closure?",
        answer: "A closure is a function that retains access to its lexical scope even when executed outside that scope."
      },
      {
        question: "What is DOM?",
        answer: "DOM stands for Document Object Model, a programming interface for HTML and XML documents."
      }
    ],
    riddles: [
      {
        question: "I can store values, but I'm not a box. I’m used in loops and logic. What am I?",
        answer: "A variable."
      },
      {
        question: "I live in the browser but run code. I’m essential for the web. What am I?",
        answer: "JavaScript."
      }
    ]
  },

  HTML: {
    normal: [
      {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language."
      },
      {
        question: "What tag is used to insert an image?",
        answer: "The <img> tag."
      }
    ],
    riddles: [
      {
        question: "I create the structure but not the style. Who am I?",
        answer: "HTML."
      }
    ]
  },

  CSS: {
    normal: [
      {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets."
      },
      {
        question: "What is the use of z-index?",
        answer: "z-index controls the vertical stacking order of elements."
      }
    ],
    riddles: [
      {
        question: "I add color but no content. I am everywhere but seen nowhere. Who am I?",
        answer: "CSS."
      }
    ]
  }
};

export default questionsData;
