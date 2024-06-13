const prisma = require("../../config/primsa");
const bcrypt = require("bcrypt");
const destructUser = require("../../scripts/destructUser");
const createToken = require("../../helpers/token");
const { Error500 } = require("../../constants");
const saltOrRounds = 10;
require("dotenv").config();

const Auth = {
  Login: async (req, res) => {
    const { email, password, recall } = req.body;
    try {
      
      const isUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!isUser) {
        return res.status(404).json({
          message: "User Not Found",
          status: false,
          data: {
            userNotFound: true,
          },
        });
      }

      const isMatch = await bcrypt.compare(password, isUser.password);

      if (!isMatch) {
        return res.status(201).json({
          message: "Wrong credentials",
          status: false,
          data: {
            wrongCred: true,
          },
        });
      }

      const updatedUser = await prisma.user.update({
        where: {
          id: isUser.id,
        },
        data: {
          lastLoginAt: new Date(Date.now()),
        },
      });

      const user = destructUser(updatedUser);
      const token = createToken(user, recall);

      return res.status(200).json({
        message: "Login Success",
        status: true,
        data: {
          ...user,
          token,
        },
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json(Error500);
    }
  },

  Register: async (req, res) => {
    const { email, password, username, recall } = req.body;

    try {
      const directProvider = await prisma.provider.findFirst({
        where: {
          name: "direct",
        },
      });

      const isUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (isUser) {
        return res.status(204).json({
          message: "User Already Exist",
          status: false,
          data: null,
        });
      }

      const hashedPW = await bcrypt.hash(password, saltOrRounds);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPW,
          username,
          image: "",
          providerId: directProvider.id,
        },
      });

      const user = destructUser(newUser);
      const token = createToken(user.id, recall);

      return res.status(200).json({
        message: "Created new user successfully",
        status: true,
        data: {
          ...user,
          token,
        },
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json(Error500);
    }
  },
};

module.exports = Auth;
