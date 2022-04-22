// manage cookie policy
const url = `http://127.0.0.1:3002`; // mockoon base url
const cookiePolicy = document.querySelector('.cookie-policy');

cookiePolicy.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault();
    cookiePolicy.classList.add('hidden');
});

// Ajax Like
function doFetch(event) {
    event.preventDefault();
    const {classList} = event.target;
    const api = classList && classList.contains('liked') ? 'no-like' : 'like';
    fetch(`${url}/${api}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            event.target.classList.toggle('liked', json.like);
        });
}

const ajaxElements = document.querySelectorAll('.article--like');
ajaxElements.forEach(function(element) {
    element.addEventListener('click', doFetch);
});
