document.querySelector('.btn').addEventListener('click', getJoke);

function getJoke(e) {
    e.preventDefault();
    const number = document.querySelector('#number').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        const respones = JSON.parse(this.responseText);
        const list = document.querySelector('.collection');

        // console.log(respones.type);

        let output = '';

        if (respones.type === 'success') {
            // console.log(respones.value);
            respones.value.forEach(joke => {
                // console.log(joke);
                output += `<li class="collection-item"><i class="material-icons">insert_emoticon</i>${joke.joke}</li>`
            });
        } else {
            output += `<li class="collection-item">Something went wrong</li>`
        };

        list.innerHTML = output;

    };



    xhr.send();


}