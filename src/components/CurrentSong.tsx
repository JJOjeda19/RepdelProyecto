import { AlmacendeMusica } from "../store/store"

function CurrentSong() {
    const {cancionActual} = AlmacendeMusica()
    return (
       <>
        <audio src={cancionActual?.audio.url} controls autoPlay></audio>
       </>
    )
}
export default CurrentSong