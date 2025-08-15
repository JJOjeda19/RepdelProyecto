import { useState } from "react";
import { HiPlayPause } from "react-icons/hi2";

interface Props {
    portada: string
    interprete: string
    cancion: string
    botonplay: string
}

function TarjetaMusica({ portada, interprete, cancion, botonplay }: Props) {

    const [play, setplay] = useState(false)

    function el_click() {
        setplay(function (state) { return !state })
    }

    return (
        <div className="flex flex-col items-center text-center">
            <img src={portada} alt=""
                style={{
                    width: 300,
                    height: 300,
                    padding: 10,
                }} />

            <h2 style={{                    
                    fontWeight: 400,
                    fontSize: 24,
                }}>
                {interprete}</h2>

            <h3 style={{
                    fontWeight:450,
                    fontSize: '16px',
                    opacity: 0.90,
                    lineHeight: '5px',
                    marginBottom: '16px' 
                }}>
                {cancion}</h3>

            <button style={{
                        cursor: "pointer",
                        fontSize: 32,
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