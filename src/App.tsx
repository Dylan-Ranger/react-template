import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import GlobalLayout from "./layouts/GlobalLayout.tsx"
import Login from "./pages/Login.tsx"
import Register from "./pages/Register.tsx"

const App: React.FC = () => {
    return (
     <Router>
         <GlobalLayout>
             <Routes>
                 <Route path="/login" element={<Login />}/>
                 <Route path="/register" element={<Register />}/>
             </Routes>
         </GlobalLayout>
     </Router>
    )
}

export default App
