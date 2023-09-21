

import { useActions } from "../../hooks/useActions";
import { useTypedSelectors } from "../../hooks/useTypedSelectors";
import { useEffect } from "react";
import "./roversPhotoComponent.scss"
import { Link } from "react-router-dom";
const RoversPhotoComponent = () => {
  const { data, loading, error } = useTypedSelectors((state) => state.RoversReducer);
  const { fetchRovers } = useActions();

  useEffect(() => {
    fetchRovers();
  }, []);

  return (
    <div className="roversPhotoComponent">
      <h1 className="roversPhotoComponentTitle">Rovers</h1>
      <div className="roversPhotoComponentWrapper">
      {Array.isArray(data.rovers) ? (
        data.rovers.map(item=> (
      <Link to={`/Rover photo/${item.name}`}
      style={{textDecoration: "none", color: "#ffffffb9"}}
      >   <p className="roversPhotoComponentItem">{item.name}</p> </Link> 
          ))):
          (
            <>
          </>
        )
      }
      </div>
    </div>
  );
};

export default RoversPhotoComponent;
