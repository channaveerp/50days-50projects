const searchInput = document.getElementById('searchput');
const dataTable = document.getElementById('data-table');
searchInput.addEventListener('change', initializeSearch);

let originalData;

async function fetchData() {
  originalData = await fetch('https://fakestoreapi.com/products');
  originalData = await originalData.json();
  console.log('userData', originalData);
  showdata(originalData);
}
fetchData();

function initializeSearch(event) {
  let inpuValue = event.target.value.toLowerCase();
  let filterData = originalData.filter((item) =>
    item.title.toLowerCase().includes(inpuValue)
  );
  showdata(filterData);
  console.log('filterData', filterData);
}

function showdata(data) {
  dataTable.innerHTML = '';

  const mainDiv = document.createElement('div');
  if (data.length === 0) {
    noResult = document.createElement('div');
    noResult.innerText = 'No results found';
    mainDiv.appendChild(noResult);
  } else {
    data.forEach((item) => {
      const titleDiv = document.createElement('div');
      titleDiv.innerText = item.title;
      mainDiv.appendChild(titleDiv);
    });
  }
  dataTable.appendChild(mainDiv);
}
