const openInv = () => {
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('content-inv').classList.remove('hidden');
    window.scrollBy(0, 1);
    playMusic();
}

const stopMusic = () => {
    document.getElementById('music-icon').innerText = '▢';
    document.getElementById('btn-music').setAttribute('onclick', 'playMusic()');
    document.getElementById('btn-music').classList.remove('animate-spin');

    var myAudio = document.querySelector('#myAudio');
    myAudio.pause();
}

const playMusic = async () => {
    document.getElementById('music-icon').innerText = '♪';
    document.getElementById('btn-music').setAttribute('onclick', 'stopMusic()');
    document.getElementById('btn-music').classList.add('animate-spin');

    var myAudio = document.querySelector('#myAudio');
    await myAudio?.play();
}

let text = document.getElementById('copy-number').innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Copied!');
        alert("Copied!");
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('#content-inv h1, #content-inv h2, #content-inv p, #content-inv a, #content-inv img, #content-inv button, #content-inv span, #content-inv iframe, #content-inv input, #content-inv textarea, #content-inv hr');

    elements.forEach(element => {
        // Menambahkan kelas animasi ke setiap elemen
        element.classList.add('reveal');
    });
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();