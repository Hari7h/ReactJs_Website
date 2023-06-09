const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-ibm font-semibold text-[40px] xs:text-[48px]  text-slate-800 leading-[66.8px] xs:leading-[76.8px]  w-full",
    paragraph: "font-ibm font-normal text-slate-800 text-[20px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "px-6 sm:px-12 ",
    paddingY: "py-4 sm:py-10 ",
    padding: "px-6 sm:px-12  py-4 sm:py-12 ",
  
    marginX: " mx-6 sm:mx-16 ",
    marginY: "my-6 sm:my-16 ",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} mr-0 md:mr-10  mt-10 md:mt-0  relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} ml-0 md:ml-10  mt-10 md:mt-0  relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;