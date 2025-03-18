exports.handler = async function (event, context) {
  //console.log("Request: \n" + JSON.stringify(event, null, 2));
  const body = json.loads(event["body"]);
  console.log("Request: \n" + body);
  const name = body.get("name", "there");
  const res = {"message" : `hi '${name}'. we are ale!!!!!!!!!!!!!!!!!!!!`}
  console.log("Response: \n" + res);
  return message;
};
