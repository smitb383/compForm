let resp;
const form = document.forms[0];
// const button = document.getElementById('getTrees');
const submitFamily = document.getElementById('familySubmitButton');
submitFamily.addEventListener('click', displayFamilyTree);

// var treeNum;
var mainPoki;
var genTwo;
var genThree;

function displayFamilyTree(e) {
    var family = document.getElementById("families");
    var selectedValue = family[family.selectedIndex].value;
    family[family.selectedIndex].innerHTML;
    e.preventDefault();
    var treeNum = family.selectedOptions[0].value;
    var url;
    url = "https://pokeapi.co/api/v2/evolution-chain/" + treeNum + "/";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resp = JSON.parse(xhr.response);
            //main pokemon name in family 
            familyName = resp.chain.species.name;
            addNewFamilyToPage(familyName);
            //origin Poki 
            mainPoki = resp.chain.species.url;
            //first evolution
            genTwo = resp.chain.evolves_to[0].species.url;
            //second evolution
            genThree = resp.chain.evolves_to[0].evolves_to[0].species.url;
            console.log("gen three: " + genThree);
            fetchPokiInfo(mainPoki);
            setTimeout(fetchPokiInfo(genTwo), 10000);

            if (genThree != undefined) {
                setTimeout(fetchPokiInfo(genThree), 10000);

            }
        } else {
            console.log("There was an error or delay in with xml request");
            // document.getElementById("Output").innerHTML = "There was an error";
        }
    }
    xhr.open("GET", url, true);
    xhr.send(mainPoki);

};
async function fetchPokiInfo(poki) {
    fetch(poki)
        .then(response => {
            return response.json();
        })
        .then(json => {
            //fetching teh species page 
            for (let i = 0; i <= json.varieties.length; i++) {
                console.log(json.varieties.length);
                return fetch(json.varieties[i].pokemon.url);
            }
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            waitForPoki(json);

            // console.log("json: " + json);
            return json;
        })
        .catch(err => console.log(err));
}

async function waitForPoki(json) {
    const pokiAdd = await addPoki(json);
}

function addPoki(json) {
    imgLink = json.sprites.front_default;
    name = json.name;
    console.log(imgLink);
    var img = document.createElement("img");
    img.src = imgLink;
    var pokiName = document.createElement("p");
    pokiName.textContent = name;
    pokiName.setAttribute("id", "pokiName");
    var poki = document.createElement("div");
    poki.setAttribute("id", "poki");
    var pokiFamilyList = document.querySelectorAll("#pokiFamily")
    var pokiFamily = pokiFamilyList[pokiFamilyList.length - 1];
    console.log(pokiFamily);
    //get the last one 
    poki.appendChild(img);
    poki.appendChild(pokiName);
    pokiFamily.appendChild(poki);
    return poki;
}

function addNewFamilyToPage(familyName) {
    var tree = document.createElement("section");
    var pokiFamilyName = document.createElement("h2");
    pokiFamilyName.textContent = familyName;
    var pokiFamily = document.createElement("div");
    pokiFamily.setAttribute('id', "pokiFamily");
    tree.appendChild(pokiFamilyName);
    tree.appendChild(pokiFamily);
    document.body.appendChild(tree);
}

// function displayPoki2(poki) {
//     fetch(poki)
//         .then(response => {
//             return response.json();
//         })
//         .then(json => {
//             //fetching teh species page 
//             let urls = [];
//             for (let i = 0; i <= json.varieties.length; i++) {
//                 // console.log(json.varieties.length);
//                 urls.push(json.varieties[i].pokemon.url);

//                 // console.log(json.varieties[i].pokemon.url);

//             }
//             console.log(urls);
//             return (urls)
//         })


//     Promise.all(urls.map(url => fetch(url)))
//         .then(response => {
//             console.log(response.json());
//             return response.json();
//         })
//         .then(json => {
//             //img
//             imgLink = json.sprites.front_default;
//             name = json.name;
//             console.log(imgLink);

//             var img = document.createElement("img");
//             img.src = imgLink;
//             var pokiName = document.createElement("p");
//             pokiName.textContent = name;

//             var poki = document.createElement("div");
//             var tree = document.getElementById("tree");
//             poki.appendChild(img);
//             poki.appendChild(pokiName);
//             tree.appendChild(poki);
//         })
//         .catch(err => console.log(err));
// }