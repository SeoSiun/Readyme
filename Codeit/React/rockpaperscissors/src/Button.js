function Button({ className, onClick, src }){
  return <img className={className} src={src} alt="초기화" onClick={onClick}/>;
}

export default Button;