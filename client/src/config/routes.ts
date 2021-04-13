import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import EditPage from '../pages/edit';
import BlogPage from '../pages/blog';

const authRoutes: IRoute[] = [
    {
        name: 'Login',
        path: '/login',
        exact: true,
        component: LoginPage,
        auth: false
    },
    {
        name: 'Sign Up',
        path: '/register',
        exact: true,
        component: LoginPage,
        auth: false
    }
];

const blogRoutes: IRoute[] = [
    {
        name: 'Create',
        path: '/edit',
        exact: true,
        component: EditPage,
        auth: true
    },
    {
        name: 'Edit',
        path: '/edit/:blogID',
        exact: true,
        component: EditPage,
        auth: true
    },
    {
        name: 'Blog',
        path: '/blogs/:blogID',
        exact: true,
        component: BlogPage,
        auth: false
    }
];

const mainRoutes: IRoute[] = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: HomePage,
        auth: false
    }
];

const routes: IRoute[] = [...authRoutes, ...blogRoutes, ...mainRoutes];

export default routes;
