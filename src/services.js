/**
 * Service dispatching the API Call
 * @function - Dispatching data for components
 * @param {number} userId - Id of the user
 * @param {string} url - API
 * @return {object} - Using promise returning data in JSON formated Object
 */

export const Service = {
    getUserMainData: function(userId) {
        return fetch(`http://localhost:3000/user/${userId}`)
        .then((res) => res.json())
        .then((result) => result.data)
    },

    getUserActivity: function(userId) {
        return fetch(`http://localhost:3000/user/${userId}/activity`)
        .then((res) => res.json())
        .then((result) => result.data)
    },

    getUserAverage: function(userId) {
        return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
        .then((res) => res.json())
        .then((result) => result.data)
    },

    getUserPerformance: function(userId) {
        return fetch(`http://localhost:3000/user/${userId}/performance`)
        .then((res) => res.json())
        .then((result) => result.data)
    }
}
