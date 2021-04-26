import collection from "./ImageDataStructure";
import {v4 as uuid} from 'uuid'

export const urbanImages: collection[] = [
    {
        key: uuid(),
        url:
            'https://picsum.photos/id/101/300/300', // won't be required anymore
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
        url:
            'https://picsum.photos/id/1026/300/300',
        title: 'Transport Collection',
        tagTitle: 'Cityscapes',
        tagColour: '#7baab5',
        index: 1,
    },

    {
        key: uuid(),
        url:
            'https://picsum.photos/id/1040/300/300',
        title: 'Historic Building Collection',
        tagTitle: 'Architecture',
        tagColour: '#5f5f5f',
        index: 2,
    },

    {
        key: uuid(),
        url:
            'https://picsum.photos/id/1067/300/300',
        title: 'Cityscapes Collection',
        tagTitle: 'Cityscapes',
        tagColour: '#7baab5',
        index: 3,
    },
]
