import React from 'react';
import Review from '../component/Reviews/page';
import Footer from '../component/footer/page';
import StarRating from '../component/rating/page';

const about = () => {
    return (
        <div>
          <Review></Review>
          {/* <StarRating></StarRating> */}
          <Footer></Footer>
        </div>
    );
};

export default about;