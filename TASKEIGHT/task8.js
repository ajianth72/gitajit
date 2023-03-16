// Add event listener to the items list
document.querySelector('#items').addEventListener('click', function(event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('delete')) {
      // Remove the corresponding li element
      event.target.parentNode.remove();
    }
  });
  
  // Add edit button next to delete button
  var deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach(function(button) {
    button.insertAdjacentHTML('afterend', '<button class="btn btn-warning btn-sm float-right edit">Edit</button>');
  });
  