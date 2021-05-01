export default interface collection {
    key: string
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

export const placeholder: image = {
    key: '44525db2-7e1d-4201-a07c-b7d11f686bf7',
    url: 'https://picsum.photos/id/250/500',
    title: 'Placeholder',
    index: 0,
}
