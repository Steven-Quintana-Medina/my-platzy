const single = (resource) => ({
  id: resource.id,
  name: resource.name,
  price: resource.price,
  description: resource.description,
  category: resource.category.category || "",
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};
