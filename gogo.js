const words = {
    first: ["Jingles", "Holly", "Kringle", "Buddy", "Snowflake", "Twinkle", "Ginger", "Trixie", "Noel", "Tinsel", "Winter", "Rudy"],
    middle: ["the merry", "the playful", "the frosty", "the festive", "the jolly", "the little", "the snowy", "the nice", "the glittery", "the sparkly", "the joyvial", "the lively"],
    end: ["Angel", "Evergreen", "Ornament", "Tinsel", "Cookie", "Snowman", "Gumdrop", "Sleigh bells", "Cupcake", "Reindeer", "Candy cane", "Garland"]
}


//Generate random word from element of words along the parameter
function randomWords(threeFrom) {
    const numFromWords = Math.floor((Math.random() * threeFrom.length));
    return threeFrom[numFromWords];
};

