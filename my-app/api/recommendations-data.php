<?php
include('template.php');
$request = $pdo->prepare("SELECT `code`, `recommendation` FROM `recommendations` where `code` = ".$_GET['code']);
if( $request->execute() ){
	$results = $request->fetchAll();
	$success = true;
	$data = $results;
} else {
	$msg = "Une erreur s'est produite";
}
reponse_json($success, $data);