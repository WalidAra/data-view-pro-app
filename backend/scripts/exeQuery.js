const prisma = require("../config/primsa");

const exeQuery = async () => {
  try {
    console.log("====================================");

    await prisma.provider.createMany({
      data: [{ name: "direct" }, { name: "github" }],
    });

    console.log("done !");
    console.log("====================================");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = exeQuery;
