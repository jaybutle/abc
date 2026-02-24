import { ClassNames } from "@emotion/react"

const header = {
  homepage: 'https://www.linkedin.com/in/jaybutle/',
  title: 'JB',
}

const about = {
  firstName: 'Jay ',
  lastName:'Butle',
  role: 'Developer',
  description: 'Hi,I am jay Butle I am currently doing web developement.I look fordward for an internship and i want to learn dsa in future',
  resume: '',
}

const projects = [

  {
    name: 'Project One',
    description: 'Website',
    stack: ['I done this website at my college.'],
    sourceCode: 'https://leetcode.com/u/jaybutle2302/',
    backgroundImage : "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_640.jpg"
  },

  {
    name: 'Project Two',
    description: 'My Porfolio',
    stack: ['CSS', 'HTML', 'Tailwind'],
    sourceCode: 'https://www.hackerrank.com/profile/jaymangeshbutley',
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nJgFB1dGDte6X9l9xsWj2wpwgZ_6CINKDQ&s"
  },

  {
    name: 'Project Three',
    description: 'Resume',
    stack: ['CSS', 'HTML', 'Tailwind'],
    sourceCode: '',
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmS3Z0re4ypLfG32bTr7ahXbR03d_ngES24272cgKepDbH8X9ZOvY-ixX-eKokRrgS5GQ&usqp=CAU"
  },

  {
    name: 'Project four',
    description: 'My fourth project',
    stack: ['CSS', 'HTML', 'Tailwind'],
    sourceCode: '',
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjtCojLTbzrlFMnxmdmx2Rm6Jz9DbVFfROA&s"
  },

  {
    name: 'Project five',
    description: 'My fifth project',
    stack: ['CSS', 'HTML', 'Tailwind'],
    sourceCode: '',
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIldXkyUoy2vMRIfNNLQiBd37mm1Djw_wpoA&s"
  },

  {
    name: 'Project six',
    description: 'My sixth project',
    stack: ['CSS', 'HTML', 'Tailwind'],
    sourceCode: '',
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUo3by-M4fz25c2bx-Hz1-91gjdaRoMLr1jw&s"
  },


  
  
]


const skills = [
  {
    "name": "GitHub",
    "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
  },
  {
    "name": "CSS3",
    "icon": "https://img.icons8.com/color/48/000000/css3.png"
  },
  {
    "name": "JavaScript",
    "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
  },
  {
    "name": "HTML5",
    "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
  },
  
  {
    "name": "ReactJS",
    "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
  }, 
  {
    "name": "Tailwind CSS",
    "icon": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  },
  {
    "name": "C",
    "icon": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
  },
  {
    "name": "C++",
    "icon": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
  },
  {
    "name": "JAVA",
    "icon": "data:image/png;base64,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"
  },
  {
    "name": "PYTHON",
    "icon": "data:image/png;base64,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"
  },
  
  
]

const contact = {
  email: 'jaymangeshbutleyl@gmail.com',
}

export { header, about, projects, skills, contact }
