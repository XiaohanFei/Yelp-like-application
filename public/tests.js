window.onload = () => {
    console.log(window.location.href);
    let hostname = new URL(window.location.href).hostname;
    // let username = hostname.split('.')[0];
    let username = "xiaohanfei";
    console.log(username);
    let iframe = document.getElementById('myApplicationFrame');
    let imagequiz_frontend = `https://${username}.github.io/findnearbyplaces/`;
    //iframe.setAttribute('src', imagequiz_frontend);
    let p = document.getElementById("goToWebsite");
    p.innerHTML += `<h2>****************************************************************************************</h2>`;
    p.innerHTML += `The findnearbyplaces front-end will be available at <a href="${imagequiz_frontend}">${imagequiz_frontend}</a>`;


    // get the current location
    let currentPosition = {};
    let getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML += "Geolocation is not supported by this browser.";
        }
    }
    let showPosition = (position) => {
        currentPosition = position.coords;
        p.innerHTML += `<br>Current location:<br>Latitude:  ${position.coords.latitude} <br>Longitude:  ${position.coords.longitude}`;

    }
    getLocation();



    // test the API
    let names = ['Fred', 'John', 'Philip', 'Pablo', 'Toby', 'Rio'];
    let categories = ['Flower Shop', 'Flower Delivery', 'Flowers and Gifts', 'Horse Riding', 'Horse Racing', 'Horse Boarding'];
    let places = ['Lily', 'Saddle', 'Casas', 'Buds', 'Bloom', 'Yosi'];

    let random = Math.floor(Math.random() * names.length);
    let api = `https://${username}-findnearbyplaces.herokuapp.com`;
    // let api = `http://localhost:3000`;
    let firstname = names[random];
    let email = firstname + '@gmail.com';
    let password = "123";
    let category = categories[random];
    let place = places[random];
    let latitude = 32.222607 + random;
    let longitude = -110.974709 + random;
    let description = 'Family-owned and operated.';

    let customerId = -1;
    let categoryId = -1;
    let placeId = -1;
    let reviewId = -1;

    let testDiv = document.getElementById('test-the-api');
    testDiv.innerHTML += `<h2>****************************************************************************************</h2>`;
    testDiv.innerHTML += `<h2>Testing the API at ${api} ...</h2>`;

    fetch(`${api}/customer`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>The customer ${email} registered successfully.</h2>`;
                customerId = x.id;
            } else {
                testDiv.innerHTML += `<h2>
            The customer could not be added to the system.
            There was an error on the server: ${x.message}            
            </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in /customer method: ${e}</h2>`)
        .then(() => fetch(`${api}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }))
        .then(x => x.json())
        .then(x => testDiv.innerHTML += (x.done ? `<h2>The customer ${email} logged in successfully.</h2>` :
            `<h2>The provided credentials are invalid.</h2>`))
        .catch(e => testDiv.innerHTML += `<h2>Error in /login method: ${e}</h2>`)
        .then(() => fetch(`${api}/category`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: category
            })
        }))
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>
                The category ${category} was added successfully.
                The category id is ${x.id}.
                </h2>`;
                categoryId = x.id;
            } else {
                testDiv.innerHTML += `<h2>
                The category could not be added to the system.
                There was an error on the server: ${x.message}            
                </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in /category method: ${e}</h2>`)
        .then(() => fetch(`${api}/place`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: category,
                category_id: categoryId,
                latitude: latitude,
                longitude: longitude,
                description: description
            })
        }))
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>
                The place ${place} was added successfully.
                The place id is ${x.id}.
                </h2>`;
                placeId = x.id;
            } else {
                testDiv.innerHTML += `<h2>
                The place could not be added to the system.
                There was an error on the server: ${x.message}            
                </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in /place method: ${e}</h2>`)
        .then(() => fetch(`${api}/review`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                place_id: placeId, comment: 'good!', rating: 4
            })
        }))
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>
                A review for ${place} with a rating of 4 was added successfully.
                The review id is ${x.id}.
                </h2>`;
                reviewId = x.id;
            } else {
                testDiv.innerHTML += `<h2>
                The review could not be added to the system.
                There was an error on the server: ${x.message}            
                </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in first /review method: ${e}</h2>`)
        .then(() => fetch(`${api}/review`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                place_id: placeId, comment: 'very good!', rating: 5
            })
        }))
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>
                A review for ${place} with a rating of 5 was added successfully.
                The review id is ${x.id}.
                </h2>`;
                reviewId = x.id;
            } else {
                testDiv.innerHTML += `<h2>
                The review could not be added to the system.
                There was an error on the server: ${x.message}            
                </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in second /review method: ${e}</h2>`)
        .then(() => fetch(`${api}/search?search_term=${place}&user_location=${currentPosition.latitude},${currentPosition.longitude}`,
        ))
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>
                For the query search_term=${place}&user_location=${currentPosition.latitude},${currentPosition.longitude}
                the seach API returned ${x.result.length} records.
                The results:
                </h2>`;
                if(x.result.length > 0){
                    testDiv.innerHTML += `<ol>`;
                   for (const element of x.result) {
                       testDiv.innerHTML += `<li>`;
                       let p = [];
                       for (const key in element) {
                         p.push(`${key}: ${element[key]}`);
                       }
                       testDiv.innerHTML += p.join(',');
                       testDiv.innerHTML += `</li>`;
                   }
                    testDiv.innerHTML += `</ol>`;
                }
            } else {
                testDiv.innerHTML += `<h2>
                The search could not be completed.
                There was an error on the server: ${x.message}            
                </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in /search method: ${e}</h2>`)
        .then(() => fetch(`${api}/place`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                place_id: placeId,
                name: category,
                category_id: categoryId,
                latitude: latitude,
                longitude: longitude,
                description: description + ` updated at ${Date.now()}`
            })
        }))
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>
                The place ${place} was updated successfully at ${Date.now()}.                
                </h2>`;

            } else {
                testDiv.innerHTML += `<h2>
                The place could not be updated.
                There was an error on the server: ${x.message}            
                </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in /place PUT method: ${e}</h2>`)
        .then(() => fetch(`${api}/review`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                review_id: reviewId,
                comment: 'very good!', rating: 5
            })
        }))
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>
                The review ${reviewId} was updated successfully.                
                </h2>`;
                reviewId = x.id;
            } else {
                testDiv.innerHTML += `<h2>
                The review could not be updated.
                There was an error on the server: ${x.message}            
                </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in /review PUT method: ${e}</h2>`)
        .then(() => fetch(`${api}/place/${placeId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }))
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>
                The place ${place} was deleted successfully at ${Date.now()}.                
                </h2>`;

            } else {
                testDiv.innerHTML += `<h2>
                The place could not be deleted.
                There was an error on the server: ${x.message}            
                </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in /place Delete method: ${e}</h2>`)
        .then(() => fetch(`${api}/review/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }))
        .then(x => x.json())
        .then(x => {
            if (x.done) {
                testDiv.innerHTML += `<h2>
                The review number ${reviewId} for place ${place} was deleted successfully at ${Date.now()}.                
                </h2>`;

            } else {
                testDiv.innerHTML += `<h2>
                The review could not be deleted.
                There was an error on the server: ${x.message}            
                </h2>`;
            }
        })
        .catch(e => testDiv.innerHTML += `<h2>Error in /review Delete method: ${e}</h2>`)



}