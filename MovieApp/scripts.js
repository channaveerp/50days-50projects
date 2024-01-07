const API_KEY = 'api_key=17bc57b7820c6d42188bdca220db8c1f';
// urls
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/original';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;

// get main div here:
const mainDiv = document.getElementById('main');
// search movie
const search = document.getElementById('search');
const form = document.getElementById('form');

// get api call here
getMovie(API_URL);

function getMovie(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, 'data');
      showData(data.results);
    })
    .catch((error) => {
        console.error('Error fetching movie data:', error);
        // Handle the error here, e.g., display an error message to the user
        mainDiv.innerHTML = '<p>Error fetching movie data. Please try again later.</p>';
      });
}

function showData(data) {
  mainDiv.innerHTML = '';
  data.forEach((movie) => {
    const { title, poster_path, overview, vote_average } = movie;
    const MovieDiv = document.createElement('div');
    MovieDiv.classList.add('movie');
    MovieDiv.innerHTML = `
    <img
          src="${IMG_URL + poster_path}"
          alt="${title}"
        />
        <!-- info -->
        <div class="movieInfo">
          <h3>${title}</h3>
          <span class="green">${vote_average}</span>
        </div>
        <!-- overview -->
        <div class="overview">
          <h3>Overview</h3>
        ${overview}
        </div>`;
    mainDiv.appendChild(MovieDiv);
  });
}

function getColor(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

const messageDiv = document.getElementById('message');

form.addEventListener('input', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  console.log('searchTerm:', searchTerm);

  if (searchTerm) {
    getMovie(SEARCH_URL + '&query=' + searchTerm);
  } else {
    getMovie(API_URL);
  }
});
