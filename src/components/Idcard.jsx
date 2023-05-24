const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt="foto"/>
      <ul>
        <li>
          <strong>First name:</strong> {props.firstName}
        </li>
        <li>
          <strong>Last name:</strong> {props.lastName}
        </li>

        <li>
          <strong>Gender:</strong> {props.gender}
        </li>

        <li>
          <strong>Height:</strong> {props.height}
        </li>

        <li>
          <strong>Birth:</strong> {props.birth.toLocaleString()}
        </li>
      </ul>
    </div>
  );
};

export default IdCard;
