function fetchSimpsonJSON() {
  const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
  axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .then(function (simpson) {
      const simpsonHtml = `
        <h3><strong>${simpson[0].character}</strong></h3>
        <img src="${simpson[0].image}" />
        <p>${simpson[0].quote}</p>
      `;
      document.querySelector('#Simpson').innerHTML = simpsonHtml;
    });
}

fetchSimpsonJSON();

document.getElementById('myBtn').addEventListener('click', function () {
  fetchSimpsonJSON();
});
