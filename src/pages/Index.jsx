import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
        <Input placeholder="Search..." className="w-1/2" />
        <Avatar className="w-10 h-10" />
      </header>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Featured Playlists</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2 text-center">Playlist 1</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2 text-center">Playlist 2</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2 text-center">Playlist 3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Recently Played</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2 text-center">Song 1</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2 text-center">Song 2</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2 text-center">Song 3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Popular Playlists</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2 text-center">Playlist 1</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2 text-center">Playlist 2</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2 text-center">Playlist 3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <footer className="fixed bottom-0 left-0 right-0 bg-muted/40 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2">Prev</button>
          <button className="p-2">Play</button>
          <button className="p-2">Next</button>
        </div>
        <div className="flex-grow mx-4">
          <div className="h-1 bg-muted rounded-full">
            <div className="h-full bg-primary rounded-full" style={{ width: "50%" }}></div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span>00:00</span>
          <span>03:30</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;