
exports.handler = async function(event, context) {
  const res = await fetch('https://api.football-data.org/v4/matches', {
    headers: { 'X-Auth-Token': 'd0fdc3856cd14b9a856ab1b473b0f12d' }
  });
  const data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
