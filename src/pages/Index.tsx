
import React, { useState, useEffect } from 'react';
import { Zap, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [glowIntensity, setGlowIntensity] = useState(1);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(Math.random() * 2 + 0.5);
    }, 100);

    const flashInterval = setInterval(() => {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 150);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(flashInterval);
    };
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "PLASMA-EDGE TECHNOLOGY",
      description: "Cuts through titanium like butter with our proprietary plasma-infused chain technology.",
      color: "text-neon-cyan"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "THERMAL REGULATION",
      description: "Self-cooling quantum heat dissipation system prevents overheating during extreme operations.",
      color: "text-neon-pink"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "NEURAL SYNC",
      description: "Brain-computer interface for precision control and predictive cutting algorithms.",
      color: "text-neon-green"
    }
  ];

  const specs = [
    { label: "CUTTING SPEED", value: "15,000 RPM", color: "text-neon-cyan" },
    { label: "POWER OUTPUT", value: "50 TERAWATTS", color: "text-neon-pink" },
    { label: "BATTERY LIFE", value: "UNLIMITED*", color: "text-neon-green" },
    { label: "WEIGHT", value: "2.5 KG", color: "text-neon-yellow" },
    { label: "NOISE LEVEL", value: "WHISPER QUIET", color: "text-neon-purple" },
    { label: "WARRANTY", value: "LIFETIME", color: "text-neon-orange" }
  ];

  return (
    <div className="min-h-screen bg-black font-typewriter overflow-x-hidden animate-bg-shift">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center pt-16 pb-8">
          <div className={`transition-all duration-100 ${isFlashing ? 'brightness-200' : ''}`}>
            <h1 className="text-8xl md:text-9xl font-bold mb-4 animate-neon-flicker text-neon-cyan">
              NEOTHERM
            </h1>
            <h2 className="text-6xl md:text-7xl font-bold text-neon-pink animate-rgb-pulse">
              X7
            </h2>
            <div className="text-2xl md:text-3xl mt-6 text-neon-green animate-neon-flicker">
              [ THE ULTIMATE GLOWING CHAINSAW ]
            </div>
          </div>
        </header>

        {/* Hero Chainsaw Visual */}
        <div className="flex justify-center my-16">
          <div className="relative">
            <div 
              className="w-96 h-32 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green rounded-lg animate-glow-rotate animate-float"
              style={{
                filter: `brightness(${glowIntensity})`,
                boxShadow: `0 0 ${20 * glowIntensity}px #00ffff, 0 0 ${40 * glowIntensity}px #ff00ff, 0 0 ${60 * glowIntensity}px #00ff00`
              }}
            >
              <div className="absolute inset-2 bg-black rounded-md flex items-center justify-center">
                <span className="text-neon-cyan text-2xl font-bold animate-rgb-pulse">NEOTHERM X7</span>
              </div>
            </div>
            <div className="absolute -right-8 top-1/2 w-20 h-4 bg-neon-yellow animate-pulse rounded-r-full"></div>
            <div className="absolute -left-8 top-1/2 w-16 h-8 bg-neon-orange animate-spin-slow rounded-full"></div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <p className="text-xl md:text-2xl text-neon-cyan mb-8 animate-neon-flicker">
            Experience the future of cutting technology with our revolutionary quantum-powered chainsaw.
            Engineered with alien-grade materials and powered by miniaturized fusion reactors.
          </p>
          <p className="text-lg text-neon-pink animate-rgb-pulse">
            WARNING: May cause temporal rifts, spontaneous combustion of nearby objects, 
            and an overwhelming sense of power. Use responsibly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h3 className="text-5xl font-bold text-center mb-12 text-neon-green animate-neon-flicker">
            FEATURES
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black/70 border-2 border-neon-cyan animate-glow-rotate backdrop-blur-sm">
                <CardHeader>
                  <div className={`${feature.color} animate-rgb-pulse mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className={`${feature.color} text-xl animate-neon-flicker`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h3 className="text-5xl font-bold text-center mb-12 text-neon-pink animate-neon-flicker">
            TECH SPECS
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center bg-black/70 p-6 rounded-lg border border-neon-cyan animate-glow-rotate">
                <span className="text-neon-cyan text-lg animate-neon-flicker">{spec.label}:</span>
                <span className={`${spec.color} text-xl font-bold animate-rgb-pulse`}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <h3 className="text-5xl font-bold text-center mb-12 text-neon-yellow animate-neon-flicker">
            BENEFITS
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-lg border border-neon-purple animate-glow-rotate">
              <h4 className="text-2xl font-bold text-neon-purple mb-4 animate-neon-flicker">PROFESSIONAL GRADE</h4>
              <ul className="space-y-3 text-white">
                <li className="flex items-center"><Zap className="w-4 h-4 text-neon-cyan mr-2" /> Cut through reinforced concrete instantly</li>
                <li className="flex items-center"><Zap className="w-4 h-4 text-neon-pink mr-2" /> Slice through steel beams like paper</li>
                <li className="flex items-center"><Zap className="w-4 h-4 text-neon-green mr-2" /> Demolish structures in record time</li>
                <li className="flex items-center"><Zap className="w-4 h-4 text-neon-yellow mr-2" /> Zero maintenance required</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-pink-900/30 p-8 rounded-lg border border-neon-cyan animate-glow-rotate">
              <h4 className="text-2xl font-bold text-neon-cyan mb-4 animate-neon-flicker">SAFETY FEATURES</h4>
              <ul className="space-y-3 text-white">
                <li className="flex items-center"><Flame className="w-4 h-4 text-neon-orange mr-2" /> Automatic safety shutdown</li>
                <li className="flex items-center"><Flame className="w-4 h-4 text-neon-red mr-2" /> Force field protection barrier</li>
                <li className="flex items-center"><Flame className="w-4 h-4 text-neon-purple mr-2" /> Biometric security lock</li>
                <li className="flex items-center"><Flame className="w-4 h-4 text-neon-blue mr-2" /> Emergency teleportation escape</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-16">
          <div className="mb-8">
            <div className="text-6xl font-bold text-neon-green animate-neon-flicker mb-4">
              $99,999.99
            </div>
            <div className="text-2xl text-neon-pink animate-rgb-pulse line-through mb-2">
              MSRP: $199,999.99
            </div>
            <div className="text-xl text-neon-cyan">
              LIMITED TIME: 50% OFF FIRST 100 UNITS
            </div>
          </div>
          
          <div className="space-x-6">
            <Button className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-bold text-xl px-12 py-6 animate-glow-rotate hover:scale-110 transition-transform">
              ORDER NOW
            </Button>
            <Button variant="outline" className="border-2 border-neon-green text-neon-green font-bold text-xl px-12 py-6 animate-neon-flicker hover:bg-neon-green hover:text-black transition-all">
              LEARN MORE
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-neon-yellow animate-rgb-pulse">
            *Powered by perpetual motion engine. Results may vary in alternate dimensions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
