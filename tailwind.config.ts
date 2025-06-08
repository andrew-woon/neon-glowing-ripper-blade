
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'typewriter': ['Courier Prime', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neon: {
					cyan: '#00ffff',
					pink: '#ff00ff',
					green: '#00ff00',
					purple: '#8b5cf6',
					blue: '#3b82f6',
					red: '#ef4444',
					yellow: '#eab308',
					orange: '#f97316'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'rgb-pulse': {
					'0%': { color: '#ff00ff' },
					'16.66%': { color: '#00ffff' },
					'33.33%': { color: '#00ff00' },
					'50%': { color: '#ffff00' },
					'66.66%': { color: '#ff6600' },
					'83.33%': { color: '#ff0066' },
					'100%': { color: '#ff00ff' }
				},
				'neon-flicker': {
					'0%, 100%': { 
						textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
						opacity: '1'
					},
					'2%': { 
						textShadow: 'none',
						opacity: '0.8'
					},
					'8%': { 
						textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
						opacity: '1'
					},
					'9%': { 
						textShadow: 'none',
						opacity: '0.8'
					},
					'12%': { 
						textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
						opacity: '1'
					}
				},
				'glow-rotate': {
					'0%': { 
						boxShadow: '0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff'
					},
					'25%': { 
						boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff'
					},
					'50%': { 
						boxShadow: '0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00'
					},
					'75%': { 
						boxShadow: '0 0 20px #ffff00, 0 0 40px #ffff00, 0 0 60px #ffff00'
					},
					'100%': { 
						boxShadow: '0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bg-shift': {
					'0%': { backgroundColor: '#1a1a2e' },
					'25%': { backgroundColor: '#16213e' },
					'50%': { backgroundColor: '#0f3460' },
					'75%': { backgroundColor: '#16213e' },
					'100%': { backgroundColor: '#1a1a2e' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'rgb-pulse': 'rgb-pulse 2s ease-in-out infinite',
				'neon-flicker': 'neon-flicker 3s linear infinite',
				'glow-rotate': 'glow-rotate 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'bg-shift': 'bg-shift 8s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
