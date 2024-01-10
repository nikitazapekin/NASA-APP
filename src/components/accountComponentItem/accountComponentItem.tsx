
import "./accountComponentItem.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../addAvatar/addAvatar";
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../store/action-creator/getUserData";
import { useActions } from "../../hooks/useActions";
import Spinner from "../spinner/spinner";
interface AccountComponentItemProps {
  id: string | undefined;
  idd: string | undefined;
}

const AccountComponentItem: React.FC<AccountComponentItemProps> = ({
  id,
  idd,
}: AccountComponentItemProps) => {
  const {fetchUserData} = useActions()
  const {data, loading, error} = useTypedSelectors(state=> state.GetUserDataReducer)
  const dispatch= useDispatch()
  const auth = useContext(AuthContext);
  useEffect(()=> {
console.log("DATAAAAAAAAAAAAAAAAAA"+ data.url)
  }, [data])
useEffect(()=> {
fetchUserData()
}, [])
  const handleSubmit = () => {
    auth.logout();
  };
if(loading){
 // return <Spinner />
}
  return (
    <div className="accountComponentItem">

   <Avatar  /> 
     
      <div className="accountComponentItemBar">
        <div className="accountComponentItemBarItem">My data</div>
        <div className="accountComponentItemBarItem">My subscriptions</div>
        <div onClick={handleSubmit} className="accountComponentItemBarItem">
          Exit
        </div>
      </div>
    </div>
  );
};

export default AccountComponentItem;
