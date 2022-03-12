import { Service } from './services'

export const Model = {
    getUserActivity: function(userId) {
        return Service.getUserActivity(userId)
        .then((data) => {
            return {
                userId: data.userId,
                sessions: data.sessions,
            }
        })
    }
}