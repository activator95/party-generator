const renderTeam = (team) => {
    // Create the developer for data inputs
    const renderdeveloper = (developer) => `
    <div class="card col-3 me-3 mb-5 employee-card">
        <img src="${developer.imgSrc}">
        <div class="card-header employee-header">
            <h2 class="card-title">${developer.name}</h2>
            <h3 class="card-title"><i class="fa-solid fa-wrench"></i>👨‍💻${developer.jobTitle}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${developer.id}</li>
                <li class="list-group-item">
                    Email: <a href="mailto:${developer.email}">${developer.email}</a>
                </li>
                <li class="list-group-item">
                    GitHub:
                    <a href="https://github.com/${developer.gitHubUsername}" target="_blank"
                        rel="noopener noreferrer">${developer.gitHubUsername}</a>
                </li>
            </ul>
        </div>
    </div>
`;

    // Create the manager for data inputs
    const renderManager = (manager) => `
                <div class="card col-3 me-3 mb-5 employee-card">
                    <img src="${manager.imgSrc}">
                    <div class="card-header employee-header">
                        <h2 class="card-title">${manager.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-people-roof"></i>👩🏽‍💻${manager.jobTitle}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${manager.email}">${manager.email}</a>
                            </li>
                            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
        `;
    
    // Create the intern for data inputs
    const renderIntern = (intern) => `
                <div class="card col-3 me-3 mb-5 employee-card">
                    <img src="${intern.imgSrc}">
                    <div class="card-header employee-header">
                        <h2 class="card-title">${intern.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-wrench"></i>👩‍💻${intern.jobTitle}</h3>
                    </div>
                    <div class="card-body">
                    <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${intern.email}">${intern.email}</a>
                    </li>
                    <li class="list-group-item">
                    <li class="list-group-item">Office number: ${intern.school}</li>
                    </li>
                </ul>
            </div>
        </div>
`;  

// Create an array for the html
const html = [];

// Add team members to the empty array for the HTML
html.push(...team.filter((employee) => employee.getRole() === 'developer').map((developer) => renderdeveloper(developer)));

html.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => renderManager(manager)));

html.push(team.filter((employee) => employee.getRole() === 'Intern').map((intern) => renderIntern(intern)));
    
// Join all the HTML cards and return them as one variable
return html.join('');
};

//HTML Head and Body 

const renderMain = (team) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Role Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="team-profile-header col-12 mb-3 team-profile">
                <h1 class="team-profile-title text-center">Meet The Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-mem-container col-12 d-flex flex-wrap justify-content-around">
                ${renderTeam(team)}
            </div>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
crossorigin="anonymous"></script>
</html>
`;

module.exports = renderMain;