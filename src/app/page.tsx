import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'

export default function Home(): React.ReactNode {
  return (
    <main>
      <p>Home Page</p>
      <Button className="bg-defaultDark dark:bg-defaultPrimary">
        Click me
      </Button>
      <ModeToggle />
    </main>
  )
}
