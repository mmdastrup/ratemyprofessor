import React, { Component } from 'react';

class Highlights extends Component {
   render() {
       return (
           <div>
               <div className="highlights">
               <h1>What students are saying...</h1>
               <div className="highlightsWapper">
                   <div className="highlightedReview">
                       “Professor X at the School for the Gifted is the best teacher I’ve EVER had!!”
                   </div>
                   <div className="highlightedReview">
                       “DO NOT TAKE BIOLOGY FROM MR. ROBERTS!!!”
                   </div>
                   <div className="highlightedReview">
                       “Mrs. Meyers is the NICEST teacher you’ll find, but maybe not the best at teaching.”
                   </div>
                   </div>
               </div>
           </div>
       );
   }
}

export default Highlights;