import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, image }) => {
    return (
        <div className="col-12 mt-3">
        <div className="card border-0">
          <div className="row g-0">
            <div className="col-4">
              <img src={image} className="img-fluid rounded" alt={title} />
            </div>
            <div className="col-8">
              <div className="card-body p-2">
                <h5 className="card-title">{title}</h5>
                <p className="card-text mb-1">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">
                    <small className="text-muted">${price}</small>
                  </p>
                  <button type="button" className="btn btn-primary btn-sm rounded-pill">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MenuItem;
