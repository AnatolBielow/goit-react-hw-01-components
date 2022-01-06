import { BsFillRecordFill } from "react-icons/bs";
import { ListItem, Status, Avatar, FriendName } from "./FriendListItem.styled";

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;

  return (
    <ListItem>
      <Status isOnline={isOnline}>
        <BsFillRecordFill size={24} />
      </Status>
      <Avatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
}
