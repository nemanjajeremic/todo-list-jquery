$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});

$("input[type='text']").keypress(function(e) {
  var todoText = $(this).val();
  if (e.which == 13) {
    $(this).val("");
    if (todoText == "") {
      alert("cannot be empty");
    } else {
      $("ul").append(
        '<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' +
          todoText +
          "</li>"
      );
    }
  }
});


//add todo on plus icon

/* $(".fa-plus").on("click", function() {
  var todoText = $("input").val();
  if (todoText == "") {
    alert("cannot be empty");
  } else {
    $("ul").append(
      '<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' +
        todoText +
        "</li>"
    );
    $("input").val("");
  }
}); */


//hide input on plus button

$(".fa-plus").on("click", function() {
  $("input").slideToggle();
});