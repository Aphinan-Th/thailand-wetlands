export default function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Thailand&apos;s Wetlands</h3>
            <p className="text-muted-foreground">
              Dedicated to raising awareness about Thailand&apos;s wetland ecosystems through beautiful visualizations and educational content.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Conservation Efforts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Water Management</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Biodiversity Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Visit Thailand&apos;s Wetlands</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: contact@contact.com</li>
              <li>Phone: +66 2 123 4567</li>
              <li>Bangkok, Thailand</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Thailand&apos;s Wetlands. All rights reserved.</p>
          <p className="mt-2">
            Images and content inspired by Thailand&apos;s wetland conservation efforts.
          </p>
        </div>
      </div>
    </footer>
  );
}