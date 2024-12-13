function Home() {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">
        Unlimited movies, TV shows, and more
      </h1>
      <p className="text-xl">Starts at USD 2.99. Cancel anytime.</p>
      <p className="text-lg">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Address"
          className="w-full p-2 mt-2 border bg-black bg-opacity-85 text-white placeholder-white rounded-lg h-16"
        />
        <button
          type="submit"
          className="w-1/2 p-2 mt-2 h-16 bg-red-500 text-white font-bold rounded-lg hover:bg-red-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
