import React, { useState } from "react";
import "./accountComponentItem.scss";
import Avatar from "../addAvatar/addAvatar";
import MyFavouritePhotos from "../favouritePhotos/favouritePhotos";
import { useActions } from "../../hooks/useActions";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "../spinner/spinner";
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import MySubscribtionsComponent from "../MySubscribtionsComponent/MySubscribtionsComponent";
interface AccountComponentItemProps {
  id: string | undefined;
  idd: string | undefined;
}
const AccountComponentItem: React.FC<AccountComponentItemProps> = ({
  id,
  idd,
}: AccountComponentItemProps) => {
  const { fetchUserData } = useActions();
  const [activeComponent, setActiveComponent] = useState<React.ReactNode | null>(null);
  const { data, loading, error } = useTypedSelectors((state) => state.GetUserDataReducer);
  const auth = useContext(AuthContext);
  const handleSubmit = () => {
    auth.logout();
  };
  const handleClick = (event: any) => {
    const clickedItem = event.target.innerText;
    switch (clickedItem) {
      case "My data":
        setActiveComponent(<Avatar />);
        break;
      case "My subscriptions":
    
        setActiveComponent(<MySubscribtionsComponent />);
        break;
      case "My favourite photos":
   
        setActiveComponent(<MyFavouritePhotos />);
        break;
      default:
        setActiveComponent(null);
        break;
    }
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="accountComponentItem">
      <div className="accountComponentItemBar">
        <div   className="accountComponentItemBarItem" onClick={handleClick}>
          My data
        </div>
        <div  className="accountComponentItemBarItem" onClick={handleClick}>
          My subscriptions
        </div>
        <div  className="accountComponentItemBarItem" onClick={handleClick}>
          My favourite photos
        </div>
        <div onClick={handleSubmit} className="accountComponentItemBarItem">
          Exit
        </div>
      </div>

     {activeComponent}
    </div>
  );
};

export default AccountComponentItem;
 