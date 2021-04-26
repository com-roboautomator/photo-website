export default interface collection {

    key: string
    url: string
    title: string
    index: number

    images?: image[]

    titleImage?: number

    tagTitle?: string
    tagColour?: string

}

export interface image {

    key: string
    url: string
    title: string
    index: number
    
}

