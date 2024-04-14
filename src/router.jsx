// importing router related components
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// importing components
import App from "./App.jsx";
import { Login } from "./components/login/Login.jsx";
import { AddNewTips } from "./components/manageTips/addNewTips/AddNewTips.jsx";
import { ViewAllTips } from "./components/manageTips/viewAllTips/ViewAllTips.jsx";
import { BlankPage } from "./components/common/blankPage/BlankPage.jsx";
import { AddReference } from "./components/manageTips/addReference/AddReference.jsx";
import { ViewAllReference } from "./components/manageTips/viewAllReference/ViewAllReference.jsx";
import { AddProIdea } from "./components/manageTips/addProIdea/AddProIdea.jsx";
import { ViewAllProIdea } from "./components/manageTips/viewAllProIdea/ViewAllProIdea.jsx";
import { AddMarketPlan } from "./components/marketManagement/addMarketPlan/AddMarketPlan.jsx";
import { ViewAllMarketPLan } from "./components/marketManagement/viewAllMarketPlan/ViewAllMarketPlan.jsx";
import { AddPriceAutomation } from "./components/marketManagement/addPriceAutomation/AddPriceAutomation.jsx";
import { ViewAllPriceAutomation } from "./components/marketManagement/viewAllPriceAutomation/ViewAllPriceAutomation.jsx";
import { AddMessageAutomation } from "./components/marketManagement/addMessageAutomation/AddMessageAutomation.jsx";
import { ViewAllMessageAutomation } from "./components/marketManagement/viewAllMessageAutomation/ViewAllMessageAutomation.jsx";
import { ViewAllMembership } from "./components/membership/viewAllMemberShip/ViewAllMembership.jsx";
import { AddMembership } from "./components/membership/addMembership/AddMembership.jsx";
import { ManageFeedback } from "./components/feedback/manageFeedback/ManageFeedback.jsx";
import { ViewFeedback } from "./components/feedback/viewFeedback/ViewFeedback.jsx";
import { SubmittedFeedback } from "./components/feedback/submittedFeedback/SubmittedFeedback.jsx";
import { AddAdminMessage } from "./components/adminMessage/addAdminMessage/AddAdminMessage.jsx";
import { ViewAllMessage } from "./components/adminMessage/viewAllMessage/ViewAllMessage.jsx";
import { MarketCommentary } from "./components/marketCommentary/marketCommentary/MarketCommentary.jsx";
import { ViewAllCommentary } from "./components/marketCommentary/viewAllCommentary/ViewAllCommentary.jsx";
import { StaffUser } from "./components/staffUsers/staffUser/StaffUser.jsx";
import { AllApplicationUsers } from "./components/users/allApplictionUsers/AllApplicationUsers.jsx";
import { AddNews } from "./components/manageNews/addNews/AddNews.jsx";
import { ViewAllNews } from "./components/manageNews/viewAllNews/ViewAllNews.jsx";
import { TraderClinicQueries } from "./components/traderClinic/traderClinicQueries/TraderClinicQueries.jsx";
import { ErrorPage } from "./components/common/errorPage/ErrorPage.jsx";
import { Dashboard } from "./components/dashboard/Dashboard.jsx";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Login Route */}
      <Route index element={<Login />} />

      <Route path="/" element={<App />}>
        {/* dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* homepage route */}
        <Route
          element={
            <BlankPage message="You don’t have any work order yet, Start creating Work Order by clicking the Create WO button" />
          }
        />

        {/* manage tips routes */}
        <Route path="managetips/addnewtips" element={<AddNewTips />} />
        <Route path="managetips/viewalltips" element={<ViewAllTips />} />
        <Route path="managetips/addreference" element={<AddReference />} />
        <Route
          path="managetips/viewallreference"
          element={<ViewAllReference />}
        />
        <Route path="managetips/addproidea" element={<AddProIdea />} />
        <Route path="managetips/viewallproideas" element={<ViewAllProIdea />} />

        {/* market mangement routes */}
        <Route
          path="marketmanagement/addmarketplan"
          element={<AddMarketPlan />}
        />
        <Route
          path="marketmanagement/viewallmarketplan"
          element={<ViewAllMarketPLan />}
        />
        <Route
          path="marketmanagement/addpriceautomation"
          element={<AddPriceAutomation />}
        />
        <Route
          path="marketmanagement/viewallpriceautomation"
          element={<ViewAllPriceAutomation />}
        />
        <Route
          path="marketmanagement/addmessageautomation"
          element={<AddMessageAutomation />}
        />
        <Route
          path="marketmanagement/viewallmessageautomation"
          element={<ViewAllMessageAutomation />}
        />

        {/* manage news route */}

        <Route path="managenews/viewallnews" element={<ViewAllNews />} />

        {/* membership routes */}
        <Route path="membership/addmembership" element={<AddMembership />} />
        <Route
          path="membership/viewallmembership"
          element={<ViewAllMembership />}
        />

        {/* feedback routes */}
        <Route path="feedback/manageFeedback" element={<ManageFeedback />} />
        <Route path="feedback/viewFeedback" element={<ViewFeedback />} />
        <Route
          path="feedback/submittedFfeedback"
          element={<SubmittedFeedback />}
        />

        {/* admin message routes */}
        <Route
          path="adminMessage/addAdminMessage"
          element={<AddAdminMessage />}
        />
        <Route
          path="adminMessage/viewAdminMessage"
          element={<ViewAllMessage />}
        />
        {/* market commentary route */}
        <Route
          path="marketCommentary/marketCommentary"
          element={<MarketCommentary />}
        />
        <Route
          path="marketCommentary/viewMarketCommentary"
          element={<ViewAllCommentary />}
        />

        {/* staff user route */}
        <Route path="staffUser/staffUser" element={<StaffUser />} />

        {/* users */}
        <Route
          path="users/allapplicationusers"
          element={<AllApplicationUsers />}
        />

        {/* trade clinic */}

        <Route
          path="traderclinic/traderclinicqueries"
          element={<TraderClinicQueries />}
        />

        {/* news */}
        <Route path="manageNews/addNews" element={<AddNews />} />
        <Route path="manageNews/viewAllNews" element={<ViewAllNews />} />
      </Route>

      {/* 404 page */}
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);
