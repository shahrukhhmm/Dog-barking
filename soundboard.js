const sounds = ['1', '2', '3', '4']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {

        stop()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stop() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()

        song.currentTime = 0;
    })
}