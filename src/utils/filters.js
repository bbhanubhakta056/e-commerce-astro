export function filterProducts(products, { category, search, sort }) {
  let filtered = [...products];

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some(tag => tag.includes(query)) ||
      p.material.toLowerCase().includes(query)
    );
  }

  if (sort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'name-desc') {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === 'price-asc') {
    filtered.sort((a, b) => parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, '')));
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, '')));
  }
  // default: newest (by id)

  return filtered;
}

export function getRelatedProducts(product, allProducts, limit = 4) {
  if (!product.relatedProductIds) return [];
  return product.relatedProductIds
    .map(id => allProducts.find(p => p.id === id))
    .filter(Boolean)
    .slice(0, limit);
}