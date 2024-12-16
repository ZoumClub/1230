"use client";

import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ErrorBoundary } from "@/components/ui/error-boundary";

// Import tabs using dynamic imports
import dynamic from "next/dynamic";

const DealerCarsTab = dynamic(
  () => import("@/components/admin/DealerCarsTab").then(mod => mod.DealerCarsTab),
  { loading: () => <LoadingScreen /> }
);

const ServicesTab = dynamic(
  () => import("@/components/admin/ServicesTab").then(mod => mod.ServicesTab),
  { loading: () => <LoadingScreen /> }
);

const AccessoriesTab = dynamic(
  () => import("@/components/admin/AccessoriesTab").then(mod => mod.AccessoriesTab),
  { loading: () => <LoadingScreen /> }
);

const NewsTab = dynamic(
  () => import("@/components/admin/NewsTab").then(mod => mod.NewsTab),
  { loading: () => <LoadingScreen /> }
);

const BrandsTab = dynamic(
  () => import("@/components/admin/BrandsTab").then(mod => mod.BrandsTab),
  { loading: () => <LoadingScreen /> }
);

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <ErrorBoundary>
        <Tabs defaultValue="cars">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="cars">Car Listings</TabsTrigger>
            <TabsTrigger value="brands">Brands</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="accessories">Accessories</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>

          <Suspense fallback={<LoadingScreen />}>
            <TabsContent value="cars">
              <DealerCarsTab />
            </TabsContent>

            <TabsContent value="brands">
              <BrandsTab />
            </TabsContent>

            <TabsContent value="services">
              <ServicesTab />
            </TabsContent>

            <TabsContent value="accessories">
              <AccessoriesTab />
            </TabsContent>

            <TabsContent value="news">
              <NewsTab />
            </TabsContent>
          </Suspense>
        </Tabs>
      </ErrorBoundary>
    </div>
  );
}