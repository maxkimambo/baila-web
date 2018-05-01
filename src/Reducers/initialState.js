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
        additionalPhotos: []
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
        additionalPhotos: []
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