function showModal(modalId, buttonId) {
    // Get the modal
    var modal = document.getElementById(modalId);

    // Get the button that opens the modal
    var btn = document.getElementById(buttonId);

    // Get the <span> element that closes the modal
    var span = modal.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        console.log(event.target.tagName)
        console.log(event.currentTarget.tagName)
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}