// [ Functions ] //

function ErrorMessage(error) {

    // [ Constants ] //

    const div = document.createElement("div");
    div.innerHTML = `
    
        <h2>An error occurred while loading samples.json file</h2>
        <p>Error message:</p>
        <p>${error.message}</p>
    `;

    document.getElementById("art_samples").appendChild(div);
}

function CreateSamples(data) {

    // [ Constants ] //

    const samples = Object.values(data);

    samples.forEach((sample) => {

        // [ Constants ] //

        const div = document.createElement("div");
        div.innerHTML = `
        
            <img src="${sample.Image}"></img>
            <p>${sample.Name}</p>
        `;

        document.getElementById("art_samples").appendChild(div);
    });
}

// [ Calls ] //

fetch('./samples.json')

    .then((response) => {

    if (!response.ok) {

        throw new Error(`${response.status} (${response.statusText})`);
    };

    // [ Return ] //

    return response.json();
  })

    .then((samples) => {

        // [ Calls ] //

        CreateSamples(samples);        
    })

    .catch((error) => {

    // [ Calls ] //

    ErrorMessage(error);
    
    return;
});