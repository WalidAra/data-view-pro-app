const prisma = require("../../config/primsa");
const destructUser = require("../../scripts/destructUser");
const createToken = require("../../helpers/token");
const { Error500 } = require("../../constants");
require("dotenv").config();

const Github = {
  Redirect: (req, res) => {
    try {
      const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
      const redirectUri = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user`;
      return res.redirect(redirectUri);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json(Error500);
    }
  },

  Callback: async (req, res) => {
    try {
      const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
      const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

      const { code } = req.query;
      const tokenResponse = await axios.post(
        "https://github.com/login/oauth/access_token",
        null,
        {
          params: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code,
          },
          headers: {
            Accept: "application/json",
          },
        }
      );

      const { access_token } = tokenResponse.data;
      const userResponse = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log("====================================");
      console.log(userResponse);
      console.log("====================================");
      
      res.status(200).json({
        status: true,
        message: "Authentication successful",
        data: null,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json(Error500);
    }
  },
};

module.exports = Github;
