import styled from "styled-components";
function PhotoBlock({ title, imgURL, id }) {
  return (
    <Photo id={id}>
      <img src={imgURL} alt="사진" />
      <p>{title}</p>
    </Photo>
  );
}

const Photo = styled.div`
  position: relative;
  border-radius: 20px;
  grid-column: ${({ id }) =>
    id === "width_long" ? "3/5" : id === "height_long" ? "1/2" : "0"};
  grid-row: ${({ id }) =>
    id === "width_long" ? "2/3" : id === "height_long" ? "1/3" : "0"};
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  img {
    width: 100%;
  }

  p {
    position: absolute;
    bottom: 24px;
    left: 24px;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
  }
`;

export default PhotoBlock;
