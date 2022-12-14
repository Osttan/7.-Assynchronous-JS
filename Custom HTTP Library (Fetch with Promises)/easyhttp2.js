/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Andre Ostan
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    });
  }

  // Make HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    });
  }

  // Make and HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then(res => res.json())
        .then(() => console.log("Resource Deleted"))
        .catch(err => console.log(err));
    });
  }
}
