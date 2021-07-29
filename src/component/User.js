

function User({ name, src, auth, className }){
  return(
    <div className={className}>
      <img className="User-image" src={src} alt="User"/>
      <h2 className="User-name">{name}</h2>
      <h4 className="User-auth">{auth}</h4>
    </div>
  );
}

export default User;