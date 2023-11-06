const showKarts = async () => {
    const kartJSON = await getJSON();
    if(kartJSON == ""){
        return;
    }
    
    let kartDiv = document.getElementById("kart-list");

    kartJSON.forEach((kart) =>{
        let section = document.createElement("section");
        kartDiv.append(section);

        let p1 = document.createElement("h2");
        section.append(p1);
        p1.innerHTML = kart.name;

        let p2 = document.createElement("h3");
        section.append(p2);
        p2.innerHTML = kart.date;

        let p3 = document.createElement("h3");
        section.append(p3)
        p3.innerHTML = kart.console;

        let p4 = document.createElement("p");
        section.append(p4)
        p4.innerHTML = kart.tracks;

        let p5 = document.createElement("p");
        section.append(p5)
        p5.innerHTML = kart.characters;

        let p6 = document.createElement("p");
        section.append(p6)
        p6.innerHTML = kart.info;

        let img = document.createElement("img");
        section.append(img);
        img.src = "https://two42-assignment13.onrender.com/" + kart.img;
    });
};

const getJSON = async () => {
    try {
        let response = await fetch("https://two42-assignment13.onrender.com/");
        return await response.json();
    } catch(error) {
        console.log("error retrieving json");
        return "";
    }
};

window.onload = () => {
    showKarts();
};