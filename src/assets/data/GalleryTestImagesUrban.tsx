import collection from "./ImageDataStructure";
import { v4 as uuid } from 'uuid'

export const urbanImages: collection[] = [
    {
        key: uuid(),
        titleImage: 4,
        title: 'Buildings Collection',
        tagTitle: 'Architecture',
        tagColour: '#5f5f5f',
        index: 0,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1031/300/300',
                title: 'Skyscraper',
                index: 0,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1029/300/300',
                title: 'New York',
                index: 1,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1040/300/300',
                title: 'Castle',
                index: 2,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1047/300/300',
                title: 'Alley',
                index: 3,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1067/300/300',
                title: 'City View',
                index: 4,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/164/300/300',
                title: 'Lake Side View',
                index: 5,
            },
        ]
    },

    {
        key: uuid(),
        titleImage: 0,
        title: 'Transport Collection',
        tagTitle: 'Cityscapes',
        tagColour: '#7baab5',
        index: 1,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/364/300/300',
                title: 'Trains',
                index: 0,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1033/300/300',
                title: 'Station',
                index: 1,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1063/300/300',
                title: 'Road Through Trees',
                index: 2,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1077/300/300',
                title: 'Cycling',
                index: 3,
            },
        ]
    },

    {
        key: uuid(),
        titleImage: 2,
        title: 'Historic Building Collection',
        tagTitle: 'Architecture',
        tagColour: '#5f5f5f',
        index: 2,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/122/300/300',
                title: 'Looks a little like London, but fairly sure it isn\'t',
                index: 0,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1040/300/300',
                title: 'Castle',
                index: 1,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/134/300/300',
                title: 'Bridge',
                index: 2,
            },

        ]
    },

    {
        key: uuid(),
        titleImage: 5,
        title: 'Cityscapes Collection',
        tagTitle: 'Cityscapes',
        tagColour: '#7baab5',
        index: 3,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/142/300/300',
                title: 'Cityscape #1',
                index: 0,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/164/300/300',
                title: 'Cityscape #2',
                index: 1,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/178/300/300',
                title: 'Through window pane',
                index: 2,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/188/300/300',
                title: 'Cityscape #4',
                index: 3,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/214/300/300',
                title: 'Cityscape #5',
                index: 4,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/221/300/300',
                title: 'Cityscape #6',
                index: 0,
            },

        ]
    },
]
