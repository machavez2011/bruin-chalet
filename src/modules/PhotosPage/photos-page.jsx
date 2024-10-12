import { PhotosWrapper } from "./photos-page-styles.js";

const PhotosPage = () => {
  return (
    <PhotosWrapper>
      <p className="d-inline-flex gap-1">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-bs-target
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
    </PhotosWrapper>
  );
};

export default PhotosPage;
