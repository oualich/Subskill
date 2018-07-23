function myFunction() {
    
    

    
    if ($("input[name='message_pri']:checked") && $("#nom").val() && $("#prenom").val() && $("#email").val() && $("#naissance").val() && $("#cp").val()) {

        var nom = $("#nom").val();

        var email = $("#email").val();
    
        var password = $("#password").val();
    
        var prenom = $("#prenom").val();
        
        var cp = $("#cp").val();

        var naissance = $("#naissance").val();
    
        var reglement = $("#reglement").val();
    
        var genre = $(".message_pri:checked").val();
        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'nom=' + nom + '&email=' + email + '&password=' + password + '&prenom=' + prenom +'&cp=' + cp +'&genre=' + genre +'&naissance=' + naissance;
        // AJAX code to submit form.
        $.ajax({

        type: "POST",
        url: "requetes/foncAjoutmembres.php",
        data: dataString,
        cache: false,
        success:function(data){
            if(data === "true"){
                $('form')[0].reset();
                $("#notice").html("<i class='fa fa-exclamation-circle'></i> Membre ajouté");

            } else {
                $('form')[0].reset();
                $("#notice").html("<i class='fa fa-exclamation-circle'></i> Membre ajouté");
                
            }
        },
        error: function(){
            console.log("error");
            console.log(xhr.status);
            console.log(xhr.responseText);
            console.log(thrownError);
            $("#notice").html("<i class='fa fa-exclamation-circle'></i> Une erreur s'est produite, veuillez ré-essayer.");
        }

        });


    }
     else {
    $("#notice").html("<i class='fa fa-exclamation-circle'></i> Champ(s) incomplet(s)");

            /* --- nom & prénom --- */
            if($("input#nom").val() == ""){
                $("#nom-view").closest(".col-middle-wrapper").css("border-bottom"," 2px solid red");
            }
            else {
                $("#nom-view").closest(".col-middle-wrapper").css("border-bottom","2px solid rgba(151, 151, 151, 0.4006)");
            }
            if($("input#prenom").val() == ""){
                $("#prenom-view").closest(".col-middle-wrapper").css("border-bottom"," 2px solid red");
            }
            else {
                $("#prenom-view").closest(".col-middle-wrapper").css("border-bottom","2px solid rgba(151, 151, 151, 0.4006)");
            }
            if($("input#email").val() == ""){
                $("#email-view").closest(".col-middle-wrapper").css("border-bottom"," 2px solid red");
            }
            else {
                $("#email-view").closest(".col-middle-wrapper").css("border-bottom","2px solid rgba(151, 151, 151, 0.4006)");
            }
            if($("input#naissance").val() == ""){
                $("#naissance-view").closest(".col-middle-wrapper").css("border-bottom"," 2px solid red");
            }
            else {
                $("#naissance-view").closest(".col-middle-wrapper").css("border-bottom","2px solid rgba(151, 151, 151, 0.4006)");
            }
            if($("input#cp").val() == ""){
                $("#cp-view").closest(".col-middle-wrapper").css("border-bottom"," 2px solid red");
            }
            else {
                $("#cp-view").closest(".col-middle-wrapper").css("border-bottom","2px solid rgba(151, 151, 151, 0.4006)");
            }
            if($("input#password").val() == ""){
                $("#password-view").closest(".col-middle-wrapper").css("border-bottom"," 2px solid red");
            }
            else {
                $("#password-view").closest(".col-middle-wrapper").css("border-bottom","2px solid rgba(151, 151, 151, 0.4006)");
            }
            return false;

    }

}