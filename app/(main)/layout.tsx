import Header from '@/components/headers/Header';
import { Toaster } from "sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Toaster position='top-right' duration={2000}/>
    </div>
  );
}