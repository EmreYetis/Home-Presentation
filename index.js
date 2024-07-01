$(document).ready(function () {
  var images = []; // Array to store image URLs
  $(".carousel-item img").each(function () {
    // Iterate through carousel images
    images.push($(this).attr("src")); // Push image URLs to array
  });

  var currentIndex = 0; // Initialize current index

  // Function to show image at given index
  function showImage(index) {
    $("#imageModal .modal-body img").attr("src", images[index]); // Set modal image src
    currentIndex = index; // Update current index
  }

  // Show first image when modal is shown
  $("#imageModal").on("show.bs.modal", function () {
    showImage(currentIndex);
  });

  // Previous button click event
  $("#prevBtn").click(function () {
    if (currentIndex > 0) {
      showImage(currentIndex - 1); // Show previous image
    }
  });

  // Next button click event
  $("#nextBtn").click(function () {
    if (currentIndex < images.length - 1) {
      showImage(currentIndex + 1); // Show next image
    }
  });

  // When modal is closed
  $("#imageModal").on("hidden.bs.modal", function () {
    $("#carouselExampleControls").carousel("cycle"); // Restart carousel
  });

  // When carousel image is clicked
  $(".carousel-item img").click(function () {
    var imgUrl = $(this).attr("src"); // Get clicked image URL
    $("#imageModal")
      .on("show.bs.modal", function () {
        // When modal is shown
        $(this).find(".modal-body img").attr("src", imgUrl); // Set modal image src
      })
      .modal("show"); // Show modal
  });
});
