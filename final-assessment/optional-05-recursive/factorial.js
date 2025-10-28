function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;  // Basis dari rekursi
    } else {
      return n * factorial(n - 1);  // Panggilan rekursif
    }
  }
  
  // Jangan hapus kode di bawah ini!
  export default factorial;
  
