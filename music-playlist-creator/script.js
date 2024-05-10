function createPlaylistCards() {
  console.log(data);
  // Get the playlist-cards container
  let playlistCardsContainer = document.querySelector('.playlist-cards');

  // Iterate over the data.playlists array
  data.playlists.forEach(function(playlist) {
    console.log(playlist);
    // Create a card element
    let card = document.createElement('div');
    card.classList.add('card');

    // Create an image element for the cover image
    let coverImage = document.createElement('img');
    coverImage.classList.add('card-img-top');
    coverImage.src = playlist.playlist_art;

    // Create a card body element
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Create a heading element for the playlist name
    let playlistName = document.createElement('h5');
    playlistName.classList.add('card-title');
    playlistName.textContent = playlist.playlist_name;

    // Create a paragraph element for the playlist creator
    let playlistCreator = document.createElement('p');
    playlistCreator.classList.add('card-text');
    playlistCreator.textContent = 'Created by: ' + playlist.playlist_creator;

    // Create a paragraph element for the like count
    let likeCount = document.createElement('p');
    likeCount.classList.add('card-text');
    likeCount.textContent = 'Likes: ' + playlist.likeCount;

    // Append the elements to the card body
    cardBody.appendChild(playlistName);
    cardBody.appendChild(playlistCreator);
    cardBody.appendChild(likeCount);

    // Append the cover image and card body to the card
    card.appendChild(coverImage);
    card.appendChild(cardBody);

    // Append the card to the playlist-cards container
    playlistCardsContainer.appendChild(card);
  });
}

createPlaylistCards();

function populateModal(playlist) {
  // Get the modal overlay element
  let modalOverlay = document.querySelector('.modal-overlay');
  // Clear the existing content
  modalOverlay.innerHTML = '';

  // Create a container for the playlist details
  let playlistDetailsContainer = document.createElement('div');
  playlistDetailsContainer.classList.add('modal-content');

  // Create an image element for the cover image
  let coverImage = document.createElement('img');
  coverImage.classList.add('playlist-cover');
  coverImage.src = playlist.playlist_art;
  playlistDetailsContainer.appendChild(coverImage);

  // Create a heading element for the playlist name
  let playlistName = document.createElement('h2');
  playlistName.classList.add('playlist-name');
  playlistName.textContent = playlist.playlist_name;
  playlistDetailsContainer.appendChild(playlistName);

  // Create a paragraph element for the playlist creator
  let playlistCreator = document.createElement('p');
  playlistCreator.classList.add('playlist-creator');
  playlistCreator.textContent = 'Created by: ' + playlist.playlist_creator;
  playlistDetailsContainer.appendChild(playlistCreator);

  // Create a list element for the songs
  let songsList = document.createElement('ul');
  songsList.classList.add('songs-list');
  playlist.songs.forEach(function(song) {
    // Create a list item for each song
    let songItem = document.createElement('li');
    songItem.classList.add('song-item');

    // Create a span element for the song title
    let songTitle = document.createElement('span');
    songTitle.classList.add('song-title');
    songTitle.textContent = song.title;
    songItem.appendChild(songTitle);

    // Create a span element for the song artist
    let songArtist = document.createElement('span');
    songArtist.classList.add('song-artist');
    songArtist.textContent = ' by ' + song.artist;
    songItem.appendChild(songArtist);

    // Create a span element for the song duration
    let songDuration = document.createElement('span');
    songDuration.classList.add('song-duration');
    songDuration.textContent = ' (' + song.duration + ')';
    songItem.appendChild(songDuration);

    songsList.appendChild(songItem);
  });
  playlistDetailsContainer.appendChild(songsList);

  // Append the playlist details container to the modal overlay
  modalOverlay.appendChild(playlistDetailsContainer);
}

// Add event listeners to each playlist card
let playlistCards = document.querySelectorAll('.card');
playlistCards.forEach(function(card) {
  card.addEventListener('click', function() {
    // Get the index of the clicked card
    let index = Array.from(playlistCards).indexOf(card);
    // Get the corresponding playlist from the data
    let playlist = data.playlists[index];
    // Call the populateModal function with the playlist
    populateModal(playlist);
    // Show the modal overlay
    document.querySelector('.modal-overlay').classList.add('show');
  });
});

// Add event listener to the modal overlay
document.querySelector('.modal-overlay').addEventListener('click', function(event) {
  // Check if the clicked element is the overlay itself
  if (event.target === this) {
    // Hide the modal overlay
    this.classList.remove('show');
  }
});