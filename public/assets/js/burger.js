$(function () {
    $(".devourburger").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "UPDATE"
        }).then(
            function () {
                console.log("devoured id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#sendBurger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerInputSpot").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    
})    