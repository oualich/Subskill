<?php

# Include the Autoloader (see "Libraries" for install instructions)
require '../vendor/autoload.php';
use Mailgun\Mailgun;
// $email = "oualicherikh1@gmail.com";
// $nom = "cherikh";
// $prenom = "ouali";
// $password = "password";

# Instantiate the client.
$mgClient = new Mailgun('ac8f9734991fa022b5981bdaf6006928-8889127d-5bec4798');
$domain = "sandboxbd54462eb74f48cbb44752770a8e1130.mailgun.org";

$Option['FROM_MAIL']="contact@subskill.com";
$Option['FROM_NAME']="Nouveau message de Subskill";//any name you want it to appear
$Option['TO_MAIL']=$email;
$Option['TO_NAME']=$nom;
$Option['SUBJECT']=$prenom;
$Option['BODY_TEXT']="Titre?";// if html is not supported then use text message instead
$Option['BODY_HTML']="
<h1>Bonjour bienvenue sur Subskill  !</h1>
<b style='color:black'>Bonjour <p style='color:red'>$nom $prenom</p> voici votre  code secret <p style='color:red'>$password </p> </b>. 


" ;

# Make the call to the client.
$result = $mgClient->sendMessage("$domain",
          array(
                'from'    => $Option['FROM_NAME']." <".$Option['FROM_MAIL'].">",
                'to'      => $Option['TO_NAME']." <".$Option['TO_MAIL'].">",
                'subject' => $Option['SUBJECT'],
                'text'    => $Option['BODY_TEXT'],
                'html'    => $Option['BODY_HTML'],
            
            ));
# You can see a record of this email in your logs: https://app.mailgun.com/app/logs

# You can send up to 300 emails/day from this sandbox server.
# Next, you should add your own domain so you can send 10,000 emails/month for free.
