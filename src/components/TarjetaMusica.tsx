import { useState } from "react";
import { HiPlayPause } from "react-icons/hi2";
import type { LasCanciones } from "../types/songs";
import { AlmacendeMusica } from "../store/store";

interface Props {
    cancion: LasCanciones
}

function TarjetaMusica({ cancion }: Props) {

    const [play, setplay] = useState(false)

    const { actualizarCancion } = AlmacendeMusica()

    function el_click() {
        setplay(function (state) { return !state })
        actualizarCancion(cancion)
    }

    return (
        <div className="flex flex-col items-center text-center">
            <img src={cancion.image.url} alt=""
                style={{
                    width: 300,
                    height: 300,
                    padding: 10,
                    objectFit: "cover"
                }} />

            <h2 style={{                    
                    fontWeight: 400,
                    fontSize: 24                   
                }}>
                {cancion.author}</h2>

            <h3 style={{
                    fontWeight:450,
                    fontSize: '14px',
                    opacity: 0.90,
                    /*lineHeight: '5px',*/
                    marginTop: '1px',
                    marginBottom: '1px'
                }}>
                {cancion.title}</h3>

            <button style={{
                        cursor: "pointer",
                        fontSize: 32,
                        marginTop: '1px',
                    }}
                onClick={el_click}>
                {
                    play ?
                        <> <HiPlayPause style={{
                            color: "white",
                            background: "black",
                            opacity:0.7
                        }} /></>
                        :
                        <> <HiPlayPause style={{
                            color: "black",
                            background: "white",
                        }} /></>
                }
            </button>
        </div>
    )

}

export default TarjetaMusica