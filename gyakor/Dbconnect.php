<?php 
	/**
	* Database Connection
	*/
	class DbConnect {
		public $server = 'localhost';
		public $dbname = 'gyak';
		public $user = 'root';
		public $pwd = '';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pwd);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
	}
 ?>