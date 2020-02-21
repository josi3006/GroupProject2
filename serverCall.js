const moodID = require('members.js');



var accessToken = "BQCDRaMP-_7-2emzzcDWYM5cHLtJvD3M9bzlQMflIuAy9vfphi7WW7hQ0u9C2Fw3nOz2pmNKGEz41INlppk";
const fetch = require('node-fetch');



fetch('https://api.spotify.com/v1/users/spotify/playlists/37i9dQZF1DWVxpHBekDUXK/tracks', {

    method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
    }
})
    .then((response) => {
        console.log(response.json().then(
            (data) => {

                var external_urls = [];
                var song_Names = [];
                var playlist_Obj = {};




                // This code pushes track URLs into an array

                for (var i = 0; i < data.tracks.items.length; i++) {
                    console.log(data.tracks.items[i].track.external_urls.spotify);
                    external_urls.push(data.tracks.items[i].track.external_urls.spotify);
                }



                // This code pushes track names into an array

                for (var i = 0; i < data.tracks.items.length; i++) {
                    console.log(data.tracks.items[i].track.name);
                    song_Names.push(data.tracks.items[i].track.name);
                }


                // This code creates an object made up of 

                var lengthPlaylist = song_Names.length;
                for (var i = 0; i < lengthPlaylist; i++) {
                    playlist_Obj[song_Names[i]] = external_urls[i];
                }



                console.log(playlist_Obj);

            }
        ));
    });
