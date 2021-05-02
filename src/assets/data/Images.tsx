import collection from './ImageDataStructure'
import { v4 as uuid } from 'uuid'

export const home: collection[] = [
    {
        key: 'befee15c-c770-4450-b71f-f20f820b3549',
        // url:
        //     'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
        title: 'Nature Collection',
        tagTitle: 'Nature',
        tagColour: '#47742c',
        index: 0,

        images: [
            {
                key: '9b0ba98c-f06b-443b-a96a-e480bafe3b84',
                url: 'https://picsum.photos/id/1018/800',
                title: 'Nature',
                index: 0,
            },
        ],
    },

    {
        key: '16bdf4fe-692d-4e11-8fd4-9ea37e3fc34d',
        // url:
        //     'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs',
        title: 'Urban Collection',
        tagTitle: 'Urban',
        index: 1,

        images: [
            {
                key: 'e60e7a56-6ac5-4a81-b9df-d8e4f5d754b6',
                url: 'https://picsum.photos/id/101/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },

    {
        key: '2c615617-6372-4042-bce5-a97910a51b5a',
        // url:
        //     'https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII',
        title: 'Animal Collection',
        tagTitle: 'Nature',
        tagColour: '',
        index: 2,

        images: [
            {
                key: 'bb8c95bf-be11-4fcd-a6a1-376db689bf93',
                url: 'https://picsum.photos/id/1024/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },

    {
        key: '3961f578-14ea-46aa-9b74-7f908fcd532b',
        // url:
        //     'https://i.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ',
        title: 'Mechanical Collection',
        tagTitle: 'Technology',
        tagColour: '#50b1d6',
        index: 3,

        images: [
            {
                key: '7215bc0b-d866-496c-8b8a-c0022d9391ef',
                url: 'https://picsum.photos/id/111/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },

    {
        key: '37f92b19-2ea1-4742-b97b-81ed97e2e9c3',
        // url:
        //     'https://i.picsum.photos/id/158/4836/3224.jpg?hmac=Gu_3j3HxZgR74iw1sV0wcwlnSZSeCi7zDWLcjblOp_c',
        title: 'Party Collection',
        index: 4,

        images: [
            {
                key: '65fcf4f0-cc44-4c1c-86f9-9a14c8dcaea2',
                url: 'https://picsum.photos/id/158/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },
    {
        key: '6dcdba12-f48c-46cf-b1f6-07e8d1c5ed2b',
        // url:
        //     'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg',
        title: 'Second Nature Collection',
        index: 5,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1018/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },

    {
        key: uuid(),
        // url:
        //     'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs',
        title: 'Second Urban Collection',
        index: 6,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/101/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },

    {
        key: uuid(),
        // url:
        //     'https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII',
        title: 'Second Animal Collection',
        index: 7,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1024/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },

    {
        key: uuid(),
        // url:
        //     'https://i.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ',
        title: 'Second Mechanical Collection',
        index: 8,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/111/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },

    {
        key: uuid(),
        // url:
        //     'https://i.picsum.photos/id/158/4836/3224.jpg?hmac=Gu_3j3HxZgR74iw1sV0wcwlnSZSeCi7zDWLcjblOp_c',
        title: 'Second Party Collection',
        index: 9,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/158/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },
    {
        key: uuid(),
        // url:
        //     'https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA',
        title: 'Wedding Collection',
        index: 10,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1013/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },
    {
        key: uuid(),
        // url:
        //     'https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU',
        title: 'Sport Collection',
        index: 11,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1023/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },
    {
        key: uuid(),
        // url:
        //     'https://i.picsum.photos/id/375/5184/3456.jpg?hmac=3OUWWnSmq1CUXU7cmTnctSvhQYvyME_osftkbJynX04',
        title: 'People Collection',
        index: 12,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/375/200',
                title: 'Nature',
                index: 0,
            },
        ],
    },
]

export const natureImages: collection[] = [
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
                url: 'https://picsum.photos/id/1003/500',
                title: 'Deer',
                index: 0,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1020/500',
                title: 'Bear & Cub',
                index: 1,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1024/500',
                title: 'Buzzard',
                index: 2,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1025/500',
                title: 'Pug',
                index: 3,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1074/500',
                title: 'Lion',
                index: 4,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/1084/500',
                title: 'Walrus',
                index: 5,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/169/500',
                title: 'Dogs',
                index: 6,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/200/500',
                title: 'Moo Cow',
                index: 7,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/237/500',
                title: 'Dog',
                index: 8,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/244/500',
                title: 'Heron',
                index: 9,
            },
        ],
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
                url: 'https://picsum.photos/id/256/500',
                title: 'Landscape #1',
                index: 0,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/261/500',
                title: 'Sand',
                index: 1,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/277/500',
                title: 'Grass',
                index: 2,
            },
        ],
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
                url: 'https://picsum.photos/id/1004/500',
                title: 'People',
                index: 0,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/336/500',
                title: 'Locks',
                index: 1,
            },
        ],
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
                url: 'https://picsum.photos/id/328/500',
                title: 'Skiing',
                index: 0,
            },
            {
                key: uuid(),
                url: 'https://picsum.photos/id/386/500',
                title: 'Hiking',
                index: 1,
            },
        ],
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
                url: 'https://picsum.photos/id/158/500',
                title: 'Party',
                index: 0,
            },
        ],
    },
]

export const urbanImages: collection[] = [
    {
        key: '20716a73-c26a-41b1-b309-93f219f14bd2',
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
        ],
    },

    {
        key: '7216f8b0-55eb-4a2c-949c-e46948ecb1d8',
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
        ],
    },

    {
        key: 'af28d1d2-fcd7-4138-9090-a0e6ac2a38fe',
        titleImage: 2,
        title: 'Historic Building Collection',
        tagTitle: 'Architecture',
        tagColour: '#5f5f5f',
        index: 2,

        images: [
            {
                key: uuid(),
                url: 'https://picsum.photos/id/122/300/300',
                title: "Looks a little like London, but fairly sure it isn't",
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
        ],
    },

    {
        key: '5e5e0130-cd61-43b1-9275-0020dba39cc7',
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
        ],
    },
]

// this is temporary and will be replaced with a more robust API
export function findImageById(id: string) {
    for (var i = 0; i < natureImages.length; i++) {
        const collection = natureImages[i].images
        for (var j = 0; collection && collection.length > j; j++) {
            console.log(collection[j].key + " : " + id)

            if (id === collection[j].key) return collection[j]
        }
    }
    for (var k = 0; k < home.length; k++) {
        const collection = home[k].images
        for (var l = 0; collection && collection.length < l; l++) {
            if (id === collection[l].key) return collection[l]
        }
    }

    for (var m = 0; m < urbanImages.length; m++) {
        const collection = urbanImages[m].images
        for (var n = 0; collection && collection.length < n; n++) {
            if (id === collection[n].key) return collection[n]
        }
    }
}

export function findCollectionById(id: string) {
    for (var i = 0; i < natureImages.length; i++) {
        const collection = natureImages[i]
        if (id === collection.key) return collection
    }
    for (var k = 0; k < urbanImages.length; k++) {
        const collection = urbanImages[k]
        if (id === collection.key) return collection
    }
    for (var m = 0; m < home.length; m++) {
        const collection = home[m]
        if (id === collection.key) return collection
    }
}