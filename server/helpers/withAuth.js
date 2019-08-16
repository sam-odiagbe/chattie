const withAuth = (req, res, next) => {
  const cookie =
    req.body.ssid ||
    req.query.ssid ||
    req.headers["x-access-ssid"] ||
    req.cookies.ssid;
  if (!cookie) {
    res.json({
      error: true,
      user: null
    });
  } else {
    req.ssid = cookie;
    next();
  }
};

module.exports = withAuth;
