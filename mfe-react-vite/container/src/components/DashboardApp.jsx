import mountDashboardApp from "dashboard/DashboardApp";

export default ({ user }) => mountDashboardApp({ standalone: false, user });
