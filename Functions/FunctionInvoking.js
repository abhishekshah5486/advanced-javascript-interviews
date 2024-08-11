// 4 different ways to invoke a function in js

// Invoking a function as a fn (Regular function call)
const getSongDetails = () => {
    return {
        title: "Shape of You",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        year: 2017,
        genre: "Pop",
        duration: "3:53",
        trackNumber: 4,
        isFavorite: true
    };
}

const songDetails = getSongDetails();
console.log(songDetails);

// Invoking a function as a method
const song = {
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: 'pop',
    getGenre: function(){
        console.log(`${this.title} belongs to ${this.genre} genre.`);
    },
    getSongTitle: function(){
        console.log(`${this.title}`);
    }
}

song.getSongTitle();