import Image from 'next/image';
import clsx from 'clsx';
import { Ornament } from './ornament';

const PLACEHOLDERS = ['medallion', 'bloom', 'flower', 'wreath'] as const;

// A white-bordered print holding a photo, or a Khmer ornament until one is added
export function PhotoFrame({
  src,
  alt,
  sizes,
  index = 0,
  focus,
  zoom,
  className,
}: {
  src: string | null;
  alt: string;
  sizes: string;
  index?: number;
  // Which part of the photo stays in the crop, as a CSS position, and how far to enlarge around it
  focus?: string;
  zoom?: number;
  className?: string;
}) {
  return (
    <div className={clsx('photo-print', className)}>
      <div className="relative size-full overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition: focus, transform: zoom ? `scale(${zoom})` : undefined, transformOrigin: focus }}
          />
        ) : (
          <div className="olive-paper absolute inset-0 flex items-center justify-center">
            <Ornament name={PLACEHOLDERS[index % PLACEHOLDERS.length]} className="w-1/2" />
          </div>
        )}
      </div>
    </div>
  );
}
