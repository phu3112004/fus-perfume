var q = require("q");
var db = require("../common/database");
var conn = db.getConnection();

function getAllProducts() {
  var defer = q.defer();
  var query = conn.query("SELECT * FROM product", (err, result) => {
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(result);
    }
  });
  return defer.promise;
}
function getAllProductsBySex(sex) {
  var defer = q.defer();
  var queryStr = "SELECT * FROM product";

  if (sex === "men") {
    queryStr += ' WHERE sex="men" OR sex="unisex"';
  } else if (sex === "women") {
    queryStr += ' WHERE sex="women" OR sex="unisex"';
  }

  var query = conn.query(queryStr, (err, result) => {
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(result);
    }
  });

  return defer.promise;
}

module.exports = {
  getAllProducts,
  getAllProductsBySex,
};
