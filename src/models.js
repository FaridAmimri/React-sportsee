import { Service } from './services'

export const Model = {
    getUserMainData: function(userId) {
        return Service.getUserMainData(userId)
        .then((data) => {
            return {
                score: data.score,
            }
        })
    },
    
    getUserActivity: function(userId) {
        return Service.getUserActivity(userId)
        .then((data) => {
            return {
                userId: data.userId,
                sessions: data.sessions,
            }
        })
    },

    getUserAverage: function(userId) {
        return Service.getUserAverage(userId)
        .then((data) => {
            return {
                userId: data.userId,
                sessions: data.sessions,
            }
        })
    },

    getUserPerformance: function(userId) {
        return Service.getUserPerformance(userId)
        .then((data) => {
            return {
                userId: data.userId,
                kind: data.kind,
                data : data.data,
            }
        })
    }
}