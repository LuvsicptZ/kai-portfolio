export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
      <div className="absolute -top-[10vh] -left-[5vw] w-[40vw] h-[40vh] bg-blue-300/40 rounded-full blur-[12vh]" />
      <div className="absolute -bottom-[10vh] -right-[5vw] w-[45vw] h-[45vh] bg-purple-300/40 rounded-full blur-[12vh]" />
    </div>
  );
}