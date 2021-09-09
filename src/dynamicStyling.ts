export default {
  setStyleRatioCountable: (num: number, type: 'pushups' | 'situps'):number => {
    if (type === 'pushups') {
      return num / 50;
    }
    if (type === 'situps') {
      return num / 100;
    }
    return 0
  },
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
