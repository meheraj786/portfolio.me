"use client"; // ← এটা Client Component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, MessageCircle, Link as LinkIcon, Share2 } from "lucide-react";

interface ShareButtonsProps {
  articleUrl: string;
  title: string;
  description: string;
}

export default function ShareButtons({ articleUrl, title, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareText = encodeURIComponent(`${title} by Meheraj Hosen\n${description}\nRead more:`);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${shareText}&via=meheraj786`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
    whatsapp: `https://wa.me/?text=${shareText} ${encodeURIComponent(articleUrl)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="mt-12 mb-8 flex flex-wrap items-center justify-center gap-4">
      <p className="text-gray-600 font-body text-sm mr-2 flex items-center gap-2">
        <Share2 className="w-5 h-5" /> Share this article:
      </p>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-blue-50 transition-colors"
        asChild
      >
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="w-5 h-5 text-blue-500" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-blue-50 transition-colors"
        asChild
      >
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-700" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-blue-50 transition-colors"
        asChild
      >
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="w-5 h-5 text-blue-600" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-green-50 transition-colors"
        asChild
      >
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-5 h-5 text-green-600" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-gray-100 transition-colors"
        onClick={copyToClipboard}
      >
        <LinkIcon className="w-5 h-5 text-gray-600" />
      </Button>

      {copied && (
        <span className="text-green-600 text-sm font-body ml-2">Copied!</span>
      )}
    </div>
  );
}