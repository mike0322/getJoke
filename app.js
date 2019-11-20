document.querySelector('.getjoke').addEventListener('click', getJoke);

function getJoke(e) {
    e.preventDefault();

    const number = document.querySelector('#number').value

    const xhr = new XMLHttpRequest();

    xhr.open('get', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {

        const list = document.querySelector('.jokeList');

        if (xhr.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if (response.type === 'success') {



                response.value.forEach(joke => {
                    output += `<li class="collection-item"> <i class="small material-icons">tag_faces</i>${joke.joke}</li>`
                });
            } else {
                output += `something went wrong!!`
            };

            list.innerHTML = output;
        };
    };

    xhr.send();
}