const emergencyTasks = document.querySelectorAll('.emergency-tasks')[0];
const NoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks')[0];
const footer = document.querySelector('#footer-container')

emergencyTasks.style.backgroundColor = '#FF9E84'
NoEmergencyTasks.style.backgroundColor = '#F8DA5E'
footer.style.backgroundColor = '#003432'

for (div of emergencyTasks.children) {
    for (h3 of div.children) {
        h3.style.backgroundColor = '#A501F2'
    }
}

for (div of NoEmergencyTasks.children) {
    for (h3 of div.children) {
        h3.style.backgroundColor = '#222425'
    }
}