const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Manager = require('./lib/manager');
const Developer = require('./lib/developer');
const Intern = require('./lib/intern');

// Output Directory
const DIST_DIR = path.resolve(__dirname, 'dist');

// Output file path and name
const outputPath = path.join(DIST_DIR, 'jobApp.html');

// Import HTML template
const templateHTML = require('.//src/temp');

// Create an empty array of team
const team = [];


function addTeamMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'what_team_member',
                message: 'Add an developer, Add an intern or finish assembling your team?',
                choices: ['Developer', 'Intern', 'Assemble Team!'],
            },
        ])
        .then((val) => {
            if (val.what_team_member === 'Developer') {
                addDeveloper();
            } else if (val.what_team_member === 'Intern') {
                addIntern();
            } else {
                createTeamFile();
            }
        });
}

/*Get manager data inputs*/
function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the team manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID of the team manager?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email address of the team manager?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the Office EXT of the team manager?',
            },
        ])
        .then((val) => {
            const manager = new Manager(val.name, val.id, val.email, val.imgSrc, val.officeNumber);
            console.table(manager);
            team.push(manager);
            addTeamMember();
        });
}

/* Get developer data by prompts */
function addDeveloper() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the developers's name`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the developer's employee ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the developer's email address?`,
            },
            {
                type: 'input',
                name: 'gitHub',
                message: `What is the developer's github profile name?`,
            },
        ])
        .then((val) => {
            const developer = new Developer(val.name, val.id, val.email, val.imgSrc, val.gitHub);
            console.table(developer);
            team.push(developer);
            addTeamMember();
        });
}

/*Get intern data inputs*/
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the Intern's name`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the Intern's employee ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the Intern's email address?`,
            },
            {
                type: 'input',
                name: 'school',
                message: `What school did the intern go to?`,
            },
        ])
        .then((val) => {
            const intern = new Intern(val.name, val.id, val.email, val.imgSrc, val.school);
            console.table(intern);
            team.push(intern);
            addTeamMember();
        });
}


/*Create the html file*/

function createTeamFile() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        fs.writeFileSync(outputPath, templateHTML(team), 'utf-8');
        console.log('HTML file created in the dist folder');
    }
}

function startApp() {
    addManager();
}

startApp();