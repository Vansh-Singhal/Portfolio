import { ShootingStars } from "./ui/shooting-stars"
import { StarsBackground } from "./ui/stars-background"

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center flex-col space-y-6">
      <ShootingStars />
      <StarsBackground />
      <span className="text-3xl">👋 HELLO! I AM</span>
      <h1 className="text-7xl font-bold tracking-wider">Vansh Singhal</h1>
      <h3 className="text-xl">Nice to meet you</h3>
    </div>
  )
}

export default HeroSection