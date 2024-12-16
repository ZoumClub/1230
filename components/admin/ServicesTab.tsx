"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { useServices } from "@/lib/hooks/useServices";
import { ServiceDialog } from "./dialogs/ServiceDialog";
import { columns } from "./columns/servicesColumns";
import { Service } from "@/types/service";

// Rest of the file remains the same