import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

// core components
// import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
// import Parallax from "components/Parallax/Parallax.js";

// import profile from "assets/img/faces/profile.jpeg";
import profile from "assets/img/faces/profile.jpeg";

// import studio1 from "assets/img/examples/studio-1.jpg";
// import studio2 from "assets/img/examples/studio-2.jpg";
// import studio3 from "assets/img/examples/studio-3.jpg";
// import studio4 from "assets/img/examples/studio-4.jpg";
// import studio5 from "assets/img/examples/studio-5.jpg";
// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";

import recent1 from "assets/img/portfolio/nr5g/workNr1.jpeg";
import recent2 from "assets/img/portfolio/nr5g/workNr2.png";
import recent3 from "assets/img/portfolio/nr5g/workNr3.png";
import recent4 from "assets/img/portfolio/pact/workPact1.png";
import recent5 from "assets/img/portfolio/rusa/workRuSa.png";
import recent6 from "assets/img/portfolio/pact/workPact2.png";

import prev1 from "assets/img/portfolio/appbook/free1.png";
import prev2 from "assets/img/portfolio/appbook/free2.png";
import prev3 from "assets/img/portfolio/appbook/free3.png";
import prev4 from "assets/img/portfolio/eneTextBook/free4.png";
import prev5 from "assets/img/portfolio/eneTextBook/free5.png";
import prev6 from "assets/img/portfolio/sizeax/workSizeax.png";

// import toywork1 from "assets/img/portfolio/toy/toywork1.png";
// import toywork2 from "assets/img/portfolio/toy/toywork2.png";
import toywork3 from "assets/img/portfolio/toy/toywork3.png";
import toywork4 from "assets/img/portfolio/toy/toywork4.png";
// import toywork5 from "assets/img/portfolio/toy/toywork5.png";
import toywork6 from "assets/img/portfolio/toy/toywork6.png";
// import toywork7 from "assets/img/portfolio/toy/toywork7.png";
import toywork8 from "assets/img/portfolio/toy/toywork8.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function SectionProfile() {
  const classes = useStyles();
  // const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      {/* <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      /> */}
      {/* <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      /> */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>장영도</h3>
                    <h5>APP DEVELOPER</h5>

                    <div className={classes.description}>
                      <b>Contact</b>
                    </div>
                    <div className={classes.contactContainer}>
                      <div className={classes.contact}>
                        <p style={{ color: "black", fontSize: "16px" }}>
                          <ul>
                            <li>Email : jydbz42@gmail.com</li>
                            <li>Phone : 010-4337-6686</li>
                            <li>
                              GitHub :{" "}
                              <a href="https://github.com/ok0035">
                                https://github.com/ok0035
                              </a>
                            </li>
                          </ul>{" "}
                        </p>
                      </div>
                    </div>

                    <Button justIcon link className={classes.margin5}>
                      <a
                        style={{ color: "inherit", textDecoration: "none" }}
                        href="https://github.com/ok0035"
                      >
                        <i className={"fab fa-github"} />
                      </a>
                    </Button>
                    {/* <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button> */}
                  </div>
                </div>
              </GridItem>
            </GridContainer>

            <div className={classes.description}>
              <p style={{ color: "black", fontSize: "16px" }}>
                2017년 앱 개발 인턴을 시작으로 그림이 움직이는 동화책 앱, 영어
                단어 공부 앱 등을 개발하였으며, 2019년부터 2년간 안드로이드 앱
                개발자로 일을 한 경험이 있습니다. 회사의 기획서를 바탕으로 앱
                개발에 대한 모든 업무를 맡아 진행하였습니다. 앱의 주요 기능은
                LTE 및 5G 신호 분석으로, 장비와 MQTT 통신을 이용하여 받은
                데이터를 그래프로 출력해주는 기능이었습니다. python의 pyqt5
                라이브러리를 이용하여 windows, linux에서 구동 가능한 앱을
                개발하기도 했습니다.{" "}
              </p>
            </div>

            <div className={classes.description}>
              <b>Summary</b>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Recent",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={recent1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={recent2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={recent6}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={recent3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={recent4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={recent5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Prev",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={prev1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={prev2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={prev3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={prev4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={prev5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={prev6}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Toy",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={toywork3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={toywork6}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={toywork4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={toywork8}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>

            {/* <div className={classes.description}>
              <b>자격증</b>
            </div>
            <div className={classes.contactContainer}>
              <div className={classes.contact}>
                <p style={{ color: "black", fontSize: "16px" }}>
                  <ul>
                    <li>정보처리기사</li>
                    <li>리눅스 마스터 2급</li>
                  </ul>{" "}
                </p>
              </div>
            </div> */}

            {/* <div className={classes.description}>
              <b>상벌사항</b>
            </div>
            <div className={classes.contactContainer}>
              <div className={classes.contact}>
                <p style={{ color: "black", fontSize: "16px" }}>
                  <ul>
                    <li>2013년 2학기 성적 우수 장학금(학년 1등) 수여</li>
                    <li>2016년 2학기 성적 우수 장학금(학년 2등) 수여</li>
                    <li>2017년 1학기 학과 수석 장학금(학과 1등) 수여</li>
                  </ul>{" "}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
