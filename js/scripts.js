const url = "https://skookum-test-api.herokuapp.com/api/v1/books";
xmlRequest.makeRequest(url)
  .catch((error) => {
      console.log(error);
  });
