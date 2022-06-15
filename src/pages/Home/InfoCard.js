
const InfoCard = ({info}) => {
    const {img, title, body , bgClass} = info;
    // console.log(title);
   return (
      <div className={`card lg:card-side shadow-xl p-4 ${bgClass}`}>
         <figure>
            <img
               src={img}
               alt="Album"
            />
         </figure>
         <div className="card-body ">
            <h2 className="card-title">{title}</h2>
            <p>{body}</p>
         </div>
      </div>
   );
};

export default InfoCard;
