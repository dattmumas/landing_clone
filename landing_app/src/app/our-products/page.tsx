export default function OurProducts() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-700 mb-4">
          Explore our range of innovative products designed to enhance your
          experience.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
}
