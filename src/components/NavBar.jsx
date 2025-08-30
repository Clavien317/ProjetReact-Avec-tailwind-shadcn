import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md bg-background border-b">
      <div className="text-2xl font-bold text-primary">
        MonLogo
      </div>
      
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="/" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="#" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="/contact" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      {/* Desktop Button */}
      <div className="hidden md:block">
        <Button variant="default" size="default">
          Connexion
        </Button>
      </div>

      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Ouvrir le menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-primary">
              MonLogo
            </SheetTitle>
            <SheetDescription className="sr-only">
              Menu de navigation
            </SheetDescription>
          </SheetHeader>
          
          <div className="flex flex-col space-y-6 mt-8">
            <a 
              href="/" 
              className="text-lg text-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#" 
              className="text-lg text-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
            <a 
              href="/contact" 
              className="text-lg text-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            
            <div className="pt-6 border-t">
              <Button 
                variant="default" 
                size="default" 
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Connexion
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NavBar;