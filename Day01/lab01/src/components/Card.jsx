const ProductCard = ({ name, price, image }) => {
  const handleClick = () => {
    console.log(`Added ${name} to cart`);
    console.log(`Price: ${price}LE`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-green-500 font-medium m-1">${price}</p>
        <button
          onClick={handleClick}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;