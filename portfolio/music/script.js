// [ Functions ] //

function ErrorMessage(error) {

    // [ Constants ] //

    const div = document.createElement("div");
    div.innerHTML = `
    
        <h2>An error occurred while loading samples.json file</h2>
        <p>Error message:</p>
        <p>${error.message}</p>
    `;

    document.getElementById("music_samples").appendChild(div);
}

function CreateSamples(data) {

    // [ Constants ] //

    const samples = Object.values(data);

    samples.forEach((sample) => {

        // [ Constants ] //

        const div = document.createElement("div");
        div.innerHTML = `
        
            <p>${sample.Name}</p>
            <audio src="${sample.Source}" controls>Your browser doesn't support the audio tag.</audio>
        `;

        document.getElementById("music_samples").appendChild(div);
    });
}

// [ Calls ] //

fetch('samples.json')

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