import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Dashboard from './components/Dashboard/Dashboard';
import Home from "./components/Home/Home";
import Register from './components/Register/Register';
import Login from "./components/Login/Login";
import Create from './components/Create/Create';
import Search from './components/Search/Search';
import { AuthProvider } from './contexts/AuthContext';
import RouteGuard from './guards/RouteGuard';
import PrivateRoute from './guards/PrivateRoute';
import SpinnerComponent from './components/Spinner/Spinner';
const Logout = lazy(() => import('./components/Logout/Logout'));
const Details = lazy(() => import("./components/Details/Details"));
const Edit = lazy(() => import("./components/Edit/Edit"));
const Delete = lazy(() => import('./components/Delete/Delete'));

function App() {
    return (
        <AuthProvider>
            <div id="wrapper">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/register" element={(
                            <PrivateRoute>
                                <Register />
                            </PrivateRoute>
                        )} />

                        <Route path="/login" element={(
                            <PrivateRoute>
                                <Login />
                            </PrivateRoute>
                        )} />

                        <Route path="/logout" element={(
                            <RouteGuard>
                                <Suspense fallback={<SpinnerComponent /> }>
                                    <Logout />
                                </Suspense>
                            </RouteGuard>
                        )} />

                        <Route path="/create" element={(
                            <RouteGuard>
                                <Create />
                            </RouteGuard>
                        )} />

                        <Route path="search" element={<Search />} />

                        <Route path="/dashboard/details/:productId" element={(
                            <RouteGuard>
                                <Suspense fallback={<SpinnerComponent />}>
                                    <Details />
                                </Suspense>
                            </RouteGuard>
                        )} />

                        <Route path="/dashboard/details/:productId/edit" element={(
                            <RouteGuard>
                                <Suspense fallback={<SpinnerComponent />}>
                                    <Edit />
                                </Suspense>
                            </RouteGuard>
                        )} />

                        <Route path="/dashboard/details/:productId/delete" element={(
                            <RouteGuard>
                                <Suspense fallback={<SpinnerComponent />}>
                                    <Delete />
                                </Suspense>
                            </RouteGuard>
                        )} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;