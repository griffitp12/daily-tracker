import constants from './constants'

export default {

  setStyleRatioCountable: (num: number, type: 'pushups' | 'situps'):number => {
    if (type === 'pushups') {
      return num / constants.pushupGoals;
    }
    if (type === 'situps') {
      return num / constants.situpGoals;
    }
    return 0
  },

  // at the moment setStyleBoolean isn't being used because I don't think it looks good :)
  setStyleBoolean: (bool: boolean, type: 'run' | 'alcohol'):string => {
      if (type === 'run') {
          if (bool === true) {
              return 'green'
          }
          else {
              return 'red'
          }
      } 
      if (type === 'alcohol') {
        if (bool === true) {
            return 'red'
        }
        else {
            return 'green'
        } 
      }
      return 'white'
  }
};
