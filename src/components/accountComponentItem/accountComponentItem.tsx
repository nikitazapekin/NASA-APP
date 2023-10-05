
import "./accountComponentItem.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../addAvatar/addAvatar";

interface AccountComponentItemProps {
  id: string | undefined;
  idd: string | undefined;
}

const AccountComponentItem: React.FC<AccountComponentItemProps> = ({
  id,
  idd,
}: AccountComponentItemProps) => {
  const auth = useContext(AuthContext);

  const handleSubmit = () => {
    auth.logout();
  };

  return (
    <div className="accountComponentItem">

     {/* <Avatar /> */}
     
      <div className="accountComponentItemBar">
        <div className="accountComponentItemBarItem">
          <img src="" alt="logo" className="logoOfUser" />
        </div>
        <div className="accountComponentItemBarItem">My data</div>
        <div className="accountComponentItemBarItem">My friends</div>
        <div className="accountComponentItemBarItem">My subscriptions</div>
        <div onClick={handleSubmit} className="accountComponentItemBarItem">
          Exit
        </div>
      </div>
    </div>
  );
};

export default AccountComponentItem;
