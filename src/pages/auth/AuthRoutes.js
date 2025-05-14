// 2. Split Routes into Logical Modules
// Separate routes into smaller files using react-router-dom's <Routes> and <Route> composition:
// // routes/AuthRoutes.js
// export function AuthRoutes() {
//     return (
//       <>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//       </>
//     );
//   }
//   // Then in App.js:
//   import { AuthRoutes } from './routes/AuthRoutes';

// <Routes>
//   <Route path="/" element={<Layout />}>
//     <AuthRoutes />
//     {/* other routes */}
//   </Route>
// </Routes>

// 3. Consider Route Guards
// You already use <PrivateRoute> — good! You could generalize it further by wrapping groups of routes needing auth:
// <Route element={<PrivateRoute />}>
//   <Route path="/add-pet" element={<PetAddStepper />} />
//   <Route path="/user-profile" element={<Profile />} />
//   <Route path="/user-profile/pets" element={<UserPets />} />
// </Route>
