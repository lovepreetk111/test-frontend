  /* ================================ Header =================================== */
export interface InavbarConfig {
  id: string
  implinksdata: IImpLinks[]
  logo: InavLogo[]
  navbar: INavbarData[]
}
export interface InavLogo {
  logoUrl: string,
  logoAlt: string,
  link: string
}
export interface IImpLinks {
  id: string,
  impLinks: string,
  routeLinks: string;
}
export interface INavbarData {
  id: string;
  nav: string;
  link: string;
  child: IDropDownChild[]
}
export interface IDropDownChild {
  dropdown: string,
  url: string,
  subchild:IDropDownSubChild[]
}

export interface IDropDownSubChild{
  subchild:string,
  routeLink:string
}

/*============================= Notices component =======================*/
export interface Inotice {
  id: string
  noticeLink: string;
}

/* ===================================== Banner Carousel component ================ */
export interface IBannerCarosuelComponent {
  innerData:IinnerData[]
  background:Ibackground[]
  image:Iimage[]
  routeLink:string  
}

export interface IinnerData{
  header:string;
  text:string,
  buttonText:string
}
export interface Ibackground{
  url:string,
      alt:string,
}
export interface Iimage{
  url:string,
      alt:string
}

/* ============================================ AboutUsSection =============================*/
/* ====================== container 2 ============================ */
export interface IAboutSectionData {
  id: string,
  style: {
    backgroundColor: string
  }
  info: IBtnCmpData,
  imgText: IleftimageRightTxt
  topimgText: IPictureComponentImage[]
}
/* Button component 1 */
export interface IBtnCmpData {
  data: string,
}
/* Left Image Right Text1 Component */
export interface IleftimageRightTxt {
  url: string;
  alt: string;
  para1: string;
  para2: string
}
/* Top image btm text1 component */
export interface IPictureComponentImage {
  url: string;
  alt: string;
  header: string;
  text: string;
  description1: string,
  description2: string
}

/* ====================================== Accordian Section =============================*/
export interface IallDropdown{
  dropdown:IDropDown[]
 }
export interface IDropDown {
  data: Ileftimg1[]
  AccordianData: IAccordianData[]
}
/* Accordian Component */
export interface IAccordianData {
  Title: string;
  SubTitles:IsubTitleData[]
}

export interface IsubTitleData{
  title:string,
  link:string
}
/* Left image1 component */
export interface Ileftimg1 {
  url: string;
  alt: string;
  Text: string
}

/* ===================================== Testimonial Section ============================ */
/* ================================ container 3 ======================== */
export interface ITestimonialSectionData {
  title: string;
  description: string;
  cardsData: ITestimonialCardData[]
}
/* profile Card Component */
export interface ITestimonialCardData {
  comment: string;
  name: string;
  designation: string;
  companyName: string;
  profileUrl: string;
}

/* =================================== Card Carousel ============================= */
export interface ICardCarosuel {
  id: string,
  slides: ICardCarosuelData[]
}
export interface ICardCarosuelData {
  id: 1,
  img: {
    url: string,
    alt: string,
    routeLink: string
  },
  data: {
    cardHeading: string,
    description: string
  }
}

/* ==================================== Footer component ================================ */
export interface IFooterCmp {

  number: string;
  mail: string;
  socialMedia: {
  url: string,
  alt: string,
  link: string,
}[]
}

/* *************************************** ABOUT US ******************************* */
/* txt comp1 */
export interface text{
  text:string;
}

/* image-cmp1*/
export interface IaboutUs{
  url:string;
  alt:string;
  text:string;
}

/* Leftimg1*/
export interface Ileftimg{
  url:string;
  alt:string;
}

/* circle img left txt */
export interface AboutMain{
  url:string;
  alt:string;
  text:string;
  text1:string;
  text2:string;
  textMain:string;
}


/* ******************************************** CONTACT US PAGE ******************************************** */
/* ============================ form component1 =================================== */
export interface IcoursesBanner{
  url:string;
  alt:string;
  text:string;
}

export interface IcourseDetail{
  text:string;
  text1:string;
  text2:string;
  text3:string;
  text4:string;
  text5:string;
  text6:string;
  text7:string;
  text8:string;
  text9:string;
  text10:string;
  link:string;
  url:string;
  alt:string;
  text11:string;
  text12:string;

}

export interface ICourseFeature{
  info:IaboutUs[]
  image:Ileftimg[]
  cardData:[
    {
      id:string,
    header:string,
    feesdetail:string,
    }
  ]
  values:Ivalues[]
}

interface Ivalues{
  key:string,
    value:string,
}

export interface IDetailCardInfo{
  id:string;
  imgUrl:string,
  imgAlt:string,
  header:string,
  btnLink:string,
  btnTxt:string
}

export interface IDetailsCard2{
  image:string,
  alt:string,
  date:string,
  eventName:string,
  time:string,
  venu:string,
  buttonData:string,
  routeLink:string
}
//////////////////////////////////////////////////////////////////////////////////
// speaker

export interface ISpeaker{
  image:string,
  alt:string,
  name:string,
  role:string
}
//Student support
export interface Istudentsupport{
  data:string,
  Text:string,
  url:string,
  alt:string,
}

export interface INoticeConfig{
  innerNoticeData:IInnerNoticeData[]
 dashboardInfo: IDashboardInfo[]
 noticeTitle:string, 
 noticeDate:string, 
 noticeName:string,
}

export interface IInnerNoticeData{
  img:string
 noticeInfoText:string
 createdBy:string
 createdAt:string,
}

export interface IDashboardInfo{
  displayName:string,
  updatedAt:string, 
  updatedBy:string
}