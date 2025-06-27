
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
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">English Learning</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Trang chủ
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Khóa học
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Về chúng tôi
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                Liên hệ
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => handleAuthClick('login')}
              >
                Đăng nhập
              </Button>
              <Button onClick={() => handleAuthClick('register')}>
                Đăng ký
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Trang chủ
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Khóa học
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Về chúng tôi
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Liên hệ
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="ghost" 
                  onClick={() => handleAuthClick('login')}
                >
                  Đăng nhập
                </Button>
                <Button onClick={() => handleAuthClick('register')}>
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
