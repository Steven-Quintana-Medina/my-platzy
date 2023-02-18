const single = (resource) => ({
  id: resource.course.id,
  name: resource.course.name,
  price: resource.course.price,
  description: resource.course.description,
  category: resource.course.category.category,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};
