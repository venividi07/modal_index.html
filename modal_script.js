
const closeModal = function() {
    document.getElementById('myModal').style.display = 'none';
}

const openModal = function(text) {
  // Set the modal text
  document.getElementById('modalText').textContent = text;
  // Show the modal
  document.getElementById('myModal').style.display = 'block';
}

