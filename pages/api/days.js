export default (req, res) => {
  const today = new Date();
  const lastDay = process.env.LAST_DAY
    ? Date.parse(process.env.LAST_DAY)
    : new Date();
  const days = Math.floor((today - lastDay) / (24 * 60 * 60 * 1000));

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ days }));
};
