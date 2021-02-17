const block = document.getElementById("card-block")
console.log("I Work")

const contents = [
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
        "label": "exp",
        "link": "https://startingpoint.com.mx"
    },
    {
        "id": 4,
        "cat": "Experience",
        "title": "Saving Tuvalu",
        "subheader": "Innovation Director & Web Dev",
        "description": "Global campaign aimed to address the consequences of the climate crisis on Tuvalu. My role has been to plan innovative projects, and maintain the tech.",
        "img": "img/st.png",
        "label": "exp",
        "link": "https://savingtuvalu.org"
    }, 
    {
        "id": 5,
        "cat": "Project",
        "title": "DH's Pokedex",
        "subheader": "Simple web development with JS, Flask, and PokeAPI",
        "description": "An implementation of what I like the most (Pokemon) with the help of PokeAPI. A pokedex that fetches data from the API, implemented simple backend with Flask.",
        "img": "img/dp.png",
        "label": "pro",
        "link":"https://dhdex.herokuapp.com"
    }, 
    {
        "id": 6,
        "cat": "Project",
        "title": "Stolen Voices",
        "subheader": "Fight against gender violence",
        "description": "A decision-making story game that aims to raise awareness that the victim's decision should never be used to justify the aggressor's actions. Made with Twine.",
        "img": "img/sv.png",
        "label": "pro",
        "link": "https://dhnam.me/Stolen-Voices"
    }, 
    {
        "id": 7,
        "cat": "About",
        "title": "Pokemon",
        "subheader": "More about me",
        "description": "Huge fan of Pokemon, played the game since Emerald. Favorite game: Platinum. Favorite Pokemon: Greninja. Favorite type: ghost. Best gen: 5th.",
        "img": "img/poke.png",
        "label": "abt",
    }, 
    {
        "id": 8,
        "cat": "About",
        "title": "Football",
        "subheader": "The one and only football",
        "description": "Full 90 minutes of exitement or boredom that are not worth, but one of my favorite sports. Favorite team: RB Leipzig. Best league: EPL. Player I suppot: fellow Korean Son Heung Min.",
        "img": "img/fut.png",
        "label": "abt",
    }, 
    {
        "id": 9,
        "cat": "About",
        "title": "Basketball (NBA)",
        "subheader": "My favorite to watch",
        "description": "Its dynamic and fast factor are very attractive, but too many ads. Favorite team: Toronto Raptors. Favorite player: Stephen Curry. My position: guard",
        "img": "img/basket.png",
        "label": "abt",
    }, 
    {
        "id": 10,
        "cat": "About",
        "title": "Scuba Diving",
        "subheader": "PADI Open Water Diver",
        "description": "One of the undisputable top hobbies, I love the freedom and relative emptyness it causes. Been an avid lover of the ocean and fish, so its impossible for me to not like diving.",
        "img": "img/dive.png",
        "label": "abt",
    }, 
    {
        "id": 11,
        "cat": "Experience",
        "title": "Teaching STEM",
        "subheader": "Tutoring since 2017",
        "description": "The 'job' I enjoy the most, teaching and interacting with other people. Always available to help and guide on things I know, and to learn the things I don't.",
        "img": "img/teach.png",
        "label": "exp",
    }, 
    {
        "id": 13,
        "cat": "Skills",
        "title": "Python",
        "subheader": "Numpy, Pandas, TF, Flask, Pygame...",
        "description": "IMO one of the most versatile languages, I literally use it for almost every task. From scientific computing to web development, learning Python is one of the most enjoyable things.",
        "img": "img/py.png",
        "label": "skl",
    }, 
    {
        "id": 13,
        "cat": "Skills",
        "title": "Web design",
        "subheader": "HTML, CSS, JS, Bootstrap, Wordpress",
        "description": "It is what got me interested in coding, and what I like the most are the inmediate visible results. A wide range of possiblities have opened up thanks to web designing.",
        "img": "img/web.png",
        "label": "skl",
    }, 
    {
        "id": 14,
        "cat": "About",
        "title": "Born in Korea",
        "subheader": "Living in Mexico since 2004",
        "description": "Being raised in a multicultural environment has really influenced my perspective about the world. I love meeting new people and cultures, so traveling is one of my favorite things about life. This factor has contributed to my open-mindness and curious personality.",
        "img": "img/kor.png",
        "label": "abt",
    }, 
    {
        "id": 15,
        "cat": "Skills",
        "title": "Languages",
        "subheader": "Korean, Spanish, English, German",
        "description": "<ul><li>Korean: native speaker</li><li>Spanish: native speaker</li>English: advanced (C2)<li></li><li>German: basic (B1)</li>",
        "img": "img/lang.png",
        "label": "skl",
    }, 

];

shuffle(contents).forEach(loadHTML)

function loadHTML(content){
    if (content.link === undefined) {
        block.innerHTML +=  `
        <div class="col-lg-4 col-sm-12 col-md-6 card-col ${content.label}">
            <div class="my-card">
                <h3 class="category-box text-center ${content.label}">${content.cat}</h3>
                <h1>${content.title}</h1>
                <h2>${content.subheader}</h1>
                <p>${content.description}</p>
            </div>
            <img src='${content.img}' class='box-i'/>
        </div>
        `;
    } else {
        block.innerHTML +=  `
        <div class="col-lg-4 col-sm-12 col-md-6 card-col ${content.label}">
            <a href="${content.link}" style="text-decoration: none;">
                <div class="my-card">
                    <h3 class="category-box text-center ${content.label}">${content.cat}</h3>
                    <h1>${content.title}</h1>
                    <h2>${content.subheader}</h1>
                    <p>${content.description}</p>
                </div>
                <img src='${content.img}' class='box-i'/>
            </a>
        </div>
        `;
    }
}

function shuffle(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};