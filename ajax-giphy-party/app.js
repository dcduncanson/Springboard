//console.log("Let's get this party started!");
const $gifs = $('#gifs');
const $input = $('#search');
const $clear = $('#clear');

const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';


function addGif(res) {
    let gifResults = res.data.length;
    const randomGif = Math.floor(Math.random() * gifResults);
    let newGif = $('<img>', { src: res.data[randomGif].images.original.url });
    $gifs.append(newGif);
}

$('form').on('submit', async function (evt) {
    evt.preventDefault();

    const input = $input.val();
    $input.val("");

    const response = await axios.get('http://api.giphy.com/v1/gifs/search',
        {
            params: { q: input, api_key: apiKey }
        });
    addGif(response.data);
});

$clear.on('click', function () {
    $gifs.empty();
});