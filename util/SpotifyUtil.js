const requestUtil = require("./RequestUtil");
const serializeUtil = require("./SerializeUtil");

const spotifyToken = async () =>{
    let url = "https://accounts.spotify.com/api/token";
    let method = "POST";
    let options = { 
        headers:{
        'Accept': 'application/json',
        'Content-type':'application/x-www-form-urlencoded',
        'Authorization':'Basic ' + Buffer.from('667a783d0bc24dfe8e908103172e12a1' + ':'+ 'b8a10b9f9c21468b8d6ee5335246648e').toString('base64')
        }   
    };

    let data = serializeUtil.serialize({grant_type:"client_credentials"});

    return await requestUtil(url,method,options,data);
}
const getTrackByCategory = async (token,category) =>{
    let url = `https://api.spotify.com/v1/browse/categories/${category}/playlists`;
    let method = "GET";
    let options = {
            headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${token}`
            }
    };

    let tracks = await requestUtil(url,method,options);
    let randomIndex = selectRandomItem(tracks["data"]["playlists"]["items"]);
    
    return tracks["data"]["playlists"]["items"][randomIndex]["tracks"]["href"];
}
const selectRandomItem = (items) =>{
    return Math.floor(Math.random() * items.length);
}

const getMusicByTracks = async (trackUrl,token) =>{
    let url = trackUrl;
    let method = "GET";
    let options = {
            headers:{
            'Content-type':'application/json',
            'Authorization':`Bearer ${token}`
            }
    };
    let music = await requestUtil(url,method,options);   
    return selectMusics(music["data"]["items"]);
}

const selectMusics = (items) =>{
    let musics = []
    items.forEach(music =>{
        musics.push(music["track"]["name"]);
    })

    return musics;
}

const getMusicByCategory = async(token,category) =>{
    let tracks = await getTrackByCategory(token,category);
    return await getMusicByTracks(tracks,token);

}

// Função exportada, faz o entry point para as funções que realizam as requests para a API do spotify
exports.getSpotifyMusicByCategory = async (category) =>{
    let token = await spotifyToken();
     let music = await getMusicByCategory(token["data"]["access_token"],category);
     return music;
}