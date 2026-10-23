const developerName: string = "Hassan";
const totalTasks: number = 10;
const completedTasks: number = 0;

const remainingTasks: number = totalTasks - completedTasks;
const isProjectComplete: boolean = completedTasks === totalTasks;
const allTasksCompleted: boolean = completedTasks === totalTasks;
const hasTasksRemaining: boolean = remainingTasks > 0;

console.log(`Developer: ${developerName}`);
console.log(`Completed Tasks: ${completedTasks}`);
console.log(`Project complete: ${isProjectComplete}`);
console.log(`Tasks remaining: ${remainingTasks}`);
console.log(`All tasks completed: ${allTasksCompleted}`);
console.log(`Has tasks remaining: ${hasTasksRemaining}`);

if (completedTasks === totalTasks) {
    console.log("Project completed!");
} else if (completedTasks > 0) {
    console.log("Project in progress!");
} else {
    console.log("Project not started.");
}