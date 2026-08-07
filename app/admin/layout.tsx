
import type { Metadata } from "next";
import './dashboard/dashboard.css'

export const metadata: Metadata = {
    title: "Admin Dashboard | Scan n Go",
    description: "Scan n Go Admin Panel",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <> 
    {children}
    </>;
}
