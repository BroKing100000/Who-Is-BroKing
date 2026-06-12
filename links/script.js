// [ Functions ] //

function ErrorMessage(error) {

    // [ Constants ] //

    const div = document.createElement("div");
    div.innerHTML = `
    
        <h2>An error occurred while loading links.json file</h2>
        <p>Error message:</p>
        <p>${error.message}</p>
    `;

    document.getElementById("links").appendChild(div);
}

function AddLinkStructure(data) {

    data.forEach((link) => {

        // [ Constants ] //

        const div = document.createElement("div");
        div.innerHTML = `
        
            <img src="${link.Icon}"></img>
            <a href="${link.Link}">${link.Name}</a>
            <p>${link.Comment}</p>
        `;

        document.getElementById("links").appendChild(div);
    });
}

function AddTitle(text) {

    // [ Constants ] //

    const title = document.createElement("h2");
    title.textContent = text;

    document.getElementById("links").appendChild(title);
}

function CreateLinks(links) {

    // [ Constants ] //

    const workflowRelated = Object.values(links["Workflow Related Links"]);
    const nonWorkflowRelated = Object.values(links["Non-Workflow Related Links"]);

    // [ Calls ] //

    AddTitle("Workflow Related Links");
    AddLinkStructure(workflowRelated);
    AddTitle("Non-Workflow Related Links");
    AddLinkStructure(nonWorkflowRelated);
}

// [ Calls ] //

fetch('links.json')

    .then((response) => {

    if (!response.ok) {

        throw new Error(`${response.status} (${response.statusText})`);
    };

    // [ Return ] //

    return response.json();
  })

    .then((links) => {

        // [ Calls ] //

        CreateLinks(links);
    })

    .catch((error) => {

    // [ Calls ] //

    ErrorMessage(error);
    
    return;
});