<?php 

    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include 'DbConnect.php';
    $objDb = new DbConnect;
    $conn =$objDb->connect();
    

    
    $method = $_SERVER['REQUEST_METHOD'];

    switch($method){
        

        case "POST":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "INSERT INTO uzenet(id, vez_nev, ker_nev, email, tel, leir) VALUES (null, :vez_nev, :ker_nev, :email, :tel, :leir)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':vez_nev', $user->vez_nev);
            $stmt->bindParam(':ker_nev', $user->ker_nev);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':tel', $user->tel);
            $stmt->bindParam(':leir', $user->leir);
            if($stmt->execute()){
                $response = ['status' => 1, 'message' => 'Message send successfully.'];
            }
            else{
                $response = ['status' => 0, 'message' => 'Failed to message send.'];
            }
            echo json_encode($response);
            break;
        }