import { useRouter } from 'next/router';
import { removeToken } from '../utils/auth';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    if (router.pathname !== '/') {
      router.replace('/'); // หรือ '/' ถ้า login อยู่ path นี้
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
