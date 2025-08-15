import type { LasCanciones } from "../types/songs"
import {create} from "zustand"

export const AlmacendeMusica = create(function (set): {
    cancionActual: null | LasCanciones,
    actualizarCancion: (nuevaCancion: LasCanciones) => void
}
{
    return {
        cancionActual: null,
        actualizarCancion: function(nuevaCancion: LasCanciones) {
            set({cancionActual: nuevaCancion})
        }
    }
})