const Course = require("./model");
const Category = require("../category/dao");
const category = require("../category/model");

module.exports = {
  async createCourses(data, category) {
    course = await Course.create(data);
    category = await Category.createCategory(category);

    course.setCategory(category);
  },

  async getCourses() {
    return await Course.findAll({
      include: [{ model: category, require: true }],
    });
  },

  async getCourse(id){
    return course = await Course.findOne({where:{id}});
  }
};
