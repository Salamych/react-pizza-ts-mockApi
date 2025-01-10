import ContentLoader from "react-content-loader";

export default function Skeleton(){
  return ( 
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="135" r="125" /> 
    <rect x="0" y="278" rx="10" ry="10" width="280" height="27" /> 
    <rect x="0" y="321" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="429" rx="10" ry="10" width="92" height="27" /> 
    <rect x="122" y="418" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
  );
}




