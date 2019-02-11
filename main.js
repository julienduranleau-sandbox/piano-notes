import {Piano} from './src/Piano'
import Tone, { Buffer, Master, Part, Transport } from 'tone'
Tone.context.lookAhead = 0

Buffer.on('progress', prog => console.log(Math.round(prog * 100)))

var piano = new Piano([21, 108], 5).toMaster()
window.piano = piano

piano.load().then(()=>{
	piano.keyDown("C4")
	piano.keyDown("E4")
	piano.keyDown("G4")
})

function playNotes(notes) {
    let noteList = notes.split(' ')
    for (let note of noteList) {
        try { piano.keyUp(note) } catch(e) {}
        piano.keyDown(note)
    }
}
window.playNotes = playNotes

setInterval(function() {
    n = 'ABCDEFG'.split('')[Math.floor(Math.random() * 7)]; 
    k = Math.floor(Math.random() * 3 + 3);
    playNotes(n+k) 
}, 500)
