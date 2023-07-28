import React, { useState } from 'react';

const PurchasePage = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchaseSummary, setPurchaseSummary] = useState(null);

  const stockOptions = [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'MSFT', name: 'Microsoft Corporation' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    // Add more stock options as needed
  ];

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

//   const handlePurchase = () => {
//     // Perform the purchase logic here (e.g., send API request, update user's balance, etc.)
//     // For this example, we'll just display a summary of the purchase details.
//     const selectedProductName = stockOptions.find((stock) => stock.symbol === selectedProduct)?.name || '';
//     const summary = {
//       product: selectedProductName,
//       quantity: quantity,
//     };
//     setPurchaseSummary(summary);
//   };

  return (
    <div>
      <h2>Product Purchase</h2>
      <div>
        <label>Select a Product:</label>
        <select value={selectedProduct} onChange={handleProductChange}>
          <option value="">Select a product</option>
          {stockOptions.map((stock) => (
            <option key={stock.symbol} value={stock.symbol}>
              {stock.name} ({stock.symbol})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
        //   onChange={handleQuantityChange}
          placeholder="Enter quantity"
        />
      </div>
      <div>
        <button>Purchase</button>
      </div>
      {purchaseSummary && (
        <div className="purchase-summary">
          <h3>Purchase Summary</h3>
          <p>Product: {purchaseSummary.product}</p>
          <p>Quantity: {purchaseSummary.quantity}</p>
          {/* Display more purchase details here as needed */}
        </div>
      )}
    </div>
  );
};  

export default PurchasePage;
