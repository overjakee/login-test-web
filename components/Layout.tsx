import LogoutButton from './LogoutButton';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-bold">Employee System</h1>
        <LogoutButton />
      </div>
      {children}
    </div>
  );
}
