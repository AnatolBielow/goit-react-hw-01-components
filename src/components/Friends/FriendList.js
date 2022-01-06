import FriendListItem from "./FriendListItem";
import { List } from "./FriendList.styled";
export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </List>
  );
}
