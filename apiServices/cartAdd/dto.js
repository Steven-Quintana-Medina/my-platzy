const single = (resource) => ({
  id: resource.product.id,
  name: resource.product.name,
  price: resource.product.price,
  description: resource.product.description,
  category: resource.product.category.category,
});

const multiple = (resources) => resources.map((resource) => single(resource));

module.exports = {
  single,
  multiple,
};
