import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rat: 1
    };
  }
 
 
 
  render() {
    const {rat} = this.props;
    
    return (                
      <div>
        
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rat}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}
 

 export default Rating;