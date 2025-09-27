import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
    title: "Home - Movie World",
    description: "Discover, rate, and track your favorite movies with Movie World. Join our community of movie enthusiasts today!",
};

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
