exports.handler = async function (event, context) {
  //console.log("Request: \n" + JSON.stringify(event, null, 2));
  
  const body = JSON.parse(event.body);
  console.log("Request: \n" + body);

  const name = body?.name || "there";
  const response = {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: `hi, ${name}. we are ale!!!`}),
  }
  console.log("Response: \n" + response);
  return response;
};
