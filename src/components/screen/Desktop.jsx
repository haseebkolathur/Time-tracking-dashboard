import React, {useState} from 'react'
import jeremy from "../../assets/images/image-jeremy.png"
import work from "../../assets/images/icon-work.svg"
import play from "../../assets/images/icon-play.svg"
import study from "../../assets/images/icon-study.svg"
import exercise from "../../assets/images/icon-exercise.svg"
import social from "../../assets/images/icon-social.svg"
import self from "../../assets/images/icon-self-care.svg"
import dot from "../../assets/images/icon-ellipsis.svg"
import styled from 'styled-components'

export default function Desktop() {
    const [clickedData, setClickedData] = useState("daily")
    const data = [
        {
          image: work,
          title: "Work",
          background: "hsl(15, 100%, 70%)",
          timeframes: {
            daily: {
              current: 5,
              previous: 7
            },
            weekly: {
              current: 32,
              previous: 36
            },
            monthly: {
              current: 103,
              previous: 128
            }
          }
        },
        {
          image: play, 
          title: "Play",
          background: "hsl(195, 74%, 62%)",
          timeframes: {
            daily: {
              current: 1,
              previous: 2
            },
            weekly: {
              current: 10,
              previous: 8
            },
            monthly: {
              current: 23,
              previous: 29
            }
          }
        },
        {
          image: study,
          title: "Study",
          background: "hsl(348, 100%, 68%)",
          timeframes: {
            daily: {
              current: 0,
              previous: 1
            },
            weekly: {
              current: 4,
              previous: 7
            },
            monthly: {
              current: 13,
              previous: 19
            }
          }
        },
        {
          image: exercise,
          title: "Exercise",
          background: "hsl(145, 58%, 55%)",
          timeframes: {
            daily: {
              current: 1,
              previous: 1
            },
            weekly: {
              current: 4,
              previous: 5
            },
            monthly: {
              current: 11,
              previous: 18
            }
          }
        },
        {
          image: social,
          title: "Social",
          background: "hsl(264, 64%, 52%)",
          timeframes: {
            daily: {
              current: 1,
              previous: 3
            },
            weekly: {
              current: 5,
              previous: 10
            },
            monthly: {
              current: 21,
              previous: 23
            }
          }
        },
        {
          image: self,
          title: "Self Care",
          background: "hsl(43, 84%, 65%)",
          timeframes: {
            daily: {
              current: 0,
              previous: 1
            },
            weekly: {
              current: 2,
              previous: 2
            },
            monthly: {
              current: 7,
              previous: 11
            }
          }
        }
      ]

      const renderData = () => {
        return (
            data.map((datas)=>(
                <Child style={{backgroundColor:`${datas.background}`}}>
                    <IconImage className='image'><Img src={datas.image} alt="Image" /></IconImage>
                    <Div>
                        <SmallContainer>
                            <Title>{datas.title}</Title>
                            <Dot><DotIcon src={dot} alt="Image"/></Dot>
                        </SmallContainer>
                        <HourContainer>
                            <Time>{clickedData === "daily"? datas.timeframes.daily.current : clickedData === "weekly"? datas.timeframes.weekly.current : clickedData === "monthly"? datas.timeframes.monthly.current : ""}hrs</Time>
                            <LastWeak>Last Week - {clickedData === "daily"? datas.timeframes.daily.previous : clickedData === "weekly"? datas.timeframes.weekly.previous : clickedData === "monthly"? datas.timeframes.monthly.previous : ""}hrs</LastWeak>
                        </HourContainer>
                    </Div>
                </Child>
            ))
        )
    }

  return (
    <SectionWrapper>
        <DesktopSection>
            <Left>
                <ProfileDiv>
                    <RoundImg><Logo src={jeremy} alt="Image" /></RoundImg>
                    <Report>Report for</Report>
                    <ProfileName>Jeremy Robson</ProfileName>
                </ProfileDiv>
                <ProfileP className={clickedData === "daily"? "active" : ""} onClick={()=> setClickedData("daily")}>Daily</ProfileP>
                <ProfileP className={clickedData === "weekly"? "active" : ""} onClick={()=> setClickedData("weekly")}>Weekly</ProfileP>
                <ProfileP className={clickedData === "monthly"? "active" : ""} onClick={()=> setClickedData("monthly")}>Monthly</ProfileP>
            </Left>
            <Right>
                <Parent>
                {renderData()}
                </Parent>
            </Right>
        </DesktopSection>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
    width: 70%;
    height: 610px;
    left: 0px;
    right: 0px;
    top: 180px;
    margin: 0 auto;
    position: absolute;
`;
const DesktopSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const Left = styled.div`
    background-color: hsl(235, 46%, 20%);
    border-radius: 15px;
    flex-direction: column;
    width: 22%;
    height: 456px;
`;
const ProfileDiv = styled.div`
    background-color: hsl(246, 80%, 60%);
    border-radius: 15px;
    flex-direction: column;
    width: 80%;
    padding: 25px;
`;
const RoundImg = styled.div`
    width: 33%;
    height: 100%;
    margin-bottom: 30px;
`;
const Logo = styled.img`
    width: 100%;
    height: 100%;
    border: 3px solid #fff;
    border-radius: 50%;
`;
const Report = styled.span`
    margin-top: 10px;
    font-family: 'Rubik-Regular';
    color: #fff;
`;
const ProfileName = styled.h2`
    margin-top: 10px;
    width: 0%;
    font-size: 43px;
    font-weight: 500;
    font-family: 'Rubik-Light';
    color: #fff;
`;
const ProfileP = styled.p`
    margin-top: 10px;
    margin-left: 28px;
    cursor: pointer;
    color: hsl(235, 45%, 61%);
`;
const Right = styled.div`
    color: #fff;
    width: 78%;
`;
const Parent = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Child = styled.li`
    background: hsl(15, 100%, 70%);
    width: 30%;
    border-radius: 15px;
    min-height: 213px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    &:nth-child(4) .image{
        top: 0px;
    }
`;
const IconImage = styled.div`
    width: 70px;
    position: absolute;
    top: -10px;
    left: 173px;
`;
const Img = styled.img`
    width: 100%;
`;
const Div = styled.div`
    width: 100%;
    border-radius: 13px;
    background-color: hsl(235, 46%, 20%);
    min-height: 171px;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    &:hover{
      background: #4952b6;
    }
`;
const SmallContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 84%;
    margin-top: 23px;
`;
const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
    font-family: 'Rubik-Regular';
`;
const Dot = styled.span`
    width: 21px;
    cursor: pointer;
`;
const DotIcon = styled.img`
    width: 100%;
    display: block;
`;
const HourContainer = styled.div`
    margin-left: 20px;
    margin-bottom: 18px;
`;
const Time = styled.h6`
    font-family: 'Rubik-Light';
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 14px;
    margin-top: 14px;
`;
const LastWeak = styled.span`
    font-family: 'Rubik-Regular';
    color: #b1b4dd;
`;