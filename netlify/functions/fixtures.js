
let cachedDate = null;
let cachedData = null;

exports.handler = async function(event, context) {
  const today = new Date().toISOString().slice(0, 10);

  if (cachedDate === today && cachedData) {
    return {
      statusCode: 200,
      body: JSON.stringify(cachedData),
    };
  }

  const response = await fetch(`https://v3.football.api-sports.io/fixtures?date=${today}`, {
    headers: { 'x-apisports-key': 'ce366e4369175addc3df7952684299e1' }
  });
  const data = await response.json();

  cachedDate = today;
  cachedData = data;

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
