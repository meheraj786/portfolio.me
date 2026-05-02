"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} from "@/app/actions/project";
import {
  getSystemDesigns,
  createSystemDesign,
  deleteSystemDesign,
  updateSystemDesign,
} from "@/app/actions/systemDesign";
import {
  getArticles,
  createArticle,
  deleteArticle,
  updateArticle,
} from "@/app/actions/article";
import {
  getContactMessages,
  deleteContactMessage,
} from "@/app/actions/contact";
import TextEditor from "@/components/TextEditor";
import { logoutUser } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "projects" | "systemDesigns" | "articles" | "messages"
  >("projects");

  const [editingProject, setEditingProject] = useState<any>(null);
  const [editingSystemDesign, setEditingSystemDesign] = useState<any>(null);
  const [editingArticle, setEditingArticle] = useState<any>(null);

  // Projects
  const { data: projectsData, refetch: refetchProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });

  // System Designs
  const { data: systemDesignsData, refetch: refetchSystemDesigns } = useQuery({
    queryKey: ["systemDesigns"],
    queryFn: () => getSystemDesigns(),
  });

  // Articles
  const { data: articlesData, refetch: refetchArticles } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
  });

  // Contact Messages
  const { data: messagesData, refetch: refetchMessages } = useQuery({
    queryKey: ["messages"],
    queryFn: () => getContactMessages(),
  });

  const handleLogout = async () => {
    await logoutUser();
    router.push("/login");
  };

  return (
    <div className="text-gray-900">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 flex gap-3 border-b border-gray-300 pb-3">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "projects"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("systemDesigns")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "systemDesigns"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          System Designs
        </button>
        <button
          onClick={() => setActiveTab("articles")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "articles"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          Articles
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "messages"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          Messages
        </button>
      </div>

      {/* Projects Tab */}
      {activeTab === "projects" && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              {editingProject ? "Edit Project" : "Add New Project"}
            </h3>
            <ProjectForm
              key={editingProject?._id || "new"}
              initialData={editingProject}
              onSuccess={() => {
                refetchProjects();
                setEditingProject(null);
              }}
            />
            {editingProject && (
              <button
                onClick={() => setEditingProject(null)}
                className="mt-2 text-blue-600 hover:underline"
              >
                Cancel Edit
              </button>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">All Projects</h3>
            {projectsData?.success &&
              projectsData.projects?.map((project: any) => (
                <div
                  key={project._id}
                  className="border border-gray-300 p-4 mb-4 rounded-lg hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <div
                    className="text-gray-700 mb-2 prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  <p className="text-sm text-gray-600 mb-2">
                    Slug: {project.slug} | Tags: {project.tags?.join(", ")}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={async () => {
                        if (
                          confirm(
                            "Are you sure you want to delete this project?",
                          )
                        ) {
                          await deleteProject(project._id);
                          refetchProjects();
                        }
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* System Designs Tab */}
      {activeTab === "systemDesigns" && (
        <div>
          <h2 className="text-2xl font-bold mb-6">System Designs</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              {editingSystemDesign ? "Edit System Design" : "Add New System Design"}
            </h3>
            <SystemDesignForm
              key={editingSystemDesign?._id || "new"}
              initialData={editingSystemDesign}
              onSuccess={() => {
                refetchSystemDesigns();
                setEditingSystemDesign(null);
              }}
            />
            {editingSystemDesign && (
              <button
                onClick={() => setEditingSystemDesign(null)}
                className="mt-2 text-blue-600 hover:underline"
              >
                Cancel Edit
              </button>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">All System Designs</h3>
            {systemDesignsData?.success &&
              systemDesignsData.systemDesigns?.map((design: any) => (
                <div
                  key={design._id}
                  className="border border-gray-300 p-4 mb-4 rounded-lg hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold mb-2">{design.title}</h4>
                  <div
                    className="text-gray-700 mb-3 prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: design.description }}
                  />
                  <p className="text-sm text-gray-600 mb-2">
                    Slug: {design.slug}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setEditingSystemDesign(design)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={async () => {
                        if (
                          confirm(
                            "Are you sure you want to delete this system design?",
                          )
                        ) {
                          await deleteSystemDesign(design._id);
                          refetchSystemDesigns();
                        }
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Articles Tab */}
      {activeTab === "articles" && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Articles</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              {editingArticle ? "Edit Article" : "Add New Article"}
            </h3>
            <ArticleForm
              key={editingArticle?._id || "new"}
              initialData={editingArticle}
              onSuccess={() => {
                refetchArticles();
                setEditingArticle(null);
              }}
            />
            {editingArticle && (
              <button
                onClick={() => setEditingArticle(null)}
                className="mt-2 text-blue-600 hover:underline"
              >
                Cancel Edit
              </button>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">All Articles</h3>
            {articlesData?.success &&
              articlesData.articles?.map((article: any) => (
                <div
                  key={article._id}
                  className="border border-gray-300 p-4 mb-4 rounded-lg hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold mb-2">{article.title}</h4>
                  <div
                    className="text-gray-700 mb-2 prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.description }}
                  />
                  <p className="text-sm text-gray-600 mb-1">
                    Slug: {article.slug}
                  </p>
                  <p className="text-sm text-gray-600 mb-3 inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded">
                    Category: {article.category}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setEditingArticle(article)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={async () => {
                        if (
                          confirm(
                            "Are you sure you want to delete this article?",
                          )
                        ) {
                          await deleteArticle(article._id);
                          refetchArticles();
                        }
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Messages Tab */}
      {activeTab === "messages" && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>
          <div>
            {messagesData?.success &&
              messagesData.messages?.map((message: any) => (
                <div
                  key={message._id}
                  className="border border-gray-300 p-4 mb-4 rounded-lg hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold mb-2">
                    {message.name} ({message.email})
                  </h4>
                  <p className="text-gray-700 mb-2">{message.message}</p>
                  <small className="text-gray-500">
                    {new Date(message.createdAt).toLocaleString()}
                  </small>
                  <br />
                  <button
                    onClick={async () => {
                      if (
                        confirm("Are you sure you want to delete this message?")
                      ) {
                        await deleteContactMessage(message._id);
                        refetchMessages();
                      }
                    }}
                    className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Project Form Component
function ProjectForm({
  onSuccess,
  initialData,
}: {
  onSuccess: () => void;
  initialData?: any;
}) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [images, setImages] = useState(initialData?.images?.join(", ") || "");
  const [tags, setTags] = useState(initialData?.tags?.join(", ") || "");
  const [githubLink, setGithubLink] = useState(initialData?.githubLink || "");
  const [liveLink, setLiveLink] = useState(initialData?.liveLink || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      title,
      slug,
      description,
      images: images.split(",").map((img: string) => img.trim()),
      tags: tags.split(",").map((tag: string) => tag.trim()),
      githubLink,
      liveLink,
    };

    let result;
    if (initialData?._id) {
      result = await updateProject(initialData._id, data);
    } else {
      result = await createProject(data);
    }

    if (result.success) {
      if (!initialData) {
        setTitle("");
        setSlug("");
        setDescription("");
        setImages("");
        setTags("");
        setGithubLink("");
        setLiveLink("");
      }
      onSuccess();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 p-6 rounded-lg text-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Slug:</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description (Rich Text):</label>
        <TextEditor content={description} setContent={setDescription} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Images (comma-separated URLs):
        </label>
        <input
          type="text"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          required
          placeholder="url1, url2, url3"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Tags (comma-separated):
        </label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
          placeholder="tag1, tag2, tag3"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">GitHub Link:</label>
          <input
            type="url"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Live Link:</label>
          <input
            type="url"
            value={liveLink}
            onChange={(e) => setLiveLink(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        {initialData ? "Update Project" : "Add Project"}
      </button>
    </form>
  );
}

// System Design Form Component
function SystemDesignForm({
  onSuccess,
  initialData,
}: {
  onSuccess: () => void;
  initialData?: any;
}) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [githubLink, setGithubLink] = useState(initialData?.githubLink || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      title,
      slug,
      description,
      githubLink,
    };

    let result;
    if (initialData?._id) {
      result = await updateSystemDesign(initialData._id, data);
    } else {
      result = await createSystemDesign(data);
    }

    if (result.success) {
      if (!initialData) {
        setTitle("");
        setSlug("");
        setDescription("");
        setGithubLink("");
      }
      onSuccess();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 p-6 rounded-lg text-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Slug:</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Content (Description):</label>
        <TextEditor content={description} setContent={setDescription} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">GitHub Link:</label>
        <input
          type="url"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        {initialData ? "Update System Design" : "Add System Design"}
      </button>
    </form>
  );
}

// Article Form Component
function ArticleForm({
  onSuccess,
  initialData,
}: {
  onSuccess: () => void;
  initialData?: any;
}) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [category, setCategory] = useState(initialData?.category || "General");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      title,
      description,
      image,
      slug,
      category,
    };

    let result;
    if (initialData?._id) {
      result = await updateArticle(initialData._id, data);
    } else {
      result = await createArticle(data);
    }

    if (result.success) {
      if (!initialData) {
        setTitle("");
        setDescription("");
        setImage("");
        setSlug("");
        setCategory("General");
      }
      onSuccess();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 p-6 rounded-lg text-black"
    >
      <div>
        <label className="block text-sm font-medium mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Content (Description):</label>
        <TextEditor content={description} setContent={setDescription} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Slug:</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            placeholder="article-slug"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        {initialData ? "Update Article" : "Add Article"}
      </button>
    </form>
  );
}

export default Dashboard;
