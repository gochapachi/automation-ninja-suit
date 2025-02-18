
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  status: "draft" | "published";
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and start building web applications.",
      status: "published",
    },
    {
      id: 2,
      title: "Advanced TypeScript Tips",
      excerpt: "Discover advanced TypeScript features for better code quality.",
      status: "draft",
    },
  ]);

  const { toast } = useToast();

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
    toast({
      title: "Post deleted",
      description: "The blog post has been deleted successfully.",
    });
  };

  return (
    <AdminLayout>
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Post
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Blog Post</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Input placeholder="Post Title" />
              </div>
              <div>
                <Textarea placeholder="Post Content" className="h-32" />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Save Post</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Excerpt</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.excerpt}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      post.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {post.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Blogs;
