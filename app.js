const reviews = [{
    id: 1,
    img: "./person1.jpg",
    name: "Mikke Tyson",
    job: "UX Designer",
    info: "Talented UX designer with a deep understanding of user-centered design principles. Demonstrates a flair for creating intuitive, visually appealing interfaces. Strong collaborator, adept at translating complex concepts into user-friendly experiences."
},
{
    id: 2,
    img: "./person2.png",
    name: "Olivia Peterson",
    job: "Frontend Developer",
    info: "Exceptional frontend developer with a keen eye for design, proficiency in modern frameworks, and a passion for creating seamless user experiences. Collaborative, adaptable, and consistently delivers high-quality, pixel-perfect solutions."
},
{
    id: 3,
    img: "./person3.jpg",
    name: "Ethan Mitchell",
    job: "Blockchain Developer",
    info:"Skilled blockchain developer with expertise in smart contracts, decentralized applications, and cryptographic protocols. Demonstrates proficiency in various blockchain platforms. Adept at optimizing performance and ensuring secure, transparent, and efficient decentralized solutions."
},
{
    id: 4,
    img: "./person4.jpeg",
    name: "Maya Johnson",
    job: "Data Analyst",
    info:"Detail-oriented data analyst proficient in statistical analysis, data visualization, and extracting actionable insights. Strong analytical skills, adept at interpreting complex datasets, and providing valuable recommendations. Effective communicator and problem solver."
}
];

const img = document.getElementById("person-img");
const name = document.getElementById("person-name");
const job = document.getElementById("person-job");
const text = document.getElementById("person-info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPersonInfo(currentItem);
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPersonInfo(currentItem);
});

function showPersonInfo(person) {
    const item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.info;
}

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random()*reviews.length);
    showPersonInfo(currentItem);
})