import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  // const goBack = () => navigate(-1);

  return (
    <section className="flex flex-col justify-center items-center px-4 py-8">
      <h2 className="font-semibold text-2xl">Unauthorized!</h2>
      <br />
      <p className="text-lg">You are not authorized to access this page.</p>
      <div className="flexGrow mt-2">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="font-semibold text-3xl underline"
        >
          Go to Home Page
        </button>
      </div>
    </section>
  );
};

export default Unauthorized;
