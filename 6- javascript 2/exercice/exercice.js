// Javascript practices

// Section 1: Object Manipulation
// 1. Create a class representing a movie or TV show with properties like title, genre, release year, and a boolean value indicating if it's a movie or TV show.
// 2. Write a toString method to display the movie or TV show's information in a readable format (e.g., "Title: Inception, Genre: Science Fiction, Release Year: 2010, Type: Movie"). check : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#examples
// 3. Add a method to the movie or TV show object that calculates and returns the number of years since its release.
class Show {
    /**
     * @param {string} title , the title of the show or the movie
     * @param {string} genre, the Genre (exmple comedy, drama...)
     * @param {number} releaseYear the release year of the show
     * @param {boolean} isMovie is it a movie or a tv show
     */
    constructor(title, genre, releaseYear, isMovie = true) {
        this.title = title;
        this.genre = genre;
        this.releaseYear = Number(releaseYear);
        this.isMovie = isMovie;
    }
    toString() {
        return `${this.title}, Genre: ${this.genre}, Release year: ${this.releaseYear}, Type: ${
            this.isMovie ? "Movie" : "Tv show"
        }`;
    }
    sinceRelease() {
        return 2023 - this.releaseYear;
    }
}

// Section 2: Array Operations
// 1. Create an array of movie or TV show objects, each representing a different movie or show with properties like title, genre, and release year.
var shows = [
    new Show("Inception", "Science Fiction", 2010),
    new Show("The Lord of the Rings", "Fantasy", 2001),
    new Show("Stranger Things", "Science Fiction", 2016, false),
    new Show("The Avengers", "Action", 2012),
    new Show("Friends", "Comedy", 1994, false),
    new Show("The Dark Knight", "Action", 2008),
    new Show("Game of Thrones", "Fantasy", 2011, false),
    new Show("Pulp Fiction", "Crime", 1994),
    new Show("The Office", "Comedy", 2005, false),
    new Show("Interstellar", "Science Fiction", 2014),
    new Show("Sherlock", "Crime", 2010, false),
    new Show("The Shawshank Redemption", "Drama", 1994),
    new Show("Black Mirror", "Science Fiction", 2011, false),
    new Show("The Matrix", "Science Fiction", 1999),
    new Show("Mindhunter", "Crime", 2017, false),
    new Show("Gladiator", "Action", 2000),
    new Show("The Crown", "Drama", 2016, false),
    new Show("The Prestige", "Drama", 2006),
    new Show("Westworld", "Science Fiction", 2016, false),
    new Show("The Godfather", "Crime", 1972),
    new Show("Fargo", "Crime", 2014, false),
    new Show("Fight Club", "Drama", 1999),
    new Show("The Witcher", "Fantasy", 2019, false),
    new Show("Forrest Gump", "Drama", 1994),
    new Show("Chernobyl", "Drama", 2019, false),
    new Show("Avatar", "Science Fiction", 2009),
    new Show("The Mandalorian", "Science Fiction", 2019, false),
    new Show("The Green Mile", "Drama", 1999),
    new Show("The Great Gatsby", "Drama", 2013),
    new Show("The Big Bang Theory", "Comedy", 2007, false),
    new Show("The Witch", "Horror", 2015),
    new Show("Black Panther", "Action", 2018),
    new Show("House of Cards", "Drama", 2013, false),
    new Show("The Godfather Part II", "Crime", 1974),
    new Show("The Haunting of Hill House", "Horror", 2018, false),
    new Show("The Shawshank Redemption", "Drama", 1994),
    new Show("The Umbrella Academy", "Science Fiction", 2019, false),
    new Show("The Dark Knight Rises", "Action", 2012),
    new Show("The Walking Dead", "Horror", 2010, false),
    new Show("Inglourious Basterds", "War", 2009),
    new Show("The Crown", "Drama", 2016, false),
    new Show("Braveheart", "Drama", 1995),
    new Show("Breaking Bad", "Drama", 2008, false),
    new Show("Gladiator", "Action", 2000),
    new Show("The Mandalorian", "Science Fiction", 2019, false),
    new Show("Forrest Gump", "Drama", 1994),
    new Show("Narcos", "Crime", 2015, false),
    new Show("The Godfather Part III", "Crime", 1990),
    new Show("The Prestige", "Drama", 2006),
    new Show("Mr. Robot", "Drama", 2015, false),
    new Show("Schindler's List", "Drama", 1993),
];
// 2. Write a function to find the average release year.
/**
 * @description a function that finds the average release year of a Show array.
 * @param {Show[]} shows
 */
function AverageReleaseYear(shows) {
    return Math.floor(shows.reduce((acc, elm) => acc + elm.releaseYear, 0) / shows.length);
}
console.log("🎥 ~ Average Release Year: ", AverageReleaseYear(shows));
// 3. Write a function that takes the array and returns a new array with only the years of movies (boolean value indicating it's a movie should be true).
/**
 * @description returns a new array with only the years of movies
 * @param {Show[]} shows
 */
function MoviesYears(shows) {
    return shows.filter((show) => show.isMovie).map((movie) => movie.releaseYear);
}
console.log("📽️ ~ Movies Years: ", MoviesYears(shows));

// 4. Write a function that checks if a given genre exists in the array.
/**
 * @description checks if a given genre exists in the array.
 * @param {Show[]} shows
 * @param {string} genre
 */
function GenreExist(shows, genre) {
    return shows.findIndex((show) => show.genre === genre) >= 0;
}
console.log("🚀 ~ If Genre Exist: ", GenreExist(shows, "Comedy"));

// 5. Write a function that takes the array of movies and shows and returns an array containing only the titles of TV shows.
/**
 * @description Return an array containing only the titles of TV shows.
 * @param {Show[]} shows
 */
function TvShowTitles(shows) {
    return shows.filter((show) => !show.isMovie).map((movie) => movie.title);
}

console.log("📺 ~ Tv Show Titles: ", TvShowTitles(shows));
// 6. Write a function that finds all movies in the array with a specific genre.
/**
 * @description finds all movies in the array with a specific genre.
 * @param {Show[]} shows
 * @param {string} genre
 */
var MoviesWithGenre = (shows, genre) => {
    return shows.filter((show) => show.isMovie && show.genre.toLocaleLowerCase() === genre.toLocaleLowerCase());
};
var genre = "Science Fiction";
console.log(
    "🚀 ~ Movies With Genre: ",
    genre,
    /* "\n- ", */
    MoviesWithGenre(shows, genre)
    /* .map((movie) => `${movie}`)
        .join("\n- ") */
);
// Section 3: Basic Manipulations

// 1. Write a function that takes a movie or TV show title as input and returns the title without spaces and all letters in lowercase.
//    (e.g., "The Lord of the Rings" should become "thelordoftherings").
/**
 * @description Returns the title without spaces and all letters in lowercase.
 * @param {string} title
 */
function NoSpaceShow(title) {
    return title.split(" ").join("").toLocaleLowerCase();
}

var movieIndex = 1;
console.log("🎬 ~ No Space Show:", shows[movieIndex].title, NoSpaceShow(shows[movieIndex].title));

// 2. Write a function that returns the longest title in the arrays.
/**
 * @description Returns the longest title in the arrays.
 * @param {Show[]} shows
 */
function LongestTitle(shows) {
    var max = shows[0].title;
    shows.forEach((show) => {
        if (show.title.length > max.length) max = show.title;
    });
    return max;
}
console.log("📏 ~ The Longest Title :", LongestTitle(shows));

// 3. Write a function that takes a movie or TV show title as input and returns the number of words in the title.
/**
 * @description Returns the number of words in the title.
 * @param {string} title
 */
function NumberOfWords(title) {
    return title.split(" ").length;
}

var movieIndex2 = 1;
console.log("🔢 ~ Number Of Words in the title :", shows[movieIndex2].title, NumberOfWords(shows[movieIndex2].title));
