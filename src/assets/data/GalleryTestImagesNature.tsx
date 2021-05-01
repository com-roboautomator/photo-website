import Collection from "./ImageDataStructure";
import { v4 as uuid } from 'uuid'

export const natureImages: Collection[] = [
    {
        key: '017a317f-8285-4cfb-a4e7-668d85721b76',
        title: 'Animal Collection',
        titleImage: 0,
        tagTitle: 'Nature',
        tagColour: '#47742c',
        index: 0,

        images: [
            {
                key: uuid(),
                url: "https://picsum.photos/id/1003/500",
                title: "Deer",
                index: 0
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/1020/500",
                title: "Bear & Cub",
                index: 1
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/1024/500",
                title: "Buzzard",
                index: 2
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/1025/500",
                title: "Pug",
                index: 3
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/1074/500",
                title: "Lion",
                index: 4
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/1084/500",
                title: "Walrus",
                index: 5
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/169/500",
                title: "Dogs",
                index: 6
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/200/500",
                title: "Moo Cow",
                index: 7
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/237/500",
                title: "Dog",
                index: 8
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/244/500",
                title: "Heron",
                index: 9
            },

        ]
    },

    {
        key: 'b97bf8c2-6ab5-45e5-b363-dace717b8ed5',
        title: 'Landscape Collection',
        titleImage: 1,
        tagTitle: 'Nature',
        tagColour: '#47742c',
        index: 1,

        images: [
            {
                key: uuid(),
                url: "https://picsum.photos/id/256/500",
                title: "Landscape #1",
                index: 0
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/261/500",
                title: "Sand",
                index: 1
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/277/500",
                title: "Grass",
                index: 2
            },
        ]
    },

    {
        key: '12352dd6-255c-4e38-9230-a96723bf9c5d',
        title: 'Romance Collection',
        tagTitle: 'Life',
        tagColour: '#7baab5',
        index: 2,

        images: [
            {
                key: uuid(),
                url: "https://picsum.photos/id/1004/500",
                title: "People",
                index: 0
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/336/500",
                title: "Locks",
                index: 1
            },
        ]
    },

    {
        key: 'ffdf5e29-408c-44e9-a453-78ba0adb91f5',
        title: 'Extreme Sporting Collection',
        tagTitle: 'Life',
        tagColour: '#7baab5',
        index: 3,

        images: [

            {
                key: uuid(),
                url: "https://picsum.photos/id/328/500",
                title: "Skiing",
                index: 0
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/386/500",
                title: "Hiking",
                index: 1
            },

        ]
    },

    {
        key: 'a2cb8bb1-0d7e-445d-b977-be97c616aed3',
        title: 'Party Collection',
        tagTitle: 'Life',
        tagColour: '#7baab5',
        index: 4,

        images: [
            {
                key: uuid(),
                url: "https://picsum.photos/id/158/500",
                title: "Party",
                index: 0
            },
            {
                key: uuid(),
                url: "https://picsum.photos/id/390/500",
                title: "Jumping",
                index: 1
            },
        ]
    },

]
