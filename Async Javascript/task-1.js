const get = require("fetch").fetchUrl;

const url = "https://api.first.org/data/v1/countries";

function send(url) {
  return new Promise((resolve, reject) => {
    get(url, function (err, meta, body) {
      if (err) {
        reject(err.message);
      }
      if (meta.status === 200) {
        resolve(JSON.parse(body).data);
      } else {
        reject("We have error, status code ${meta.status}");
      }
    });
  });
}

send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
