
function Task(id,description){
    this.id = id;
    this.description = description;
    this.status = 'pending';
    this.complete = function(){
        this.status = 'complete';
    }
    this.updateDescription = function(newDescription){
        this.description = newDescription;
    }
}

let task1 = new Task(1,'To Eat');
let task2 = new Task(2,'To Walking');
let task3 = new Task(3,'To Code');
let task4 = new Task(4,'To Music Listening');
let task5 = new Task(5,'To Code');
let task6 = new Task(6,'To Sleep');


let tasks = new Map()
tasks.set(task1, true);
tasks.set(task2, false);
tasks.set(task3, false);
tasks.set(task4, true);
tasks.set(task5, false);
tasks.set(task6, true);

//Add Task 
function AddTask(task){
    if(!tasks.has(task)){
        tasks.set(task, true);
        console.log(`Task ${task.id} add success`);
    }else{
        console.log(`Task ${task.id} already exist`);
    }
}
//complete a Task 
function completeTask(task){
    if(tasks.has(task)){
        tasks.set(task, true);
        task.complete();
        console.log(`Task ${task.id} complete success`);
    }else{
        console.log(`Task ${task.id} is not complete success`);
    }
}

function isTaskCompleted(task) {
    if (tasks.has(task)) {
      return tasks.get(task);
    }
    return false;
  }
let task10 = new Task(10,'Read a Book')
let task11 = new Task(11,'Read a Magazine')
  AddTask(task10)
  AddTask(task11)
  completeTask(task10)
  completeTask(task1)
  completeTask(task2)
  completeTask(task11)
  completeTask(task3)

console.log(  isTaskCompleted(task2));
console.log(  isTaskCompleted(task10));
console.log('tasks', tasks)