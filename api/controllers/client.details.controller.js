const ClientDetails = require("../../models/ClientDetails");

const addClientDetails = async (req, res) => {
  try {
    let { theme, country, phoneNumber, city, desc, Objectives, user } =
      req.body;
    let newDetails = new ClientDetails({
      theme,
      country,
      phoneNumber,
      city,
      desc,
      Objectives,
      user,
    });
    let result = await newDetails.save();
    return res.status(200).json({
      result: result,
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

const getClientDetails = async (req, res) => {
  let { id } = req.params;
  try {
    let result = await ClientDetails.findOne({ user: id });
    res.status(200).json({
        result:result, 
        success:true 
    })
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addClientDetails,
  getClientDetails,
};
