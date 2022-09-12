import styled from "styled-components";
import ImageBlocks from "../components/review/ImageBlocks";
import Header from "../components/common/Header";
import {useEffect, useState} from "react";
import * as Api from "../api";

// const DUMMY_DATA = [{
//   img_URL: snippet.thumbnails.medium.url,
//   title: snippet.title,
//   link_URL: id.videoId,
// },
// ]
function Review() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedModal, setClickedModal] = useState({id: "", isModal: false});
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const result = await getYoutube();
      const reviewData = result.map(({snippet, id}) => {
        return {
          img_URL: snippet.thumbnails.medium.url,
          title: snippet.title,
          link_URL: id.videoId,
        };
      });
      console.log("data", reviewData);
      setData(reviewData);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  async function getYoutube() {
    const res = await Api.get("/api/youtube");
    const items = res.data.items;
    return items;
  }

  return (
    <>
      <Container>
        <Header isAbout={true} />
        <SocialMenu>
          <li id="all">All</li>
          <li id="blog">Blog</li>
          <li id="youtube">Youtube</li>
        </SocialMenu>
        {!isLoading && (
          <ImageBlocks
            data={data}
            clickedModal={clickedModal}
            setClickedModal={setClickedModal}
          />
        )}
      </Container>
    </>
  );
}

const Container = styled.section`
  position: relative;
  width: 1440px;
  margin: 0 auto;
  border: 1px solid black;
`;

const SocialMenu = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 172px;
  margin-bottom: 44px;
  gap: 44px;
  font-weight: bold;
  cursor: pointer;
  font-size: 24px;

  li:hover {
    opacity: 0.5;
  }

  #all {
    color: red;
  }
`;
export default Review;
