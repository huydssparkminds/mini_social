import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { PublicRoute } from "./router/route";
import Login from "./pages/Login/Login";
import './i18n/i18n';


function App() {

  return (
    <>
       <Router>
        <Routes>
          {PublicRoute.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
