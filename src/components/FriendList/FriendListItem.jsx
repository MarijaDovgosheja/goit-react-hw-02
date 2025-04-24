import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(
          css.status,
          isOnline === true && css.online,
          isOnline === false && css.offline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
{
  /* <p className={`${isOnline ? css.online : css.offline}`}>
        {isOnline && "Online"}
        {!isOnline && "Offline"} */
}
