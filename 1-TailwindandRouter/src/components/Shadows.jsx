function Shadows() {
  return (
    <>
      <div className="grid grid-cols-2  gap-6">
        <div className="shadow-sm bg-gray-200 rounded-lg">shadow-sm</div>
        <div className="shadow bg-gray-200 rounded-lg">shadow</div>
        <div className="shadow-md bg-gray-200 rounded-lg">shadow-md</div>
        <div className="shadow-lg bg-gray-200 rounded-lg">shadow-lg</div>
        <div className="shadow-xl bg-gray-200 rounded-lg">shadow-xl</div>
        <div className="shadow-2xl bg-gray-200 rounded-lg">shadow-2xl</div>
      </div>
    </>
  );
}

export default Shadows;
