const Footer = () => {
    return (
        <footer className="border-t border-gray-700 dark:border-neutral-700 bg-gray-900 text-gray-400 pt-8 pb-12 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Accessibility</a>
        </div>
        
        {/* Centered copyright text */}
        <p className="text-gray-400 mb-2">© 2023 PosePerfect. All rights reserved.</p>
      
        {/* Centered disclaimer text */}
        <p className="text-sm text-gray-500">
          PosePerfect uses advanced AI to provide yoga and gym pose correction. Results may vary based on individual factors.
        </p>
      </footer>
      
    );
  };
  
  export default Footer;
  