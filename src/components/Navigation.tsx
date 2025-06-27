
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";
import AuthDialog from "./AuthDialog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthDialog(true);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-duolingo-green rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800 font-nunito">English Learning</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-duolingo-green transition-colors font-nunito font-semibold">
                Trang chủ
              </a>
              <a href="#" className="text-gray-700 hover:text-duolingo-green transition-colors font-nunito font-semibold">
                Khóa học
              </a>
              <a href="#" className="text-gray-700 hover:text-duolingo-green transition-colors font-nunito font-semibold">
                Về chúng tôi
              </a>
              <a href="#" className="text-gray-700 hover:text-duolingo-green transition-colors font-nunito font-semibold">
                Liên hệ
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => handleAuthClick('login')}
                className="border-2 border-duolingo-blue text-duolingo-blue hover:bg-duolingo-blue hover:text-white font-nunito font-bold rounded-xl px-6"
              >
                Đăng nhập
              </Button>
              <Button 
                onClick={() => handleAuthClick('register')}
                className="bg-duolingo-green hover:bg-duolingo-green-dark text-white font-nunito font-bold rounded-xl px-6"
              >
                Đăng ký
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 space-y-4 border-t">
              <a href="#" className="block text-gray-700 hover:text-duolingo-green font-nunito font-semibold py-2">
                Trang chủ
              </a>
              <a href="#" className="block text-gray-700 hover:text-duolingo-green font-nunito font-semibold py-2">
                Khóa học
              </a>
              <a href="#" className="block text-gray-700 hover:text-duolingo-green font-nunito font-semibold py-2">
                Về chúng tôi
              </a>
              <a href="#" className="block text-gray-700 hover:text-duolingo-green font-nunito font-semibold py-2">
                Liên hệ
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => handleAuthClick('login')}
                  className="border-2 border-duolingo-blue text-duolingo-blue hover:bg-duolingo-blue hover:text-white font-nunito font-bold rounded-xl"
                >
                  Đăng nhập
                </Button>
                <Button 
                  onClick={() => handleAuthClick('register')}
                  className="bg-duolingo-green hover:bg-duolingo-green-dark text-white font-nunito font-bold rounded-xl"
                >
                  Đăng ký
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthDialog 
        open={showAuthDialog}
        onOpenChange={setShowAuthDialog}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Navigation;
