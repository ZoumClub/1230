"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { toast } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        if (!session) {
          router.push("/admin/login");
          return;
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Auth error:", error);
        toast.error("Authentication failed");
        router.push("/admin/login");
      }
    };

    checkAuth();
  }, [router]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      router.push("/admin/login");
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out");
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <div>
        <header className="border-b">
          <div className="container mx-auto py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">AutoMarket Admin</h1>
            <Button variant="ghost" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </header>
        {children}
      </div>
    </ErrorBoundary>
  );
}