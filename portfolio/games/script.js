// [ Functions ] //

function ErrorMessage(error) {

    // [ Constants ] //

    const div = document.createElement("div");
    div.innerHTML = `
    
        <h2>An error occurred while loading games.json file</h2>
        <p>Error message:</p>
        <p>${error.message}</p>
    `;

    document.getElementById("godot_games").appendChild(div);
}

function CreateGames(data) {

    // [ Constants ] //

    const turbowarpGames = Object.values(data.TurboWarp);
    const robloxStudioGames = Object.values(data["Roblox Studio"]);

    turbowarpGames.forEach((game) => {

        // [ Constants ] //

        const div = document.createElement("div");
        div.innerHTML = `
        
            <img src="${game.Cover}"></img>
            <a href="${game.Link}">${game.Name}</a>
        `;

        document.getElementById("turbowarp_games").appendChild(div);
    });

    robloxStudioGames.forEach((game) => {

        // [ Constants ] //

        const div = document.createElement("div");
        div.innerHTML = `
        
            <img src="${game.Cover}"></img>
            <a href="${game.Link}">${game.Name}</a>
        `;

        document.getElementById("roblox_studio_games").appendChild(div);
    });
}

// [ Calls ] //

fetch('./games.json')

    .then((response) => {

    if (!response.ok) {

        throw new Error(`${response.status} (${response.statusText})`);
    };

    // [ Return ] //

    return response.json();
  })

    .then((games) => {

        // [ Calls ] //

        CreateGames(games);        
    })

    .catch((error) => {

    // [ Calls ] //

    ErrorMessage(error);
    
    return;
});