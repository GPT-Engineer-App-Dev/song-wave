import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import AudioPlayer from "@/components/AudioPlayer";

const playlistSchema = z.object({
  name: z.string().min(1, "Playlist name is required"),
  description: z.string().optional(),
  coverImage: z.any().optional(),
});

const Index = () => {
  const [playlists, setPlaylists] = useState([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(playlistSchema),
  });

  const onSubmit = (data) => {
    const newPlaylist = {
      id: playlists.length + 1,
      ...data,
    };
    setPlaylists([...playlists, newPlaylist]);
    toast("Playlist created successfully!");
    reset();
  };

  const currentSong = {
    title: "Sample Song",
    artist: "Sample Artist",
    url: "/sample-song.mp3",
  };

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
              {playlists.map((playlist) => (
                <div key={playlist.id} className="bg-muted p-4 rounded-lg">
                  <img src={playlist.coverImage || "/placeholder.svg"} alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                  <p className="mt-2 text-center">{playlist.name}</p>
                </div>
              ))}
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
        <AudioPlayer song={currentSong} />
      </footer>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="primary" className="fixed bottom-20 right-4">Create Playlist</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Playlist</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Playlist Name</Label>
              <Input id="name" {...register("name")} />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...register("description")} />
            </div>
            <div>
              <Label htmlFor="coverImage">Cover Image</Label>
              <Input type="file" id="coverImage" {...register("coverImage")} />
            </div>
            <Button type="submit">Create</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;