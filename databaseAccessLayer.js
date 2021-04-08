const { post } = require("./routes/router");

const database = include('/databaseConnection');



function getAllRestaurant(callback) {
	let sqlQuery = "SELECT restaurant_id, name, description FROM restaurant";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}

function getAllReview(id, callback) {
	let sqlQuery = "SELECT review_id, restaurant_id, reviewer_name, details, rating FROM review WHERE restaurant_id = :restaurantid";
	let params = {	
		restaurantid: id
	};
	database.query(sqlQuery, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}


function addRestaurant(postData, callback) {
	let sqlInsert = "INSERT INTO restaurant (restaurant_id, name, description) VALUES (:restaurant_id, :name, :description);";
	let params = {	
			name: postData.name,
			description: postData.description
		};
	console.log(sqlInsert)
	database.query(sqlInsert, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}

function addReview(postData, callback) {
	let sqlInsert = "INSERT INTO review (review_id, restaurant_id, reviewer_name, details, rating) VALUES (:review_id, :restaurant_id, :reviewer_name, :details, :rating);";
	console.log(sqlInsert);
	let params = {	
					reviewer_name: postData.reviewer_name,
					restaurant_id: postData.restaurant_id,
					details: postData.details,
					rating: postData.rating
				};
	database.query(sqlInsert, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}


// function addRestaurant(postData, callback) {
// 	let sqlInsertSalt = "INSERT INTO restaurant (restaurant_id, name, description) VALUES (:restaurant_id, :name, :description);";
// 	let params = {	
// 			name: postData.name,
// 			description: postData.description
// 		};
// 	console.log(sqlInsertSalt);
// 	database.query(sqlInsertSalt, params, (err, results, fields) => {
// 		if (err) {
// 			console.log(err);
// 			callback(err, null);
// 		}
// 		else {
// 			let insertedID = results.insertId;
// 			let updatePasswordHash = "UPDATE restaurant SET password_hash = sha2(concat(:password,:pepper,password_salt),512) WHERE restaurant_id = :restaurantID;"
// 			let params2 = {
// 				password: postData.password,
// 				pepper: passwordPepper,
// 				userId: insertedID
// 			}
// 			console.log(updatePasswordHash);
// 			database.query(updatePasswordHash, params2, (err, results, fields) => {
// 				if (err) {
// 					console.log(err);
// 					callback(err, null);
// 				}
// 				else {
// 					console.log(results);
// 					callback(null, results);
// 				}
// 			});
// 		}
// 	});
// }

// function deleteUser(webUserId, callback) {
// 	let sqlDeleteUser = "DELETE FROM web_user WHERE web_user_id = :userID";
// 	let params = {
// 		userID: webUserId
// 	};
// 	console.log(sqlDeleteUser);
// 	database.query(sqlDeleteUser, params, (err, results, fields) => {
// 		if (err) {
// 			callback(err, null);
// 		}
// 		else {
// 			console.log(results);
// 			callback(null, results);
// 		}		
// 	});	
// }

function deleteRestaurant(restaurant, callback) {
	let sqlDeleteRestaurant = "DELETE FROM restaurant WHERE restaurant_id = :restaurantID";
	let params = {
		restaurantID: restaurant
	};
	console.log(sqlDeleteRestaurant);
	database.query(sqlDeleteRestaurant, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});	
}

function deleteReview(restaurant, callback) {
	let sqlDeleteReview = "DELETE FROM restaurant WHERE restaurant_id = :restaurantID";
	let params = {
		restaurantID: restaurant
	};
	console.log(sqlDeleteReview);
	database.query(sqlDeleteReview, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});	
}

module.exports = {getAllRestaurant, addRestaurant, deleteRestaurant, getAllReview, addReview, deleteReview}
