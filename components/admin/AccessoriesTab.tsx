"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { useAccessories } from "@/lib/hooks/useAccessories";
import { AccessoryDialog } from "./dialogs/AccessoryDialog";
import { columns } from "./columns/accessoriesColumns";
import { Accessory } from "@/types/accessory";

// Rest of the file remains the same