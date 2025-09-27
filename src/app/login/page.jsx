import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
    title: "Login",
    description: "Log in to your account to access personalized movie recommendations and tracking.",
};

export default function LoginPage() {
    return <LoginForm />;
}