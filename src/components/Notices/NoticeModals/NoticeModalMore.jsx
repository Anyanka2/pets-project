import {
  Content,
  Image,
  ImageContainer,
  ContainerInfo,
  Title,
  Type,
  List,
  ItemWrap,
  Item,
  CommentAccent,
  Comment,
  ContactLink,
  AddToFavBtn,
  BtnContainer,
  HeartIcon,
  ItemWrapHover,
} from "./NoticeModal.styled";

import { useDispatch } from "react-redux";
import { getOneNotice } from "../../../redux/notices/operationsNotices";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../../redux/user/userSelectors";
import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

export const NoticeModalMore = ({
  noticeId,
}) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  const [infoOnePet, setInfoOnePet] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOneNotice = async () => {
      try {
        if (noticeId) {
          const response = await dispatch(getOneNotice(noticeId));
          setInfoOnePet(response.payload);
        }
        return;
      } catch (error) { }
    };
    fetchOneNotice();
  }, [dispatch, noticeId]);

  const isAuthorized = useSelector(selectToken);
  const handleClick = () => {
    if (!isAuthorized) {
      toast.info("You need to log in!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      
    }
  }

      return (
      <>
        <Content>
          <ContainerInfo>
            <ImageContainer>
              <Image src={infoOnePet.imageUrl} alt="dog" />
              <Type>{infoOnePet.category}</Type>
            </ImageContainer>
            <div style={{ width: "321px", padding: "0 12px" }}>
              <Title>{infoOnePet.title}</Title>
              <div style={{ display: "flex", gap: "50px" }}>
                <List>
                  <Item>Name: </Item>
                  <Item>Birthday: </Item>
                  <Item>Type: </Item>
                  {infoOnePet.price !== "0$" && infoOnePet.price !== "0" && <Item>Price: </Item>}
                  <Item>Place: </Item>
                  <Item>The sex: </Item>
                  <Item>Email: </Item>
                  <Item>Phone: </Item>
                </List>

                <List>
                  <ItemWrap>{infoOnePet.name}</ItemWrap>
                  <ItemWrap>{formatDate(infoOnePet.birthday)}</ItemWrap>
                  <ItemWrap>{infoOnePet.type}</ItemWrap>
                  {infoOnePet.price !== "0$" && infoOnePet.price !== "0" && (
                      <ItemWrap>{infoOnePet?.price || 0}</ItemWrap>
                  )}
                  <ItemWrap>{infoOnePet.location}</ItemWrap>
                  <ItemWrap>{infoOnePet.sex}</ItemWrap>
                  <ItemWrap>
                    <ItemWrapHover>
                      <a href={`mailto:${infoOnePet.email}`}>
                        {infoOnePet.email}
                      </a>
                    </ItemWrapHover>
                  </ItemWrap>
                  <ItemWrap>
                    <ItemWrapHover>
                      <a href={`tel:+${infoOnePet.phone}`}>{infoOnePet.phone}</a>
                    </ItemWrapHover>
                  </ItemWrap>
                </List>
              </div>
            </div>
          </ContainerInfo>
          <Comment>
            <CommentAccent>Comments:&nbsp;</CommentAccent>
            {infoOnePet.comments}
          </Comment>
          <BtnContainer>
            {/* <ToastContainer /> */}
            <AddToFavBtn type="button" onClick={handleClick}>
              <span>Add to</span>
              <HeartIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.331 12.047 12 20l7.669-7.953A4.804 4.804 0 0 0 21 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 0 0-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 0 0 7.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333Z"
                  />
                </svg>
              </HeartIcon>
            </AddToFavBtn>
            <ContactLink href={`tel:${infoOnePet.phone}`}>Contact</ContactLink>
          </BtnContainer>
        </Content>
      </>
    );
  }
