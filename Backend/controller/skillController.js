// backend/controllers/skillController.js
const skills = require("../data/skillData");

const getSkillRedirect = (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const matchedSkill = skills.find(skill =>
    query.includes(skill.name)
  );
  // console.log(matchedSkill)

  if (matchedSkill) {
    return res.json({ success: true, redirectUrl: matchedSkill.url });
  }

  return res.status(404).json({ success: false, message: "Skill not found" });
};

module.exports = { getSkillRedirect };
