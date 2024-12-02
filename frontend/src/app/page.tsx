import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please login or sign up to continue.
        </p>
        <div className="flex justify-center gap-4">
        <Link href="/login">
  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    Login
  </button>
</Link>
<Link href="/signup">
  <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
    Signup
  </button>
</Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
