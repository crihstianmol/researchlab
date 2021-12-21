const listProjects = async (filter) => {
    let projectList = []
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            query Projects {
                Projects {
                  _id
                  projectName
                  budget
                  startDate
                  endDate
                  leaderId
                  leaderName
                  status
                  phase
                }
              }
            `,
            variables: {}
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        projectList.error = jsonobjetc.errors[0].message
    } else {
        projectList = jsonobjetc.data.Projects
        if (filter.projectName) {
            projectList = projectList.filter(project => project.projectName.includes(filter.projectName))
        }
        if (filter.budget) {
            projectList = projectList.filter(project => project.budget.includes(filter.budget))
        }
        if (filter.startdate) {
            projectList = projectList.filter(project => project.startdate.includes(filter.startdate))
        }
        if (filter.leaderId) {
            projectList = projectList.filter(project => project.leaderId.includes(filter.leaderId))
        }
        if (filter.leaderName) {
            projectList = projectList.filter(project => project.leaderName.includes(filter.leaderName))
        }
        if (filter.status) {
            projectList = projectList.filter(project => project.status.includes(filter.status))
        }
        if (filter.phase) {
            projectList = projectList.filter(project => project.phase.includes(filter.phase))
        }
    }
    return projectList
};

const regProject = async (projectName, budget, startDate, endDate, leaderId, leaderName) => {
    let project = {}
    budget = Number(budget) + 0.1
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation CreateProject($projectName: String!, $budget: Float!, $startDate: String!, $endDate: String!, $leaderId: String!, $leaderName: String!) {
                createProject(projectName: $projectName, budget: $budget, startDate: $startDate, endDate: $endDate, leaderId: $leaderId, leaderName: $leaderName) {
                    _id
                    projectName
                    budget
                    startDate
                    endDate
                    leaderId
                    leaderName
                    status
                    phase
                }
              }
            `,
            variables: {
                projectName: projectName,
                budget: budget,
                startDate: startDate,
                endDate: endDate,
                leaderId: leaderId,
                leaderName: leaderName,
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        project.error = jsonobjetc.errors[0].message
    } else {
        project = jsonobjetc.data.createProject
        project.status = project.status.replace(" ", "_")
        project.phase = project.phase.replace(" ", "_")
    }
    return project
};

const updateProjectName = async (id, projectName) => {

    let project = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateProject($id: ID!, $projectName: String) {
                updateProject(_id: $id, projectName: $projectName) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                projectName: projectName
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        project.error = jsonobjetc.errors[0].message
    } else {
        project.message = "Proyecto Actualizado Correctamente"
    }
    return project
};

const updateProjectBudget = async (id, budget) => {

    let project = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateProject($id: ID!, $budget: String) {
                updateProject(_id: $id, budget: $budget) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                budget: budget
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        project.error = jsonobjetc.errors[0].message
    } else {
        project.message = "Proyecto Actualizado Correctamente"
    }
    return project
};

const updateProjectStartDate = async (id, startDate) => {

    let project = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateProject($id: ID!, $startDate: String) {
                updateProject(_id: $id, startDate: $startDate) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                startDate: startDate
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        project.error = jsonobjetc.errors[0].message
    } else {
        project.message = "Proyecto Actualizado Correctamente"
    }
    return project
};

const updateProjectEndDate = async (id, endDate) => {

    let project = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateProject($id: ID!, $endDate: String) {
                updateProject(_id: $id, endDate: $endDate) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                endDate: endDate
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        project.error = jsonobjetc.errors[0].message
    } else {
        project.message = "Proyecto Actualizado Correctamente"
    }
    return project
};

const updateProjectLeaderId = async (id, leaderId) => {

    let project = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateProject($id: ID!, $leaderId: String) {
                updateProject(_id: $id, leaderId: $leaderId) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                leaderId: leaderId
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        project.error = jsonobjetc.errors[0].message
    } else {
        project.message = "Proyecto Actualizado Correctamente"
    }
    return project
};

const updateProjectLeaderName = async (id, leaderName) => {

    let project = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateProject($id: ID!, $leaderName: String) {
                updateProject(_id: $id, leaderName: $leaderName) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                leaderName: leaderName
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        project.error = jsonobjetc.errors[0].message
    } else {
        project.message = "Proyecto Actualizado Correctamente"
    }
    return project
};

const updateProjectPhase = async (id, phase) => {

    let project = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateProject($id: ID!, $phase: String) {
                updateProject(_id: $id, phase: $phase) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                phase: phase
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        project.error = jsonobjetc.errors[0].message
    } else {
        project.message = "Proyecto Actualizado Correctamente"
    }
    return project
};

const updateProjectStatus = async (id, status) => {

    let project = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateProject($id: ID!, $status: String) {
                updateProject(_id: $id, status: $status) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                status: status
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        project.error = jsonobjetc.errors[0].message
    } else {
        project.message = "Proyecto Actualizado Correctamente"
    }
    return project
};

export {
    listProjects,
    updateProjectName,
    updateProjectBudget,
    updateProjectStartDate,
    updateProjectEndDate,
    updateProjectLeaderId,
    updateProjectLeaderName,
    updateProjectPhase,
    updateProjectStatus,
    regProject
}