import React from 'react';

const Review = () => {
  return (
    <div className="container max-w-6xl mx-auto py-12">
      <h2 className="text-3xl text-slate-400 font-semibold mb-6">Customer Reviews</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {/* Review Card 1  */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
          <div className="my-4 items-center text-center justify-center ">
            <img className="w-20 h-20 rounded-full mx-auto " src="https://i.ibb.co/370zq8z/pexels-italo-melo-2379005.jpg" ></img>
          </div>
          <p className="text-slate-300 font-bold">John Doe</p>
          <p className="text-gray-300 mb-4">"Great product and excellent service. Will definitely buy again!"</p>
          <div className="flex items-center text-center justify-center">
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-gray-400">&#9733;</span>
            <span className="text-gray-400">&#9733;</span>
          </div>
        </div>

        {/* Review Card 2  */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-md text-center">
          <div className="my-4 items-center text-center justify-center ">
            <img className="w-20 h-20 bg-center bg-cover rounded-full mx-auto " src="https://i.ibb.co/52csHbn/pexels-brett-sayles-1073097.jpg" ></img>
          </div>
          <p className="text-slate-300 font-bold">Jane Smith</p>
          <p className="text-gray-400 mb-4">"Amazing experience! Fast shipping and top-notch quality."</p>
          <div className="flex items-center text-center justify-center">
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
          </div>
        </div>

        {/* Review Card 3  */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-md items-center text-center">
          <div className="my-4 items-center text-center justify-center ">
            <img className="w-20 h-20 rounded-full mx-auto " src="https://i.ibb.co/nk2bH1P/pexels-nathan-cowley-1300402.jpg" ></img>
          </div>
          <p className="text-slate-300 font-bold">Robert Johnson</p>
          <p className="text-gray-400 mb-4">"Highly recommended. The team is very responsive and helpful."</p>
          <div className="flex items-center text-center justify-center">
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-yellow-500">&#9733;</span>
            <span className="text-gray-400">&#9733;</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Review;