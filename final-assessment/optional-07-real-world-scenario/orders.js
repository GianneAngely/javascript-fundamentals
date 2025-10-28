// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0); // Menghitung total harga
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu' // Status default adalah 'Menunggu'
  };
  orders.push(newOrder); // Menambah pesanan baru ke array orders
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status; // Mengubah status pesanan
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // Hanya pesanan yang statusnya 'Selesai'
    .reduce((sum, order) => sum + order.totalPrice, 0); // Menghitung total pendapatan
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id); // Menghapus pesanan berdasarkan id
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
