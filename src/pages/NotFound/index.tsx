import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>Page you're looking for are not found</i>
      </p>
      <button
        className="bg-gray-600 px-2 py-1 rounded mt-4 text-white"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default NotFound;
