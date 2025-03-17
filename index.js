exports.handler = async function (event, context) {
  console.log("Request: \n" + JSON.stringify(event, null, 2));
  const name = event.name || "there"
  const message = `hi '${name}'. we are ale!!!!!!!!!!!!!!!!!!!!`
  console.log("Response: \n" + message);
  return message;
};
