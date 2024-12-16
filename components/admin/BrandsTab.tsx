"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { useBrands } from "@/lib/hooks/useBrands";
import { BrandDialog } from "./dialogs/BrandDialog";
import { columns } from "./columns/brandsColumns";
import { Brand } from "@/types/brand";

// Rest of the file remains the same