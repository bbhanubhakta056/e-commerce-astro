export function formatPrice(price) {
  return `रू. ${price}`;
}

export function formatPhone(phone) {
  return phone.replace(/(\+977)(\d{5})(\d{5})/, '$1 $2 $3');
}

export function getStockLabel(status) {
  const labels = {
    'in-stock': { text: 'In Stock', color: 'bg-green-100 text-green-800' },
    'limited-stock': { text: 'Only Few Left', color: 'bg-amber-100 text-amber-800' },
    'made-to-order': { text: 'Made to Order', color: 'bg-blue-100 text-blue-800' },
    'out-of-stock': { text: 'Out of Stock', color: 'bg-red-100 text-red-800' },
  };
  return labels[status] || labels['in-stock'];
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}