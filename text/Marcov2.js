//getting form data
const form = document.forms[0];
const submitSongs = document.getElementById('submitSongs');
submitSongs.addEventListener('click', processSongs);

var songTitle1, songArtist1, songTitle2, songArtist2, keyword;

function processSongs(e) {

    //get the first song 
    songTitle1 = document.getElementById("song1Title").value;
    console.log(songTitle1);

    songArtist1 = document.getElementById("song1Artist").value;
    console.log(songArtist1);

    songTitle2 = document.getElementById("song2Title").value;
    console.log(songTitle2);

    songArtist2 = document.getElementById("song2Artist").value;
    console.log(songArtist2);

    keyword = document.getElementById("keyword").value;

    e.preventDefault();
    console.log(keyword);

    //get lyrics from API 
    var url;
    var song1Lyrics, song2Lyrics;
    url = "https:/api.lyrics.ovh/v1/" + songArtist1 + "/" + songTitle1;
    console.log(url);
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            resp = JSON.parse(request.response);

            //first song 
            song1Lyrics = resp.lyrics;
            // console.log(song1Lyrics);
            var songTwoUrl = "https:/api.lyrics.ovh/v1/" + songArtist2 + "/" + songTitle2;
            var song2 = fetch(songTwoUrl)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {

                    song2Lyrics = data.lyrics;
                    console.log(song2Lyrics);
                    console.log(song1Lyrics);
                    console.log(keyword);
                    const model = generateModel(song1Lyrics + " " + song2Lyrics);
                    const output_text = generateText(keyword, model);


                    // document.body.innerHTML = output_text;
                    var printbox = document.getElementById("Output");
                    printbox.innerHTML = output_text;



                    return song2Lyrics;
                });


        } else {
            console.log("There was an error or delay in with xml request");
            // document.getElementById("Output").innerHTML = "There was an error";
        }
    }
    request.send();

}

function generateModel(input_text) {
    const words = input_text.split(" ");
    const model = {};

    // loop through all the words except the last one.
    for (let i = 0; i < words.length - 1; i++) {
        const target_word = words[i];
        const next_word = words[i + 1];

        // if the model doesn't contain the target word, add it.
        if (!model[target_word]) {
            model[target_word] = [];
        }

        // add the next word to the possibilities for target_word
        model[target_word].push(next_word);
    }

    return model;
}


function generateText(first_word, model) {
    // start with the word passed in
    let output_text = first_word;
    let current_word = first_word;
    console.log(output_text);
    console.log(current_word);
    console.log(model);
    for (let i = 0; i < 120; i++) {
        // choose the next word by sampling from options in the model
        current_word = sample(model[current_word]);

        // append word to output
        output_text += " ";
        output_text += current_word;

        // if we get to a word that ends with "." we are done.
        const last_character = current_word.substr(current_word.length - 1);
        if (last_character === ".") {
            break;
        }
    }
    return output_text;
}

function sample(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}