const block = document.getElementById("card-block")
console.log("I Work")
let contents = [
    {
        "id": 1,
        "cat": "Education",
        "title": "International Baccalaureate",
        "subheader": "Monterrey Institute of Technology",
        "description": "Ex-IB alumni from 2017 to 2020. The impact this international curriculum had on me is huge, it certainly is a big part of what I am today.",
        "img": "img/ib.png",
        "label": "edu" 
    },
    {
        "id": 2,
        "cat": "Education",
        "title": "Bachelor in Robotics & Systems",
        "subheader": "Monterrey Institute of Technology",
        "description": "Currently studying robotics and systems, a dream I had since I was 8. Love to learn and test. Expected graduation on 2024.",
        "img": "img/tec.png",
        "label": "edu"
    },
    {
        "id": 3,
        "cat": "Experience",
        "title": "Starting Point",
        "subheader": "Co-founder, CPO & Web Dev",
        "description": "A social entrepreneurship that aims to help the youth on their dreams and paths. In charge of planning actions and projects, as well as maintaining the website.",
        "img": "img/sp.png",
        "label": "exp"
    },
    {
        "id": 4,
        "cat": "Experience",
        "title": "Saving Tuvalu",
        "subheader": "Innovation Director & Web Dev",
        "description": "Global campaign aimed to address the consequences of the climate crisis on Tuvalu. My role has been to plan innovative projects, and maintain the tech.",
        "img": "img/st.png",
        "label": "exp"
    }
]

contents.forEach(loadHTML)

function loadHTML(content){
    block.innerHTML +=  `
    <div class="col-lg-4 col-sm-12 col-md-6 card-col" style="background-image: url('${content.img}')">
    <div class="my-card align-items-start">
        <h3 class="category-box text-center">${content.cat}</h3>
        <h1>${content.title}</h1>
        <h2>${content.subheader}</h1>
        <p>${content.description}</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
    </div>
    </div>
    `;
    console.log(content);
}
