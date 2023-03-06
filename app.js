
const elements = document.querySelectorAll('[d]');
console.log(elements.length);

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
        
        console.log(this.getAttribute('d'));
        var audio = new Audio(`audio/key-${i}.mp3`);
        console.log('clicked' +`audio/key-${i}.mp3`);
        audio.play();
    });
}