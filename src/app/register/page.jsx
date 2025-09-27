import RegisterForm from '@/components/auth/RegisterForm';

export const metadata = {
    title: "Register",
    description: "Register a new account to start your movie journey with MovieWorld.",
};

export default function RegisterPage() {
    return <RegisterForm />;
}