"use client";

import { Button } from "@/components/ui/button";
import { MdOutlineMenu } from "react-icons/md";


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "lucide-react";
import { NavigationMenuDemo } from "./Nav";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className=" md:hidden">
            <Button variant="outline">
              {" "}
              <MdOutlineMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.Co</SheetTitle>
            </SheetHeader>

            <ul className="flex">
           
           
            
            <Link href={"/"}>
            <p>
            <NavigationMenuDemo/>
          </p>
            </Link>
            <Link href={"/"}>
              {" "}
              <li>On Sale</li>
            </Link>
            <Link href={"/"}>
              {" "}
              <li>New Arrival</li>
            </Link>
            <Link href={"/"}>
              {" "}
              <li>Brands</li>
            </Link>  
              
            
            
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
