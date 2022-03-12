export const Service = {
    getUserActivity: function(userId) {
        return fetch(`http://localhost:3000/user/${userId}/activity`)
        .then((res) => res.json())
        .then((result) => result.data)
    }
}