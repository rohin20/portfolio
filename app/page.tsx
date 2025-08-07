import PixelTrail from "@/components/fancy/background/pixel-trail";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-center px-4 pt-32 relative">
      <PixelTrail 
        pixelSize={12}
        fadeDuration={500}
        delay={0}
        pixelClassName="bg-green-500"
      />
      
      <div className="max-w-2xl w-full relative pointer-events-none">
        <div className="space-y-3">
          <h1 className="text-2xl font-medium text-foreground pointer-events-auto">
            Rohin Phukan
          </h1>
          
          <p className="text-lg pointer-events-auto">
            studying cs @ cornell
          </p>
          
          <p className="text-lg pointer-events-auto">
            blah blah blah
          </p>
            
          
          <div className="flex space-x-4 text-foreground">
            <a 
              href="https://x.com/rohinph" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity underline pointer-events-auto"
            >
              x
            </a>
            <a 
              href="https://linkedin.com/in/rohin-phukan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity underline pointer-events-auto"
            >
              linkedin
            </a>
            <a 
              href="mailto:rp667@cornell.edu"
              className="hover:opacity-70 transition-opacity pointer-events-auto"
            >
              rp667 [at] cornell [dot] edu
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
