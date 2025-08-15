import type { string } from "astro:schema"

export interface LasCanciones {
    _id: string
    title: string
    album: string
    author: string
    audio: {
        url: string
        id: string
        filename: string
    }
     image: {
        url: string
        id: string
        filename: string
    }
}
