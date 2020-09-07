const spotifyUtil = require("./SpotifyUtil")

exports.getMusicByCategory = async (category) =>{
    return await spotifyUtil.getSpotifyMusicByCategory(category);
}