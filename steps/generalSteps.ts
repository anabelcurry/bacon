import googlePage from "../pages/googlePage";

// eslint-disable-next-line no-undef
const {I} = inject();
  
  export = {
    /**
     * Verifies element is visible before clicking it
     * @author Anabel Curry
     */
     verifyAndClick: async function (element) {
        await I.seeElement(element);
        await I.click(element);
     },
     /**
      * Verifies if google side bar more button is present and if it is, clicks to expand side bar
      */
     clickSideBarMoreBtnIfPresent: async function () {
      const btnSideBarMoreCount = await I.grabNumberOfVisibleElements(
         googlePage.btnSummarySideBarMore
      );
      
      if (btnSideBarMoreCount > 0 ) {
         await this.verifyAndClick(googlePage.btnSummarySideBarMore)
      } else {
         return;
      }
     }

  };