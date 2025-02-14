interface Setting{
    TimerSetting: {
      timeCycle: {
        'Pomodoro': number;
        'Short Break': number;
        'Long Break': number;
      };
      offLongBreak: boolean;
  
    };
    countCycle: {
      'Pomodoro': number;
      'Short Break': number;
      'Long Break': number;
    };
    autoRunTimer: {
      'Pomodoro': boolean;
      'Break': boolean;
    };
    State: ('Pomodoro' | 'Short Break' | 'Long Break')
  };

  export default Setting




