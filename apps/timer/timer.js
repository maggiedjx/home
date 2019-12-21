
// Class to represent a row in the timer grid
function TimerRow(startTime, endTime, diff) {
    var self = this;
    self.startTime = startTime;
    self.endTime = endTime;
    self.duration = diff;
}

// Overall viewmodel for this screen, along with initial state
function QuickTimerViewModel() {
    var self = this;

    self.timerRows = ko.observableArray([ ]);
    self.btnText = ko.observable('Press to start');

    self.startTimer = function() {
        self.startTime = new Date();
        console.log('startt: ' + self.startTime);

        self.btnText('Release to stop');
    }

    self.stopTimer = function() {
        self.endTime = new Date();
        console.log('stopp: ' + self.endTime);
        var diff = self.endTime.getTime() - self.startTime.getTime();
        console.log('fff: ' + diff);
        self.timerRows.push(new TimerRow(self.startTime, self.endTime, diff));

        self.btnText('Press to start');
    }


}

ko.applyBindings(new QuickTimerViewModel());
