
import React, { useState, useEffect } from 'react';
import { Zap, Flame, Shield, Cpu, Battery, Settings } from 'lucide-react';
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
      icon: <Shield className="w-8 h-8" />,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-typewriter overflow-x-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--tw-gradient-stops))] from-transparent via-cyan-500/5 to-transparent animate-spin-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
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
            <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-neon-flicker">
              NEOTHERM
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text animate-rgb-pulse">
              X7
            </h2>
            <div className="text-xl md:text-2xl mt-6 text-cyan-300/80 tracking-wider">
              [ THE ULTIMATE QUANTUM CHAINSAW ]
            </div>
          </div>
        </header>

        {/* Hero Chainsaw Visual - More Realistic */}
        <div className="flex justify-center my-16">
          <div className="relative">
            {/* Chainsaw Body */}
            <div className="relative w-80 h-24 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border border-cyan-400/30 animate-float">
              {/* Handle */}
              <div className="absolute -left-6 top-2 w-8 h-20 bg-gradient-to-b from-slate-700 to-slate-900 rounded-l-lg border-l border-cyan-400/30"></div>
              
              {/* Engine Block */}
              <div className="absolute left-4 top-1 w-32 h-22 bg-gradient-to-br from-slate-600 to-slate-800 rounded border border-purple-400/20">
                <div className="absolute top-2 left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-cyan-400 text-xs font-bold absolute bottom-1 left-2">X7</div>
              </div>
              
              {/* Grip */}
              <div className="absolute left-36 top-6 w-20 h-12 bg-gradient-to-b from-slate-600 to-slate-800 rounded border border-cyan-400/30">
                <div className="absolute inset-1 bg-gradient-to-b from-slate-700 to-slate-900 rounded"></div>
              </div>
              
              {/* Trigger */}
              <div className="absolute left-40 top-18 w-6 h-8 bg-cyan-400 rounded-b animate-pulse"></div>
              
              {/* Power Indicators */}
              <div className="absolute top-1 right-4 flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            
            {/* Chain Bar */}
            <div className="absolute -right-40 top-8 w-48 h-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-r-full border border-cyan-400/50">
              {/* Chain */}
              <div className="absolute inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-r-full">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>
                </div>
              </div>
              
              {/* Chain Teeth */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{
                    left: `${10 + i * 12}px`,
                    top: '2px',
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
              
              {/* Glowing Edge */}
              <div 
                className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 rounded-r-full blur-sm animate-glow-rotate"
                style={{
                  filter: `brightness(${glowIntensity})`,
                }}
              ></div>
            </div>
            
            {/* Exhaust */}
            <div className="absolute -left-12 top-4 w-8 h-4 bg-orange-500/60 rounded-l-full animate-pulse">
              <div className="absolute -left-2 top-1 w-4 h-2 bg-orange-400/40 rounded-l-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <div className="backdrop-blur-sm bg-slate-900/30 rounded-2xl border border-cyan-400/20 p-8">
            <p className="text-lg md:text-xl text-cyan-100/90 mb-6 leading-relaxed">
              Experience the future of cutting technology with our revolutionary quantum-powered chainsaw.
              Engineered with alien-grade materials and powered by miniaturized fusion reactors.
            </p>
            <p className="text-base text-pink-300/80 italic">
              WARNING: May cause temporal rifts, spontaneous combustion of nearby objects, 
              and an overwhelming sense of power. Use responsibly.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            QUANTUM FEATURES
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/40 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`${feature.color} animate-rgb-pulse mb-4 p-3 rounded-full bg-slate-800/50 w-fit`}>
                    {feature.icon}
                  </div>
                  <CardTitle className={`${feature.color} text-lg font-bold tracking-wider`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            TECH SPECIFICATIONS
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {specs.map((spec, index) => (
              <div key={index} className="flex justify-between items-center bg-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <span className="text-cyan-300 text-sm font-medium tracking-wider">{spec.label}:</span>
                <span className={`${spec.color} text-lg font-bold`}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            QUANTUM ADVANTAGES
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                  <Cpu className="w-6 h-6" />
                  PROFESSIONAL GRADE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center"><Zap className="w-4 h-4 text-cyan-400 mr-3" /> Cut through reinforced concrete instantly</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-pink-400 mr-3" /> Slice through steel beams like paper</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-green-400 mr-3" /> Demolish structures in record time</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-yellow-400 mr-3" /> Zero maintenance required</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-cyan-900/30 to-pink-900/30 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  SAFETY PROTOCOLS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center"><Battery className="w-4 h-4 text-orange-400 mr-3" /> Automatic safety shutdown</li>
                  <li className="flex items-center"><Shield className="w-4 h-4 text-red-400 mr-3" /> Force field protection barrier</li>
                  <li className="flex items-center"><Settings className="w-4 h-4 text-purple-400 mr-3" /> Biometric security lock</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-blue-400 mr-3" /> Emergency teleportation escape</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-16">
          <div className="backdrop-blur-sm bg-slate-900/40 rounded-2xl border border-cyan-400/20 p-8 max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                $99,999.99
              </div>
              <div className="text-xl text-pink-300/80 line-through mb-2">
                MSRP: $199,999.99
              </div>
              <div className="text-lg text-cyan-300 font-medium">
                LIMITED TIME: 50% OFF FIRST 100 UNITS
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 shadow-lg">
                ACQUIRE NOW
              </Button>
              <Button variant="outline" className="border-2 border-cyan-400/50 text-cyan-300 font-bold text-lg px-8 py-4 rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                VIEW SPECS
              </Button>
            </div>
            
            <div className="mt-6 text-xs text-yellow-300/70 italic">
              *Powered by perpetual motion engine. Results may vary in alternate dimensions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
