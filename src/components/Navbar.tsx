import { Flame, GitFork, Github, Star, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-b bg-primary-foreground">
      <div className="py-2 px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <Flame stroke="1" className="fill-orange-500" />
            <h1 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">
              README Generator
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-between gap-4">
              <li>
                <Link
                  to="https://www.github.com/prabhjot2001/README-Generator"
                  className="font-medium flex items-center gap-2 text-sm text-muted-foreground hover:underline underline-offset-2"
                >
                  <GitFork className="w-5" /> Fork this repo
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.github.com/prabhjot2001/README-Generator"
                  className="font-medium flex items-center gap-2 text-sm text-muted-foreground hover:underline underline-offset-2"
                >
                  <Star stroke="1" className="fill-yellow-400 border-none w-5" />
                  Give it a star on GitHub
                </Link>
              </li>
              <li>
                <Button asChild variant={"ghost"} size={"icon"}>
                  <Link
                    to="https://www.github.com/prabhjot2001/README-Generator"
                    className="font-medium flex items-center gap-2 text-sm text-muted-foreground hover:underline underline-offset-2"
                  >
                    <Github className="w-5" />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-5" /> : <Menu className="w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="https://www.github.com/prabhjot2001/README-Generator"
                  className="font-medium flex items-center gap-2 text-sm text-muted-foreground hover:underline underline-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <GitFork className="w-5" /> Fork this repo
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.github.com/prabhjot2001/README-Generator"
                  className="font-medium flex items-center gap-2 text-sm text-muted-foreground hover:underline underline-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Star stroke="1" className="fill-yellow-400 border-none w-5" />
                  Give it a star on GitHub
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.github.com/prabhjot2001/README-Generator"
                  className="font-medium flex items-center gap-2 text-sm text-muted-foreground hover:underline underline-offset-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github className="w-5" /> View on GitHub
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;