import { PhotosWrapper, ButtonWrapper } from "./photos-page-styles.js";

const PhotosPage = () => {
  return (
    <PhotosWrapper>
      <div className="d-inline-flex gap-1">
        <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
        <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
        <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
        <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
        <ButtonWrapper>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            See more
          </button>
        </ButtonWrapper>
      </div>
      <div className="collapse" id="collapseExample">
        <div className="d-inline-flex gap-1">
          <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
          <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
          <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
          <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
        </div>
      </div>
    </PhotosWrapper>
  );
};

export default PhotosPage;
