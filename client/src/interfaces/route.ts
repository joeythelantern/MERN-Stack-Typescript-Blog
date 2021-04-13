export default interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    auth: boolean;
    component: any;
    props?: any;
}