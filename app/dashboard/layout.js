export const metadata = {
    title: "Dashboard - Aerialink",
};

export default function DashboardLayout({ children }) {
    return (
        <div className="dashboard">
            <header>Dashboard Header updated by dev1</header>
            <div className="max-w-7xl md:px-6 px-4 xl:px-0 m-auto xl:mt-35 lg:mt-32 mt-27">
                {children}
            </div>
            <footer>Dashboard Footer</footer>
        </div>
    );
}
