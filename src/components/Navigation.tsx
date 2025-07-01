
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Leaf, X, Globe, Languages } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "HYFLO Protection", path: "/hyflo" },
    { name: "Green Points", path: "/green-points" },
    { name: "Insurance", path: "/insurance" },
    { name: "Community", path: "/community" },
    { name: "Donate", path: "/donate" },
    { name: "Partners", path: "/partners" },
    { name: "Get Involved", path: "/get-involved" }
  ];

  // ASEAN languages for Google Translate
  const languages = [
    { label: 'English', value: '/auto/en', flag: '🇺🇸' },
    { label: 'Bahasa Indonesia', value: '/auto/id', flag: '🇮🇩' },
    { label: 'Bahasa Malaysia', value: '/auto/ms', flag: '🇲🇾' },
    { label: 'ไทย (Thai)', value: '/auto/th', flag: '🇹🇭' },
    { label: 'Tiếng Việt', value: '/auto/vi', flag: '🇻🇳' },
    { label: 'Filipino', value: '/auto/tl', flag: '🇵🇭' },
    { label: 'မြန်မာ (Burmese)', value: '/auto/my', flag: '🇲🇲' },
    { label: 'ខ្មែរ (Khmer)', value: '/auto/km', flag: '🇰🇭' },
    { label: 'ລາວ (Lao)', value: '/auto/lo', flag: '🇱🇦' },
    { label: '中文 (Chinese)', value: '/auto/zh-CN', flag: '🇨🇳' },
    { label: 'தமிழ் (Tamil)', value: '/auto/ta', flag: '🇮🇳' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Initialize Google Translate
  useEffect(() => {
    // Check if Google Translate script is already loaded
    if (!window.google?.translate) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      // Initialize Google Translate when the script is loaded
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'auto',
            autoDisplay: false,
            includedLanguages: 'en,id,ms,th,vi,tl,my,km,lo,zh-CN,ta',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      };
    }

    // Set default language
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      setSelectedLanguage(savedLang);
    }
  }, []);

  // Handle language change
  const handleLanguageChange = (language: typeof languages[0]) => {
    setSelectedLanguage(language.label);
    localStorage.setItem('selectedLanguage', language.label);
    
    // Set Google Translate cookie
    const cookieValue = language.value;
    document.cookie = `googtrans=${cookieValue}; path=/; max-age=31536000`;
    
    // Reload page to apply translation
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
              ECOVO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-2 border-green-200 hover:bg-green-50">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{selectedLanguage}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 max-h-64 overflow-y-auto">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.value}
                    onClick={() => handleLanguageChange(language)}
                    className="cursor-pointer hover:bg-green-50"
                  >
                    <span className="mr-2">{language.flag}</span>
                    {language.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 max-h-64 overflow-y-auto">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.value}
                    onClick={() => handleLanguageChange(language)}
                    className="cursor-pointer hover:bg-green-50"
                  >
                    <span className="mr-2">{language.flag}</span>
                    {language.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-lg">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">ECOVO</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-green-500 text-white shadow-lg"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Hidden Google Translate Element */}
      <div
        id="google_translate_element"
        style={{
          width: '0px',
          height: '0px',
          visibility: 'hidden',
          position: 'absolute',
          left: '50%',
          zIndex: -9999,
        }}
      />
    </nav>
  );
};

export default Navigation;
