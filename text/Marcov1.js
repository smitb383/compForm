//getting form data
const form = document.forms[0];
const button = document.getElementById('getTrees');
const submitSongs = document.getElementById('submitSongs');
submitSongs.addEventListener('click', processSongs);

function processSongs(e) {

    //get the first song 
    var song1 = document.getElementById("song1");
    // var selectedValue = song1[song1.selectedIndex].value;
    song1[song1.selectedIndex].innerHTML;
    e.preventDefault();
    var song1 = song1.selectedOptions[0].value;

    var song1input = checkSongMatch(song1);
    console.log(song1input);
    //get the second song
    var song2 = document.getElementById("song2");
    // var selectedValue = song2[song2.selectedIndex].value;
    song2[song2.selectedIndex].innerHTML;
    e.preventDefault();
    var song2 = song2.selectedOptions[0].value;
    console.log(song2);
    var song2input = checkSongMatch(song2);
    console.log(song2input);

    //get the word splitter 
    var keyword = document.getElementById("keyword");

    keyword[keyword.selectedIndex].innerHTML;
    e.preventDefault();
    var keyword = keyword.selectedOptions[0].value;

    //run marchov chain  functions
    const model = generateModel(song1input + " " + song2input);
    const output_text = generateText(keyword, model);

    document.body.innerHTML = output_text;
    // console.log(output_text);

}


function checkSongMatch(songName) {
    var songLyrics;
    if (songName == "puff") {
        songLyrics = "Puff, the magic dragon lived by the sea And frolicked in the autumn mist in a land called Honahlee Little Jackie paper loved that rascal puff And brought him strings and sealing wax and other fancy stuff oh Puff, the magic dragon lived by the sea And frolicked in the autumn mist in a land called Honahlee Puff, the magic dragon lived by the sea And frolicked in the autumn mist in a land called Honahlee Together they would travel on a boat with billowed sail Jackie kept a lookout perched on puff's gigantic tail Noble kings and princes would bow whene'er they came Pirate ships would lower their flag when puff roared out his name oh Puff, the magic dragon lived by the sea And frolicked in the autumn mist in a land called Honahlee Puff, the magic dragon lived by the sea And frolicked in the autumn mist in a land called Honahlee A dragon lives forever but not so little boys Painted wings and giant rings make way for other toys One grey night it happened, Jackie Paper came no more And puff that mighty dragon, he ceased his fearless roar His head was bent in sorrow, green scales fell like rain Puff no longer went to play along the cherry lane Without his life-long friend, puff could not be brave So Puff that mighty dragon sadly slipped into his cave oh Puff, the magic dragon lived by the sea And frolicked in the autumn mist in a land called Honahlee Puff, the magic dragon lived by the sea And frolicked in the autumn mist in a land called Honahlee";
    } else if (songName == "bjork") {
        songLyrics = "If you ever get close to a human And human behavior Be ready, be ready to get confused There's definitely, definitely, definitely no logic To human behavior But yet so, yet so irresistible And there's no map They're terribly moody And human behavior Then all of a sudden turn happy But, oh, to get involved in the exchange Of human emotions Is ever so, ever so satisfying Oh oh, and there's no map Human behavior, human Human, human behavior, human Human, human behavior, human Human behavior, human And there's no map And the compass Wouldn't help at all Human behavior, human, human Human behavior, human Human behavior, human Human behavior There's definitely, definitely, definitely no logic Human, human Human behavior Human There's definitely, definitely, definitely no logic Human, human, human, human";
    } else if (songName == "teenagers") {
        songLyrics = "They're gonna clean up your looks With all the lies in the books To make a citizen out of you Because they sleep with a gun And keep an eye on you, son So they can watch all the things you do Because the drugs never work They're gonna give you a smirk 'Cause they got methods of keepin' you clean They gonna rip up your heads Your aspirations to shreds Another cog in the murder machine They said all Teenagers scare The living shit out of me They could care less As long as someone'll bleed So darken your clothes Or strike a violent pose Maybe they'll leave you alone But not me The boys and girls in the clique The awful names that they stick You're never gonna fit in much, kid But if you're troubled and hurt What you got under your shirt Will make them pay for the things that they did They said all Teenagers scare The living shit out of me They could care less As long as someone'll bleed So darken your clothes Or strike a violent pose Maybe they'll leave you alone But not me Oh yeah They said all Teenagers scare The living shit out of me They could care less As long as someone'll bleed So darken your clothes Or strike a violent pose Maybe they'll leave you alone But not me All together now Teenagers scare The living shit out of me They could care less As long as someone'll bleed So darken your clothes Or strike a violent pose Maybe they'll leave you alone But not me Teenagers scare The living shit out of me They could care less As long as someone'll bleed So darken your clothes Or strike a violent pose Maybe they'll leave you alone But not mev";
    } else if (songName == "ru") {
        songLyrics = "Guess who's back in the house Heels click-clackin' about Fine, fresh, feminine, style to eleven I'm divine, so heavenly Gentlemen sweatin' It's dimes across the board with no doubt Body like WOW! Pussy bouta end this trial Titties so plentiful, fishy queen jezebel Should be criminal Don't make sense for a bitch to be this endowed Watch for the  What is that sound? Watch me drop, drop, drop into the ground Wait for the four, drop to the floor Add up the tens to get the score I been that bitch, yes I love that drama Fishy, feminine up-and-comer From the Clinton's to the Obama's I keep it tight, now they call me Mother Shady queen bitch, I love that drama Fishy, feminine up-and-comer From the Clinton's to the Obama's I keeps it tight, now they call  Me Mother. Na-na-na-na-na-now Giggity-giggity, how Brrat, get back Ba-pa-da-pa-pa-POW A cunty hunty, a cunty hunty A hunty but I Count my money, I count my money With a brat-brat, knick to the knick the knick-knack I'm back with the freaky money Click-clack, ow queen Shade machine Gets the [?] Best believe I'm that Glamazon They know my name because I'm on another echelon Miss Automatic, Supersonic, I'm a Sass-atron And I ain't lookin' up to anyone that gams along And I'm ready shake the jelly when the jam comes on The kind of thing that all the fellas make advances on I'm only gettin' out of bed for $20 Million Now get your camera phone Cause in a minute I'm about to be on  Here come that girl, o-oh shit what up Give her 12, that's the bread and butter , she's the big shot caller Get-get run over, over None of these bitches is cunty like Ru Clockin' these chickens I cluck and they [?] Runnin' my business, Miss Boss comin' through When I step in you know well what it do Uh, y'all know well what it do None of these bitches is fuckin' with Ru Runnin' my businesses, don't need a whip When I step in, they know well what it do When I step in, they know well what it do  Yeah, bitch, she done already done had hers She been done had herses queen Shade machine Gets the [?] Best believe Mother  how A cunty hunty, a cunty hunty A hunty but I Count my money, I count my money With a brat-brat, knick to the knick the knick-knack I'm back with the freaky money Click-clack";
    } else if (songName == "sunshine") {
        songLyrics = "The other night, dear, as I lay sleeping I dreamed I held you in my arms But when I awoke, dear, I was mistaken And I hung my head and I cried You are my sunshine, my only sunshine You make me happy when skies are grey You'll never know, dear, how much I love you Please don't take my sunshine away  I'll always love you and make you happy If you will only say the same But if you leave me to love another You'll regret it all some day You are my sunshine, my only sunshine You make me happy when skies are grey You'll never know, dear, how much I love you Please don't take my sunshine away  You told me once, dear, you really loved me  And no one else could come between But now you've left me and love another You have shattered all my dreams You are my sunshine, my only sunshine You make me happy when skies are grey You'll never know dear, how much I love you Please don't take my sunshine away";
    } else if (songName == "juicy") {
        songLyrics = "Yeah, this album is dedicated To all the teachers that told me I'd never amount to nothin' To all the people that lived above the buildings that I was hustlin' in front of Called the police on me when I was just tryin' to make some money to feed my daughter (it's all good) And all the  in the struggle You know what I'm sayin'? It's all good, baby baby It was all a dream, I used to read Word Up! Magazine Salt-n-Pepa and Heavy D up in the limousine Hangin' pictures on my wall Every Saturday Rap Attack, Mr. Magic, Marley Marl I let my tape rock 'til my tape popped Smokin' weed in Bambu, sippin' on Private Stock Way back, when I had the red and black lumberjack With the hat to match Remember Rappin' Duke? Duh-ha, duh-ha You never thought that hip-hop would take it this far Now I'm in the limelight 'cause I rhyme tight Time to get paid, blow up like the World Trade Born sinner, the opposite of a winner Remember when I used to eat sardines for dinner Peace to Ron G, Brucie B, Kid Capri Funkmaster Flex, Lovebug Starski I'm blowin' up like you thought I would Call the crib, same number, same hood It's all good (It's all good)And if you don't know, now you know, You know very well Who you are Don't let 'em hold you down Reach for the stars You had a goal But not that many 'Cause you're the only one I'll give you good and plenty I made the change from a common thief To up close and personal with Robin Leach And I'm far from cheapI smoke skunk with my peeps all day Spread love, it's the Brooklyn way The Moët and Alizé keep me pissy Girls used to diss me Now they write letters 'cause they miss me I never thought it could happen, this rappin' stuff I was too used to packin' gats and stuff Now honeys play me close like butter play toast From the Mississippi down to the East Coast Condos in Queens, indo for weeks Sold-out seats to hear Biggie Smalls speak Livin' life without fear Puttin' five karats in my baby girl's ear Lunches, brunches, interviews by the pool Considered a fool 'cause I dropped out of high school Stereotypes of a black male misunderstood And it's still all good And if you don't know, now you know, You know very well Who you are Don't let 'em hold you down Reach for the stars You had a goal But not that many 'Cause you're the only one I'll give you good and plenty Super Nintendo, Sega Genesis When I was dead broke, man, I couldn't picture this 50-inch screen, money-green leather sofa Got two rides, a limousine with a chauffeur Phone bill about two G's flat No need to worry, my accountant handles that And my whole crew is loungin' Celebratin' every day, no more public housin' Thinkin' back on my one-room shack Now my mom pimps a Ac' with minks on her back And she loves to show me off of course Smiles every time my face is up in The Source We used to fuss when the landlord dissed us No heat, wonder why Christmas missed us Birthdays was the worst days Now we sip Champagne when we thirsty Uh, damn right, I like the life I live 'Cause I went from negative to positive And it's all ";
    } else if (songName == "sk8er") {
        songLyrics = "He was a boy She was a girl Can I make it any more obvious? He was a punk She did ballet What more can I say? He wanted her She'd never tell  Secretly she wanted him as well But all of her friends Stuck up their nose They had a problem with his baggy clothes He was a skater boy She said, see you later, boy He wasn't good enough for her She had a pretty face But her head was up in space She needed to come back down to earth Five years from now She sits at home Feeding the baby, she's all alone She turns on TV Guess who she sees Skater boy rockin' up MTV She calls up her friends They already know And they've all got tickets to see his show She tags along Stands in the crowd Looks up at the man that she turned down He was a skater boy She said, see you later, boy He wasn't good enough for her Now he's a super star Slammin' on his guitar Does your pretty face see what he's worth? He was a skater boy She said, see you later, boy He wasn't good enough for her Now he's a super star Slammin' on his guitar Does your pretty face see what he's worth? Sorry, girl, but you missed out Well, tough, luck that boy's mine now We are more than just good friends This is how the story ends Too bad that you couldn't see See the man that boy could be There is more that meets the eye I see the soul that is inside He's just a boy And I'm just a girl Can I make it any more obvious? We are in love Haven't you heard How we rock each others world I'm with the skater boy I said, see you later, boy I'll be back stage after the show I'll be at the studio Singing the song we wrote About a girl you used to know I'm with the skater boy I said, see you later, boy I'll be back stage after the show I'll be at the studio Singing the song we wrote About a girl you used to know";
    } else if (songName == "bearN") {
        songLyrics = "Look for the bare necessities The simple bare necessities Forget about your worries and your strife I mean the bare necessities Old Mother Nature's recipes That brings the bare necessities of life Wherever I wander, wherever I roam I couldn't be fonder of my big home The bees are buzzin' in the tree To make some honey just for me When you look under the rocks and plants And take a glance at the fancy ants Then maybe try a few The bare necessities of life will come to you They'll come to you! Look for the bare necessities The simple bare necessities Forget about your worries and your strife I mean the bare necessities That's why a bear can rest at ease With just the bare necessities of life Now when you pick a pawpaw Or a prickly pear And you prick a raw paw Well next time beware Don't pick the prickly pear by the paw When you pick a pear Try to use the claw But you don't need to use the claw When you pick a pear of the big pawpaw Have I given you a clue? The bare necessities of life will come to you They'll come to you! Oh man this is really living So just try and relax, yeah cool it Fall apart in my backyard 'Cause let me tell you something little britches If you act like that bee acts, uh uh You're working too hard And don't spend your time lookin' around For something you want that can't be found When you find out you can live without it And go along not thinkin' about it I'll tell you something true The bare necessities of life will come to you Look for the bare necessities The simple bare necessities Forget about your worries and your strife I mean the bare necessities That's why a bear can rest at ease With just the bare necessities of life With just the bare necessities of life";
    } else if (songName == "feirce") {
        songLyrics = "Bambi, belle of the ball Banji, better than them all Never been a flaw Pretty kitty manicure the claws, silly Never been a draw When I purr bet he wanna paw Cause a stir when she on the floor Giving it her all Champagne always on the pour Some happy, others can applaud Bum bitches aggy, but of course Mermaid coming on the shore Take the prince crown and the coin Shut it down then a bitch is gone Nother round of Dom Pérignon Downtown vampin' to the song Tiara on my head when it's worn Style get the critics in amore Physically shawty is the bomb Whether blue weave or the blonde Harlem or Milan Banks break the bank and the bonds I used to think I was fierce Cause I was in all the houses I won trophies I used to munch trade for dollars too But see I'm fiercer now Cause I got a job, I got an education And I got somebody waiting at home for me God damn it Now one queen asked me the other day was it She told me: Miss Thing you think you're fierce?  I said: Of course She said All queens think they're fierce I said: Miss Thing, all queens and me!  Bon appetit, I'm a feast for the eyes The reason why I'm, in luxury designs So chic, so ahead of time Kunt queen, princess of the prize Witness the baddest bitch alive I'm reporting from the belly of the night Gorgeous: plus the world is mine A girl with a twirl and a rhyme Diamonds and a pearl on the shine Welcome to her house in the sky The house, the house, work me the houseYou pay ten dollars get in the ball Work me the house, work me the house, work me the house 'Cause you pay ten dollars to get in the ball Back at it 'gain My only bad habit (s), my addiction to win She only mad at it, did it better than her friends You better have Cheddar to attend Wang gown with leather on the trim Get together with the slim Mermaid who came on the swim Wave to the gents Do my dips and the spin Turn tricks for the fucking ends? You turned dick for the fucking gem? You a bum bitch to the end Come again, come again? You running with the wrong sip, rum to the gin? Bambi work it out like felons in a gym Hey fella, f-fella I'm better than a ten Eleven in the denim About twelve in her skin Young mademoiselle, the devil wears Prada I'm giving them hell, you bitches getting nada";
    } else if (songName == "stacysMom") {
        songLyrics = "Stacy's mom has got it goin' on Stacy's mom has got it goin' on Stacy's mom has got it goin' on Stacy's mom has got it goin' on Stacy, can I come over after school? We can hang around by the pool (Hang by the pool) Did your mom get back from her business trip? Is she there, or is she trying to give me the slip? You know, I'm not the little boy that I used to be I'm all grown up now Baby, can't you see Stacy's mom has got it goin' on She's all I want And I've waited for so long Stacy, can't you see? You're just not the girl for me I know it might be wrong but I'm in love with Stacy's mom Stacy's mom has got it goin' on Stacy's mom has got it goin' on Stacy, do you remember when I mowed your lawn? Your mom came out with just a towel on I could tell she liked me from the way she stared And the way she said You missed a spot over there  And I know that you think it's just a fantasy But since your dad walked out Your mom could use a guy like me Stacy's mom has got it goin' on She's all I want And I've waited so long Stacy, can't you see? You're just not the girl for me I know it might be wrong but I'm in love with Stacy's mom Stacy's mom has got it goin' on She's all I want and I've waited for so long Stacy can't you see? You're just not the girl for me I know it might be wrong I'm in love with Stacey's mom"
    }

    return songLyrics;
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