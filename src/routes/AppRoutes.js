import { Route, Routes, Navigate } from 'react-router-dom'
import { ROUTES } from '../utils/constants/constants'
import AddBookForm from '../containers/admin/adminAddBook/addBookForm/AddBookForm'
import Users from '../containers/admin/Users/Users'
import Sellers from '../containers/admin/Sellers/Sellers'
import SellersDetails from '../containers/admin/SellersDetails/SellersDetails'
import UserDetails from '../containers/admin/UserDetails/UserDetails'
import AdminLayout from '../components/admin/AdminLayout/AdminLayout'
import PrivateRouteForAdmin from '../components/UI/PrivateRoutes/PrivateRouteForAdmin/PrivateRouteForAdmin'
import PrivateRouteForUser from '../components/UI/PrivateRoutes/PrivateRouteForUser/PrivateRouteForUser'
import PrivatePouteForVendor from '../components/UI/PrivateRoutes/PrivatePouteForVendor/PrivatePouteForVendor'
import ClientMainPage from '../containers/client/ClientMainPage/ClientMainPage'
import PromoCodePage from '../containers/client/PromoCodePage/PromoCodePage'
import NoAccess from '../containers/NoAccess/NoAccess'
import HowToBecomeToVendorPage from '../containers/client/HowToBecomeVendorPage/HowToBecomeVendorPage'
import ClientLayout from '../components/client/ClientLayout/ClientLayout'
import VendorLayout from '../components/vendor/VendorLayout/VendorLayout'

function AppRoutes() {
   return (
      <Routes>
         <Route path="*" element={<Navigate to={ROUTES.NO_ACCESS} />} />
         <Route
            path={ROUTES.HOME}
            element={
               <PrivateRouteForAdmin>
                  <AdminLayout />
               </PrivateRouteForAdmin>
            }
         >
            <Route path={ROUTES.APPLICATIONS} element={<h1>APP</h1>} />
            <Route path={ROUTES.SELLERS} element={<Sellers />} />
            <Route path={ROUTES.SEllERBYID} element={<SellersDetails />} />
            <Route path={ROUTES.USERS} element={<Users />} />
            <Route path={ROUTES.USERBYID} element={<UserDetails />} />
            <Route path={ROUTES.BOOKS} element={<AddBookForm />} />
         </Route>

         <Route
            path={ROUTES.VENDOR}
            element={
               <PrivatePouteForVendor>
                  <VendorLayout />
               </PrivatePouteForVendor>
            }
         >
            <Route path={ROUTES.VENDOR_AREA} element={<p>VENDOR_AREA</p>} />
            <Route path={ROUTES.BOOK_PAGE} element={<p>BOOK_PAGE</p>} />
            <Route path={ROUTES.ADD_BOOK} element={<p>ADD_BOOK</p>} />
            <Route path={ROUTES.PROFILE} element={<p>PROFILE</p>} />
         </Route>

         <Route path={ROUTES.CLIENT} element={<ClientLayout />}>
            <Route
               path={ROUTES.CLIENT_MAIN_PAGE}
               element={<ClientMainPage />}
            />
            <Route path={ROUTES.SORT} element={<p>SORT</p>} />
            <Route path={ROUTES.INNER_PAGE} element={<p>INNER PAGE</p>} />
            <Route path={ROUTES.AUDIO_PAGE} element={<p>AUDIO_PAGE</p>} />
            <Route
               path={ROUTES.CART}
               element={
                  <PrivateRouteForUser>
                     <h1>Card</h1>
                  </PrivateRouteForUser>
               }
            />
            <Route path={ROUTES.PROMO_CODE} element={<PromoCodePage />} />
            <Route
               path={ROUTES.USER_PROFILE}
               element={
                  <PrivateRouteForUser>
                     <p>USER_PROFILE</p>
                  </PrivateRouteForUser>
               }
            />
            <Route
               path={ROUTES.PROFILE_HISTORY}
               element={
                  <PrivateRouteForUser>
                     <p>PROFILE_HISTORY</p>
                  </PrivateRouteForUser>
               }
            />
         </Route>

         <Route path={ROUTES.NO_ACCESS} element={<NoAccess />} />
         <Route
            path={ROUTES.BECOME_VENDOR}
            element={<HowToBecomeToVendorPage />}
         />
      </Routes>
   )
}

export default AppRoutes
