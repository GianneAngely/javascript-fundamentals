function fibonacci(n) {
    if (n === 0) {
      return 0;  // Basis pertama
    } else if (n === 1) {
      return 1;  // Basis kedua
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);  // Panggilan rekursif
    }
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  
