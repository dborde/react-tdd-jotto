import React from 'react';

const Input = (props) => {
  return (
    <div data-test="component-input" className="form-group">
      <input type="text" className="form-control mt-2" placeholder="Enter your word"></input>
      <button type="submit" className="btn btn-primary mt-2">Submit</button>
    </div>    
  )
}

export default Input;
