
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      task.complete = true;
    },
  };

  return task;
}


// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the lil poops out of the litter box');



task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
