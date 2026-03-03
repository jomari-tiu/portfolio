import { Modal } from "@/components/ui/Modal";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const images = project.imageList || [];
  
  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title={
        <div>
          <div className="text-xl font-semibold text-white">{project.title}</div>
          <div className="text-sm text-zinc-400 mt-1">{project.organization}</div>
        </div>
      }
    >
      {images.length > 0 ? (
        <ImageCarousel images={images} alt={project.title} />
      ) : (
        <div className="flex items-center justify-center h-full text-zinc-500">
          No images available for this project
        </div>
      )}
    </Modal>
  );
}
