import './App.css'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { asyncAutoUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import AdminRoutes from './routes/AdminRoutes'
import AddBookForm from './containers/admin/adminAddBook/addBookForm/AddBookForm'
// import { asyncUpdateUserRole } from './store/userRoleSlice'

function App() {
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    dispatch(asyncUpdateUserRole())
   //    dispatch(asyncAutoUpdateBreadcrumb())
   // }, [])

   return (
      <div className="App">
         {/* <AdminRoutes /> */}
         <AddBookForm />
      </div>
   )
}

export default App
