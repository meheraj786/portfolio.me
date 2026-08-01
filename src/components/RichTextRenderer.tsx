"use client";

export default function RichTextRenderer({ content }: { content: string }) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.tagName.toLowerCase() === "img") {
      const img = target as HTMLImageElement;
      const src = img.src;
      if (!src) return;

      if (src.startsWith("data:")) {
        // Convert base64 data URI -> Blob -> blob: URL (cheap to open, avoids hang)
        try {
          const [meta, base64] = src.split(",");
          const mimeMatch = meta.match(/data:(.*?);base64/);
          const mime = mimeMatch ? mimeMatch[1] : "image/png";

          const byteChars = atob(base64);
          const byteNumbers = new Array(byteChars.length);
          for (let i = 0; i < byteChars.length; i++) {
            byteNumbers[i] = byteChars.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: mime });
          const blobUrl = URL.createObjectURL(blob);

          const win = window.open(blobUrl, "_blank", "noopener,noreferrer");

          // Clean up the blob URL once the new tab has had time to load it
          if (win) {
            setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);
          } else {
            URL.revokeObjectURL(blobUrl);
          }
        } catch (err) {
          console.error("Failed to open embedded image:", err);
        }
      } else {
        // Regular hosted URL (e.g. Cloudinary) — just open it directly
        window.open(src, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className="text-lg text-gray-700 font-body mb-10 leading-relaxed prose max-w-none [&_img]:cursor-pointer [&_img]:transition-transform [&_img]:hover:scale-[1.01]"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}