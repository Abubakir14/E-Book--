import './App.css'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { asyncAutoUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import AdminRoutes from './routes/AdminRoutes'
// import { asyncUpdateUserRole } from './store/userRoleSlice'
import VendorBookPage from './containers/vendor/VendorBookPage/VendorBookPage'

function App() {
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    dispatch(asyncUpdateUserRole())
   //    dispatch(asyncAutoUpdateBreadcrumb())
   // }, [])

   return (
      <div className="App">
         {/* <AdminRoutes /> */}
         <VendorBookPage />
      </div>
   )
}

export default App
