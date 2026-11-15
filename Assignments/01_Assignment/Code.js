// Assignment 1
// A GPS survey produced geographic coordinates. Validate each pair and convert valid coordi-
// nates into a human-readable format.


// Task 1:
// - Create two parallel arrays containing latitudes and longitudes for at least 10 locations.
// - Implement a function named isValidCoordinate(lat, lon): lat is a number and must be within −90 to 90 and lon is a number within −180 to 180, inclusive.

// first creating two arrays with values representing long/lat. Currently system doesn't know that these are coordinates, for it they're jsut values.
// for random locations i asked ChatGPT the following: "give me 10 locations from around the world with longitude and latitude"
// random locations from ChatGPT: "Eiffel Tower, Statue of Liberty, Great Wall of China, Taj Mahal, Pyramids of Giza, Sydney Opera House, Christ the Redeemer, Colosseum, Mount Fuji, Burj Khalifa"
const latitudes = [48.8584, 40.6892, 40.4319, 27.1751, 29.9792, -33.8568, -22.9519, 41.8902, 35.3606, 25.1972];
const longitudes = [2.2945, -74.0445, 116.5704, 78.0421, 31.1342, 151.2153, -43.2105, 12.4922, 138.7274, 55.2744];


// creating the function isValidCoordinate(lat, long)
// use const to check if value is finite number -> const instead let because never changes in same function
function isValidCoordinate(lat, long) {
    const latIsNumber = Number.isFinite(lat);
    const longIsNumber = Number.isFinite(long);
// first lat/longIsNumber outputs boolean (true/false)
// second check if values are inbetween boundaries -> use of <=/>= to include outer bounds 
    if (latIsNumber && lat >= -90 && lat <= 90 && longIsNumber && long >= -180 && long <= 180) {
// if real number and inside bounds function returns true
        return true;
// if one of condition is not met function returns false
    } else {
        return false;
    }
}

// test for the whole array like in class
for (let i = 0; i < latitudes.length; i++) {
    console.log(i, latitudes[i], longitudes[i], isValidCoordinate(latitudes[i], longitudes[i]));
}

// Task 2:
// - Implement a function named decimalToDMS(value) to convert decimal degrees to degrees, minutes and seconds (like this https://applications.pgc.umn.edu/convert/)

function decimalToDMS(decimalDegrees) {
    // check if the input is a finite number
    if (!Number.isFinite(decimalDegrees)){
        return "Not a valid input";
    }
    // possible decimal Degrees can be negative (-) but for calcualtions degrees, minutes and second are always needed in positive
    // first step is to store sign
    let sign;
    if (decimalDegrees < 0 ) {
        sign = "-";
    } else {
        sign = "";
    }
    // Math.abs() removes the sign --> calculated without this step in beginning and negative values gave had double minus sign
    const absDegree = Math.abs(decimalDegrees);
    // the degree can be taken from the original decimal degrees -> Math.floor() removes decimals
    // the rest of decimal degree is used to calculate minutes and seconds
    let degrees = Math.floor(absDegree);
    // decimal minutes uses rest x 60 because 1 degree has 60 minutes
    const decimalMin = (absDegree - degrees) * 60;
    let min = Math.floor(decimalMin);
    // use leftovers from minutes for second and round it to 2 decimals
    // Number() for making sure sec-output is number and not text
    let sec = Number(((decimalMin - min) * 60).toFixed(2))
    // to make sure 60 means +1 value higher -> 60 seconds = 1 min
    // check seconds first, because min could therefore become also 60
    // set value to 0, so no "multi-use" of same values
    if (sec === 60) {
        sec = 0;
        min =  min + 1;
    }
    if (min === 60) {
        min = 0;
        degrees = degrees + 1;
    }
    

    // return the single values as an usable output
    return sign + degrees + "° " + min + "' " + sec.toFixed(2) + '"';
}

// Test with node.js in VS-Code Terminal
console.log(decimalToDMS(-42.021))



// Task 3:
// - Implement a function named countValidCoordinates(latitudes, longitudes) to count the number of valid coordinates in the list. Use your function from Task 1.





// Task 4:
// - Use loops and your function from Task 1 to print valid coordinates in decimal and DMS forms