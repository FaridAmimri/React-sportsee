/**
 * Model dispatching API Calls
 * @function - Able to switch between local data or API
 * @param {number} userId - Id of the user.
 * @return {object} - Using promise returning data in JSON formated Object
 */

import { Service } from './services'
import { mockService } from './mockService'

const selectedService = process.env.REACT_APP_ACTIVE_MOCK === 'true' ? mockService : Service

export const Model = {
  getUserMainData: function (userId) {
    return selectedService.getUserMainData(userId).then((data) => {
      return {
        userInfos: data.userInfos,
        score: data.score || data.todayScore,
        keyData: data.keyData,
      }
    })
  },

  getUserActivity: function (userId) {
    return selectedService.getUserActivity(userId).then((data) => {
      return {
        userId: data.userId,
        sessions: data.sessions,
      }
    })
  },

  getUserAverage: function (userId) {
    return selectedService.getUserAverage(userId).then((data) => {
      return {
        userId: data.userId,
        sessions: data.sessions,
      }
    })
  },

  getUserPerformance: function (userId) {
    return selectedService.getUserPerformance(userId).then((data) => {
      return {
        userId: data.userId,
        kind: data.kind,
        data: data.data,
      }
    })
  },
}
