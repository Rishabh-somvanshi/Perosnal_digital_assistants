function ProfileCard({ title, handle, image, description }) {
  // const {title,handle} =props;

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={image} alt={`${title} logo`} />
          </figure>
        </div>

        <div className="card-content">
          <div className="media-content"></div>
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
          <p className="subtitle is-6">{description}</p>
        </div>

        <div className="content"></div>
      </div>
      <h1>Profile Card</h1>
    </div>
  );
}

export default ProfileCard;
