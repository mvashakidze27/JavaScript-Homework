const get = require("fetch").fetchUrl;

class Countries {
  baseUrl;
  constructor(url) {
    if (typeof url !== "string")
      throw new TypeError("The parameter passed in Url  is not a string");

    this.baseUrl = url;
  }

  send(region) {
    if (typeof region !== "string")
      throw new TypeError("The parameter passed in send is not a string");

    return new Promise((resolve, reject) => {
      const endpoint = "${this.baseUrl}?region=${region}";
      get(endpoint, function (err, meta, body) {
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
}

const url = "https://api.first.org/data/v1/countries";
const countries = new Countries(url);

(async () => {
  try {
    const data = await countries.send("africa");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
