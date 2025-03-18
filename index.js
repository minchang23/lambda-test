exports.handler = async function (event, context) {
  console.log("Request: \n" + JSON.stringify(event, null, 2));
  
  let name = "there";

  if (event.body) {
    const body = JSON.parse(event.body);
    name = body.name || name;
  } else if (event.queryStringParameters) {
    name = event.queryStringParameters.name || name;
  } 
  
  const response = {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: `hi, ${name}. we are ale!!!`}),
  }
  console.log("Response: \n" + JSON.stringify(response));
  return response;
};
