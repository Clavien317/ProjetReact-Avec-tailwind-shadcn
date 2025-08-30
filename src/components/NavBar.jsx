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
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">
        <img src="/logo.png" alt="Logo" className="h-10" />
      </div>
      
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="/" 
              className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-accent"
            >
              Accueil
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[400px]">
                <NavigationMenuLink 
                  href="#"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Outils digitaux</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Solutions numériques pour votre entreprise
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink 
                  href="#"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">E-learning</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Formation en ligne personnalisée
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink 
                  href="#"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Projets en cours</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Découvrez nos dernières réalisations
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="/contact" 
              className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-accent"
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
            <SheetTitle className="text-left">Navigation</SheetTitle>
            <SheetDescription>
              Menu de navigation principal
            </SheetDescription>
          </SheetHeader>
          
          <div className="flex flex-col space-y-4 mt-8">
            <Button
              variant="ghost"
              className="justify-start text-lg h-auto p-3"
              onClick={() => setOpen(false)}
              asChild
            >
              <a href="/">Accueil</a>
            </Button>
            
            <Button
              variant="ghost"
              className="justify-start text-lg h-auto p-3"
              onClick={() => setOpen(false)}
              asChild
            >
              <a href="#">Outils digitaux</a>
            </Button>
            
            <Button
              variant="ghost"
              className="justify-start text-lg h-auto p-3"
              onClick={() => setOpen(false)}
              asChild
            >
              <a href="#">E-learning</a>
            </Button>

            <Button
              variant="ghost"
              className="justify-start text-lg h-auto p-3"
              onClick={() => setOpen(false)}
              asChild
            >
              <a href="#">Projets en cours</a>
            </Button>
            
            <Button
              variant="ghost"
              className="justify-start text-lg h-auto p-3"
              onClick={() => setOpen(false)}
              asChild
            >
              <a href="/contact">Contact</a>
            </Button>
            
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
