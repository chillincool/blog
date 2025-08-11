export default function Lucidchart({
  src,
  width = 960,
  height = 600,
}: { src: string; width?: number; height?: number }) {
  return (
    <div className="my-6">
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  )
}
