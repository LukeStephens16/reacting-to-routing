import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = props => {
  console.log(props);

  return (
      <div className="d-flex justify-content-center mt-4">
      <div className="card w-50 text-center">
        <div className="card-body formColor cardBorder">
          <h3 className="card-title formColor">{props.value.name}</h3>
          <p className="card-text formColor">{props.value.age}</p>
          <Link className="btn btn-primary" to={`/people/${props.value.id}`}>View Details</Link>
        </div>
      </div>
      </div>

  );
};

export default PeopleCard;