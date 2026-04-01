const ProductCard = ({ name, price, image }) => {
  const clicked = () => {
    alert(`Added ${name} to cart
   Price: ${price} LE `);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg w-full font-semibold text-gray-800">{name}</h2>
        <p className="text-blue-700 font-bold mt-1">{price} LE</p>
        <button
          onClick={clicked}
          className="mt-4 w-full bg-blue-200 text-white p-2 rounded-xl hover:bg-blue-800 hover:text-black "
        >
          Look at Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
