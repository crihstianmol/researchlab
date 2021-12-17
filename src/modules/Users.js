import jwt from 'jsonwebtoken'

const listUsers = async (filter) => {
    let usersList = []
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            query Users {
                Users {
                  _id
                  email
                  DNI
                  name
                  lastName
                  status
                  role
                }
              }
            `,
            variables: {}
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        usersList.error = jsonobjetc.errors[0].message
    } else {
        usersList = jsonobjetc.data.Users
        if (filter.email) {
            usersList = usersList.filter(user => user.email.includes(filter.email) )
        }
        if (filter.name) {
            usersList = usersList.filter(user => user.name.includes(filter.name) )
        }
        if (filter.lastName) {
            usersList = usersList.filter(user => user.lastName.includes(filter.lastName) )
        }
        if (filter.status) {
            usersList = usersList.filter(user => user.status.includes(filter.status) )
        }
        if (filter.role) {
            usersList = usersList.filter(user => user.role.includes(filter.role) )
        }
    }
    return usersList
};

const regUser = async (email, DNI, name, lastName, password, role) => {
    let user = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation CreateUser($email: String!, $dni: String!, $name: String!, $lastName: String!, $password: String!, $role: Enum_userRol!) {
                createUser(email: $email, DNI: $dni, name: $name, lastName: $lastName, password: $password, role: $role) {
                  _id
                  email
                  DNI
                  name
                  lastName
                  status
                  role
                }
              }
            `,
            variables: {
                email: email,
                dni: DNI,
                name: name,
                lastName: lastName,
                password: password,
                status: "Pendiente",
                role: role
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        user.error = jsonobjetc.errors[0].message
    } else {
        user = jsonobjetc.data.createUser
        user.status = user.status.replace("_", " ")
    }
    return user
};

const logUser = async (email, password) => {
    let logData = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            query LoginUser($email: String!, $password: String!) {
                loginUser(email: $email, password: $password) {
                  response
                  jwt
                }
              }
            `,
            variables: {
                email: email,
                password: password
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        logData.response = jsonobjetc.errors[0].message
    } else {
        logData = jsonobjetc.data.loginUser
        if (logData.response === "Ok") {
            logData.userInfo = jwt.decode(logData.jwt, process.env.JWTSECRET)
            if (logData.userInfo.role) {
                localStorage.setItem('role', logData.userInfo.role)
                localStorage.setItem('id', logData.userInfo.id)
                localStorage.setItem('exp', logData.userInfo.exp)
                setTimeout(() => {
                    localStorage.removeItem('id')
                    localStorage.removeItem('role')
                    localStorage.removeItem('exp')
                }, (logData.userInfo.exp * 1000) - (logData.userInfo.iat * 1000));
            }
        }
    }
    return logData
};

const checkSession = () => {
    let expdate = Number(localStorage.getItem('exp'))
    if (expdate > 0 && expdate !== undefined && expdate !== null) {
        if (new Date(expdate * 1000) < new Date()) {
            localStorage.removeItem('id')
            localStorage.removeItem('role')
            localStorage.removeItem('exp')
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

const updateUserName = async (id, name) => {
    let user = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateUser($id: String!, $name: String) {
                updateUser(_id: $id, name: $name) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                name: name
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        user.error = jsonobjetc.errors[0].message
    } else {
        user = jsonobjetc.data.updateUser
        user.message = "Actualizado Correctamente"
    }
    return user
};

const updateUserLastName = async (id, lastname) => {
    let user = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateUser($id: String!, $lastName: String) {
                updateUser(_id: $id, lastName: $lastName) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                lastName: lastname
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        user.error = jsonobjetc.errors[0].message
    } else {
        user = jsonobjetc.data.updateUser
        user.message = "Actualizado Correctamente"
    }
    return user
};

const updateUserEmail = async (id, email) => {
    let user = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateUser($id: String!, $email: String) {
                updateUser(_id: $id, email: $email) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                email: email
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        user.error = jsonobjetc.errors[0].message
    } else {
        user = jsonobjetc.data.updateUser
        user.message = "Actualizado Correctamente"
    }
    return user
};

const updateUserDNI = async (id, dni) => {
    let user = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateUser($id: String!, $dni: String) {
                updateUser(_id: $id, DNI: $dni) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                dni: dni
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        user.error = jsonobjetc.errors[0].message
    } else {
        user = jsonobjetc.data.updateUser
        user.message = "Actualizado Correctamente"
    }
    return user
};

const updateUserPass = async (id, password) => {
    let user = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateUser($id: String!, $password: String) {
                updateUser(_id: $id, password: $password) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                password: password
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        user.error = jsonobjetc.errors[0].message
    } else {
        user = jsonobjetc.data.updateUser
        user.message = "Actualizado Correctamente"
    }
    return user
};

const updateUserRole = async (id, role) => {
    let user = {}
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateUser($id: String!, $role: String) {
                updateUser(_id: $id, role: $role) {
                  _id
                }
              }
            `,
            variables: {
                id: id,
                role: role
            },
        }),
    });
    let jsonobjetc = await response.json();
    if (jsonobjetc.errors) {
        console.error(jsonobjetc.errors[0].message)
        user.error = jsonobjetc.errors[0].message
    } else {
        user = jsonobjetc.data.updateUser
        user.message = "Actualizado Correctamente"
    }
    return user
};

const updateUserStatus = async (id, status) => {
    let user = {}
    status = status.replace(" ", "_")
    let response = await fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
            mutation UpdateUser($id: String!, $status: String) {
                updateUser(_id: $id, status: $status) {
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
        user.error = jsonobjetc.errors[0].message
    } else {
        user = jsonobjetc.data.updateUser
        user.message = "Actualizado Correctamente"
    }
    return user
};

export {
    listUsers,
    regUser,
    logUser,
    checkSession,
    updateUserName,
    updateUserLastName,
    updateUserEmail,
    updateUserDNI,
    updateUserPass,
    updateUserRole,
    updateUserStatus
}