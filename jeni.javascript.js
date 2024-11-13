function calculateTotal() {
    // Ambil nilai produk dan harga dari dropdown
    const productSelect = document.getElementById('product');
    const selectedProduct = productSelect.options[productSelect.selectedIndex];
    const productPrice = parseInt(selectedProduct.getAttribute('data-price'));
    
    // Ambil nilai jumlah pembelian
    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Hitung total harga
    const totalPrice = productPrice * quantity;
    
    // Tampilkan total harga di layar
    document.getElementById('total-price').textContent = 'Rp ' + totalPrice.toLocaleString();
}
