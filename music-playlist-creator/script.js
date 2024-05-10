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
