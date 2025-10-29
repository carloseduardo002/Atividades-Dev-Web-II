type ImageCardProps = {
  src: string;
  legenda: string;
};

export function ImageCard({ src, legenda }: ImageCardProps) {
  return (
    <div className="image-card">
      <img src={src} alt={legenda} style={{ width: "200px", borderRadius: "8px" }} />
      <p>{legenda}</p>
    </div>
  );
}

