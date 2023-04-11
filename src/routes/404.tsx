// import { useHistory } from 'react-router-dom';

export default function Notfound() {
  // const history = useHistory();

  const handleGoBack = () => {
    // history.goBack();
    alert("hey there");
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="text-center">
        <img
          src="https://cdn.shopify.com/s/files/1/1061/1924/products/Relieved_Emoji_2_large.png?v=1571606092"
          className="w-10 mx-auto mb-4"
          alt="Example Image"
        />
        <h3 className="text-lg">404</h3>
        <p className="text-sm">
          Sorry! We couldn't find what you were looking for.
        </p>
        <button
          onClick={handleGoBack}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14 18a1 1 0 0 1-1-1V7.414l-5.293 5.293a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L15 7.414V17a1 1 0 0 1-1 1z" />
          </svg>
          <span>Go Back</span>
        </button>
      </div>
    </section>
  );
}
