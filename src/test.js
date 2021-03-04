function Scheduler() {
  const self = this;
  self.count = 2;
  self.queue = [];
  self.runQueue = [];
  self.run = function() {};

  Scheduler.prototype.add = function(task) {
    self.queue.push(task);

    return new Promise((resolve, reject) => {
      if (self.run.length < self.count) {
        const currentTask = self.queue.shift();
        self.run.push(currentTask);

        currentTask().then(() => {
          const index = self.run.indexOf(currentTask);
          self.run.splice(index, 1);
          resolve();
        });
      } else {
        // how to do...?
      }
    });
  };
}

var timeout = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
var scheduler = new Scheduler();
var addTask = (time, description) => {
  scheduler.add(() => timeout(time)).then(() => console.log(description));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

// 2 3 1 4
