

let schools = {
    "Harvard": {
        rank: 1,
        acceptanceRate: 4.6,
        tuition: 51925,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1024px-Harvard_University_coat_of_arms.svg.png"
    },
    "Stanford": {
        rank: 2,
        acceptanceRate: 4.3,
        tuition: 53529,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/1024px-Seal_of_Leland_Stanford_Junior_University.svg.png"
    },
    "MIT": {
        rank: 3,
        acceptanceRate: 6.7,
        tuition: 53790,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1920px-MIT_logo.svg.png"
    },
    "Caltech": {
        rank: 4,
        acceptanceRate: 6.4,
        tuition: 53704,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/1024px-Seal_of_the_California_Institute_of_Technology.svg.png"
    },
    "Columbia": {
        rank: 5,
        acceptanceRate: 6.1,
        tuition: 57208,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Columbia_coat_of_arms_no_crest.png"
    },
    "Yale": {
        rank: 6,
        acceptanceRate: 6.3,
        tuition: 55100,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/07/Yale_University_Shield_1.svg"
    },
    "Princeton": {
        rank: 7,
        acceptanceRate: 5.5,
        tuition: 51450,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/800px-Princeton_seal.svg.png"
    },
    "UPenn": {
        rank: 8,
        acceptanceRate: 8.4,
        tuition: 55320,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/92/UPenn_shield_with_banner.svg"
    },
    "UChicago": {
        rank: 9,
        acceptanceRate: 6.2,
        tuition: 57444,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/800px-University_of_Chicago_shield.svg.png"
    },
    "Northwestern": {
        rank: 10,
        acceptanceRate: 8.9,
        tuition: 56880,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/56/Northwestern_University_seal.svg"
    },
    "UC Berkeley": {
        rank: 22,
        acceptanceRate: 16.9,
        tuition: 14206,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg"

    },
    "UCLA": {
        rank: 20,
        acceptanceRate: 14.3,
        tuition: 13500,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/0d/The_University_of_California_UCLA.svg"
    },
    "UMich": {
        rank: 25,
        acceptanceRate: 23.5,
        tuition: 15360,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/93/Seal_of_the_University_of_Michigan.svg"
    },


    "UCSD": {
        rank: 35,
        acceptanceRate: 30.2,
        tuition: 14484,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Seal_of_the_University_of_California%2C_San_Diego.svg"
    },
    "Texas A&M": {
        rank: 68,
        acceptanceRate: 58.6,
        tuition: 11600,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/f/f7/Texas_A%26M_University_seal.svg"
    },
    "University of Florida":{
        rank: 30,
        acceptanceRate: 34.5,
        tuition: 28600,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/6/6d/University_of_Florida_seal.svg"
    },
    "University of Miami":{
        rank: 53,
        acceptanceRate: 32.2,
        tuition: 49500,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/2/27/University_of_Miami_seal.svg"
    },
    "University of Washington":{
        rank: 58,
        acceptanceRate: 49.5,
        tuition: 11500,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/5/58/University_of_Washington_seal.svg"
    },
    "University of Illinois Urbana-Champaign":{
        rank: 47,
        acceptanceRate: 62.3,
        tuition: 15800,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/af/University_of_Illinois_seal.svg"
    },
    "University of Wisconsin-Madison":{
        rank: 46,
        acceptanceRate: 57.2,
        tuition: 10700,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/4/45/Seal_of_the_University_of_Wisconsin.svg"
    },
    "University of Minnesota Twin Cities":{
        rank: 67,
        acceptanceRate: 57.8,
        tuition: 15000,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/8/86/Seal_of_the_University_of_Minnesota.svg"
    },
    "University of Arizona":{
        rank: 97,
        acceptanceRate: 85.2,
        tuition: 12000,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/e/e4/University_of_Arizona_seal.svg"
    },
    "University of Oregon":{
        rank: 99,
        acceptanceRate: 89.2,
        tuition: 13500,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/2/28/University_of_Oregon_seal.svg"
    },
    "University of Colorado Boulder":{
        rank: 95,
        acceptanceRate: 88.2,
        tuition: 13000,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/02/Seal_of_the_University_of_Colorado.svg"
    },

    "University of Houston":{
        rank: 97,
        acceptanceRate: 85.2,
        tuition: 12000,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/7/77/University_of_Houston_seal.svg"
    },
    "New York University":{
        rank: 30,
        acceptanceRate: 34.5,
        tuition: 28600,
        imageURL: "https://upload.wikimedia.org/wikipedia/en/1/16/New_York_University_Seal.svg"
    },
    "Boston University":{
        rank: 58,
        acceptanceRate: 49.5,
        tuition: 11500,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Boston_University_seal.svg"
    },
    "Northeastern University":{
        rank: 46,
        acceptanceRate: 57.2,
        tuition: 10700,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Northeastern_seal.svg"
    },

};

// Update the editCardContent function to set the src attribute of the image element
function editCardContent(card: HTMLElement, schoolName: string, school: School) void {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = schoolName;

    const cardImage = card.querySelector("img");
    cardImage.src = school.imageURL;
    cardImage.alt = schoolName + " Logo";

    const cardRank = card.querySelector(".rank");
    cardRank.textContent = "US News ranking: " + school.rank;

    const cardTuition = card.querySelector(".tuition");
    cardTuition.textContent = "Tuition: " + school.tuition;

    const cardAcceptanceRate = card.querySelector(".acceptanceRate");
    cardAcceptanceRate.textContent = "Acceptance Rate: " + school.acceptanceRate + "%";
}

// This function adds cards the page to display the data in the array
function showCards()  void {
    const cardContainer :any = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let schoolNamey in schools) {
        let school = schools[schoolName];

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, schoolName, school); // Edit title and school information
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function addCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";


    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function sortCards() {
    Object.keys(schools).sort(); // Sort the school names
    showCards(); // Call showCards again to refresh
}

function addSchool(schoolName: string, rank: number, acceptanceRate, tuition, imageURL) {
    schools[schoolName] = {
        rank: rank,
        acceptanceRate: acceptanceRate,
        tuition: tuition,
        imageURL: imageURL
    };
}

function sortSchoolsByAcceptanceRate() {

    let schoolsArray = Object.entries(schools);


    schoolsArray.sort((a, b) => a[1].acceptanceRate - b[1].acceptanceRate);


    schools = Object.fromEntries(schoolsArray);


    showCards();}

function sortSchoolsByTuition() {

    let schoolsArray = Object.entries(schools);


    schoolsArray.sort((a, b) => a[1].tuition - b[1].tuition);


    schools = Object.fromEntries(schoolsArray);


    showCards();}


    function editCardContent(card: HTMLElement, schoolName: string, school: School): void {
        card.style.display = "block";
    
        const cardHeader = card.querySelector("h2");
        if (cardHeader) cardHeader.textContent = schoolName;
    
        const cardImage = card.querySelector("img");
        if (cardImage) {
            cardImage.src = school.imageURL;
            cardImage.alt = schoolName + " Logo";
        }
    
        const cardRank = card.querySelector(".rank");
        if (cardRank) cardRank.textContent = "US News ranking: " + school.rank;
    
        const cardTuition = card.querySelector(".tuition");
        if (cardTuition) cardTuition.textContent = "Tuition: " + school.tuition;
    
        const cardAcceptanceRate = card.querySelector(".acceptanceRate");
        if (cardAcceptanceRate) cardAcceptanceRate.textContent = "Acceptance Rate: " + school.acceptanceRate + "%";
    }
    
    function showCards(): void {
        const cardContainer = document.getElementById("card-container");
        if (!cardContainer) return;
    
        cardContainer.innerHTML = "";
        const templateCard = document.querySelector(".card") as HTMLElement | null;
        if (!templateCard) return;
    
        for (let schoolName in schools) {
            let school = schools[schoolName];
            const nextCard = templateCard.cloneNode(true) as HTMLElement;
            editCardContent(nextCard, schoolName, school);
            cardContainer.appendChild(nextCard);
        }
    }
    
    function addCardContent(card: HTMLElement, newTitle: string, newImageURL: string): void {
        card.style.display = "block";
    
        const cardHeader = card.querySelector("h2");
        if (cardHeader) cardHeader.textContent = newTitle;
    
        const cardImage = card.querySelector("img");
        if (cardImage) {
            cardImage.src = newImageURL;
            cardImage.alt = newTitle + " Poster";
        }
    
        console.log("new card:", newTitle, "- html: ", card);
    }
    
    document.addEventListener("DOMContentLoaded", showCards);
    
    function quoteAlert(): void {
        console.log("Button Clicked!")
        alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
    }
    
    function sortCards(): void {
        const sortedSchools = Object.fromEntries(
            Object.entries(schools).sort(([a], [b]) => a.localeCompare(b))
        );
        Object.assign(schools, sortedSchools);
        showCards();
    }
    
    function addSchool(schoolName: string, rank: number, acceptanceRate: number, tuition: number, imageURL: string): void {
        schools[schoolName] = {
            rank,
            acceptanceRate,
            tuition,
            imageURL
        };
    }
    
    function sortSchoolsByAcceptanceRate(): void {
        const sortedSchools = Object.fromEntries(
            Object.entries(schools).sort((a, b) => a[1].acceptanceRate - b[1].acceptanceRate)
        );
        Object.assign(schools, sortedSchools);
        showCards();
    }
    
    function sortSchoolsByTuition(): void {
        const sortedSchools = Object.fromEntries(
            Object.entries(schools).sort((a, b) => a[1].tuition - b[1].tuition)
        );
        Object.assign(schools, sortedSchools);
        showCards();
    }
    
    function addNewSchool(): void {
        let schoolName = prompt("Enter the name of the school:");
        let rank = parseInt(prompt("Enter the rank of the school:") || "");
        let acceptanceRate = parseFloat(prompt("Enter the acceptance rate of the school:") || "");
        let tuition = parseInt(prompt("Enter the tuition fee of the school:") || "");
        let imageURL = prompt("Enter the URL of the school's image:");
    
        if (schoolName && !isNaN(rank) && !isNaN(acceptanceRate) && !isNaN(tuition) && imageURL) {
            addSchool(schoolName, rank, acceptanceRate, tuition, imageURL);
            showCards();
        } else {
            alert("Invalid input. Please try again.");
        }
    }
