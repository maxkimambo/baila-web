export default {
    users : [{
        id: 1,
        name: 'Gloria',
        age: 32, 
        city: 'Berlin', 
        bio: 'I love dancing Salsa, bachata and kizomba... Come on write me up', 
        height: 165,
        location: {
            lat: 53.801277,
            lon: -1.548567
        },
        mainPhoto: "https://randomuser.me/api/portraits/women/11.jpg", 
        additionalPhotos: [], 
        dances: [
            {danceType: 'Salsa', 
             danceLevel: 'Advanced', 
             danceProgress: "90%"
            },
            {
             danceType: 'Bachata', 
             danceLevel: 'Advanced', 
             danceProgress: "80%"
            }, 
            {danceType: 'Kizomba', 
             danceLevel: 'Beginner', 
             danceProgress: "25%"
            }
        ]
    }, 
    {
        id: 2,
        name: 'Marta',
        age: 24, 
        city: 'Hamburg', 
        bio: 'I love dancing Salsa, bachata and kizomba... Come on write me up',
        height: 175,
        location: {
            lat: 53.801277,
            lon: -1.548567
        },
        mainPhoto: "https://randomuser.me/api/portraits/women/56.jpg", 
        additionalPhotos: [], 
        dances: [
            {danceType: 'Salsa', 
             danceLevel: 'Advanced', 
             danceProgress: "90%"
            },
            {
             danceType: 'Bachata', 
             danceLevel: 'Advanced', 
             danceProgress: "80%"
            }, 
            {danceType: 'Kizomba', 
             danceLevel: 'Beginner', 
             danceProgress: "25%"
            }
        ]

    },
    {
        id: 3,
        name: 'Karo',
        age: 25, 
        city: 'Berlin', 
        bio: 'I love dancing Salsa, bachata and kizomba... Come on write me up', 
        height: 165,
        location: {
            lat: 53.801277,
            lon: -1.548567
        },
        mainPhoto: "https://randomuser.me/api/portraits/women/50.jpg", 
        additionalPhotos: [],
        dances: [
            {danceType: 'Salsa', 
             danceLevel: 'Advanced', 
             danceProgress: "90%"
            },
            {
             danceType: 'Bachata', 
             danceLevel: 'Advanced', 
             danceProgress: "80%"
            }, 
            {danceType: 'Kizomba', 
             danceLevel: 'Beginner', 
             danceProgress: "25%"
            }
        ]
    }, 
    {
        id: 4,
        name: 'Stefanie',
        age: 22, 
        city: 'Leipzig', 
        bio: 'I love dancing Salsa, bachata and kizomba... Come on write me up',
        height: 175,
        location: {
            lat: 53.801277,
            lon: -1.548567
        },
        mainPhoto: "https://randomuser.me/api/portraits/women/46.jpg", 
        additionalPhotos: [],
        dances: [
            {danceType: 'Salsa', 
             danceLevel: 'Advanced', 
             danceProgress: "90%"
            },
            {
             danceType: 'Bachata', 
             danceLevel: 'Advanced', 
             danceProgress: "80%"
            }, 
            {danceType: 'Kizomba', 
             danceLevel: 'Beginner', 
             danceProgress: "25%"
            }
        ]
    } 
],
    currentUser: {
        id: 1234, 
        name: 'Max', 
        age: 33, 
        city: 'Berlin', 
        bio: 'This is my short bio', 
        matches: [], 
        rejections: []
    }
}