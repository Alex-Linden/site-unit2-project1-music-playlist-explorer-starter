// Assuming you have an array of playlists called "playlists" with playlist objects

function displayRandomPlaylist() {
  // Select a random playlist from the array
  const randomIndex = Math.floor(Math.random() * data.playlists.length);
  const randomPlaylist = data.playlists[randomIndex];

  // Get the "featured-playlist" section element
  const featuredPlaylistSection = document.getElementById("featured-playlist");

  // Create elements to display the playlist details
  const playlistTitle = document.createElement("h2");
  playlistTitle.textContent = randomPlaylist.playlist_name;

  const playlistDescription = document.createElement("p");
  playlistDescription.textContent = randomPlaylist.playlist_creator;

  const playlistImage = document.createElement("img");
  playlistImage.src = randomPlaylist.playlist_art;

  // Clear any existing content in the "featured-playlist" section
  featuredPlaylistSection.innerHTML = "";

  // Append the playlist details to the "featured-playlist" section
  featuredPlaylistSection.appendChild(playlistTitle);
  featuredPlaylistSection.appendChild(playlistDescription);
  featuredPlaylistSection.appendChild(playlistImage);
}

// Example usage:
// Assuming you have an array of playlists called "playlists"
displayRandomPlaylist(playlists);