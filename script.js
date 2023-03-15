const button = document.querySelector('#button'),
     audioElement = document.querySelector('#audio');

//disable/enable button

function toggleButton(){
    button.disabled = !button.disabled; 
}

// passing a joke to voice api
function tellMe(joke){
    console.log('Tell me:', joke);
    VoiceRSS.speech({
        key: 'd1fc22a648b84e41bd247a8150ebb3a0',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get jokes from api
async function getJokes(){
    const apiUrl ='https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist&type=single';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        let joke = data.joke;
        tellMe(joke);
        toggleButton();
    } catch (error){
        console.log('whoops', error);
    }
}

button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);