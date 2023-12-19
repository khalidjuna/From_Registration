document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    var studentName = document.getElementById('studentName').value;
    var studentID = document.getElementById('studentID').value;
    var course = document.getElementById('course').value;
    var instructor = document.getElementById('instructor').value;

    alert('Student Name: ' + studentName + '\nNIM: ' + studentID + '\nCourse: ' + course + '\nInstructor: ' + instructor);
});

// Suggestions data
var nameSuggestions = ["Alice", "Bob", "Carol", "Dave"];
var nimSuggestions = ["12345", "23456", "34567", "45678"];
var courseSuggestions = ["Pweb", "Jarkom", "Kalkulus", "PBKK", "Jaringan Nirkabel"];
var instructorSuggestions = ["Dr. Smith", "Prof. Johnson", "Dr. Williams", "Prof. Brown", "Dr. Ewut", "Dr.Kaskus"];

function showSuggestions(inputElement, suggestions) {
    var value = inputElement.value;
    var suggestionsElement = document.getElementById(inputElement.id + 'Suggestions');
    suggestionsElement.innerHTML = '';

    if (value) {
        var filteredSuggestions = suggestions.filter(function(suggestion){
            return suggestion.toLowerCase().includes(value.toLowerCase());
        });

        filteredSuggestions.forEach(function(suggestedItem){
            var listItem = document.createElement('li');
            listItem.textContent = suggestedItem;
            listItem.onclick = function() {
                inputElement.value = suggestedItem;
                suggestionsElement.innerHTML = '';
            };
            suggestionsElement.appendChild(listItem);
        });
    } else {
        suggestionsElement.innerHTML = '';
    }
}

// Event listeners for each input field
document.getElementById('studentName').addEventListener('input', function() {
    showSuggestions(this, nameSuggestions);
});

document.getElementById('studentID').addEventListener('input', function() {
    showSuggestions(this, nimSuggestions);
});

document.getElementById('course').addEventListener('input', function() {
    showSuggestions(this, courseSuggestions);
});

document.getElementById('instructor').addEventListener('input', function() {
    showSuggestions(this, instructorSuggestions);
});
